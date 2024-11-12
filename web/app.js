let specs = {};



// Fonction pour charger les spécifications au chargement de la page
async function loadSpecs() {
    try {
        const response = await fetch("http://localhost:3000/portail-specifications");
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des spécifications");
        }
        
        specs = await response.json();

        // Afficher les modèles dans le tableau
        const portalListElement = document.getElementById("portalList");

        // Liste des boutons à vérifier
        const buttons = ["110", "210", "310", "510"];
        
        // 110 : Portillons, 210 : Portails 2 vantaux, 310 : Portails coulissants, 510 : Portails coulissants 2 vantaux
        // On va attribuer les modèles correspondants à chaque bouton
        const descriptions = {
            "110": "Portillons",
            "210": "Portails 2 vantaux",
            "310": "Portails coulissants",
            "510": "Portails coulissants 2 vantaux",
        };

        // Récupérer la description correspondant au bouton actif
        const description = descriptions[buttons.find(buttonId => document.getElementById(buttonId).classList.contains("active"))];

        // Effacer le contenu actuel de la liste (si nécessaire)
        portalListElement.innerHTML = "";

        // Vérifier chaque bouton et charger les modèles correspondants
        buttons.forEach(buttonId => {
            if (document.getElementById(buttonId).classList.contains("active")) {
                const models = specs[`models${buttonId}`] || []; // Accès à la clé `models{buttonId}`

                // Ajouter chaque modèle dans une ligne du tableau avec un événement de clic
                models.forEach(model => {
                    const row = document.createElement("tr");
                    const cell = document.createElement("td");
                    cell.className = "col1";
                    cell.textContent = model;

                    // Ajoute l'événement de clic
                    row.addEventListener("click", () => {
                        document.getElementById("model").value = model; // Remplit le champ "Modèle"
                        updateCollection(); // Met à jour la collection
                        // passer la classe active au modele dans le tableau
                        const rows = document.querySelectorAll("tr");
                        rows.forEach(row => row.classList.remove("active"));
                        row.classList.add("active");
                    });

                    row.appendChild(cell);
                    portalListElement.appendChild(row);
                });

                // Mettre à jour la description
                const descriptionElement = document.getElementById("description");
                descriptionElement.innerHTML = `<h2>${description}</h2>`;

                // Mettre à jour la collection
                updateCollection();
            }
        });
    } catch (error) {
        console.error("Erreur lors de la lecture des spécifications des portails:", error);
    }
}




// Mettre à jour la collection basée sur le modèle
function updateCollection() {
    const modelInput = document.getElementById('model').value;
    const collectionInput = document.getElementById('collection');

    // Si le modele contient "210", la collection est "WEB_ELEG_2VTX"
    if (modelInput.includes("210")) {
        collectionInput.value = "WEB_ELEG_2VTX";
        
    } else {
        // Rechercher la collection correspondant au modèle
        const collection = specs.model_collections[modelInput] || ''; // Ou valeur par défaut
        
        // Mettre à jour la valeur de la collection
        collectionInput.value = collection;
    }
}

// Fonction rendre actif le bouton cliqué
function toggleActive(buttonNumber) {
    // Récupère tous les boutons
    const buttons = document.querySelectorAll('button');
    
    // Supprime la classe 'active' de tous les boutons
    buttons.forEach(button => button.classList.remove('active'));
    
    // Ajoute la classe 'active' au bouton cliqué
    buttons[buttonNumber - 1].classList.add('active');
}

// fonction pour envoyer la requête SOAP
async function sendRequest() {
    const getValue = (id) => document.getElementById(id).value;
    const color1 = getValue('color1');
    var color2 = getValue('color2');
    const width = getValue('width');
    const height = getValue('height');
    const width2 = getValue('width2');
    const collection = getValue('collection');
    var model = getValue('model'); // car le modèle peut être modifié sellon l'aspect
    const pose = getValue('pose');
    const sens_ouverture = getValue('sens_ouverture');
    const poteau_gauche = getValue('poteau_gauche');
    const poteau_droit = getValue('poteau_droit');
    const serrure = getValue('serrure');
    const ferrage = getValue('ferrage');
    const poignee = getValue('poignee');
    const decor = getValue('decor');
    const gammeDecor = getValue('gammeDecor');
    const numeroRue = getValue('numero');
    const aspect = getValue('aspect');

    // Déterminer le sens
    const sens = sens_ouverture.includes("gauche") ? "1" : "0";

    // Vérifier si le modèle est un modèle bicolor
    const isBicolor = specs.bicolor_fillings.includes(model);

    // si la couleur 2 est vide, on affecte la couleur 1 à la couleur 2
    if (color2 === "") {
        color2 = color1;
    }

    // Trouver les remplissages pour le modèle spécifié
    const modelName = model.match(/^[A-Za-z]+/)[0];
    const vantaux = specs.remplissage_vantail.filter(vantail => vantail.model === modelName);

    let remplissage_vantail1 = 0;
    let remplissage_vantail2 = 0;

    // Récupérer les remplissages pour les vantaux
    if (vantaux.length > 0) {
        ({ remplissage_vantail1, remplissage_vantail2 } = vantaux[0]);
    }

    var nombre_panneaux = 2;

    var transomXml = ''; // Initialiser le XML pour le poteau intermédiaire

    // Si l'aspect est "1" et que la largeur est supérieure à 4000, on choisit le modèle avec une traverse
    if (aspect === "1" && width > 4000) {
        // si ce n'est pas déjà un modèle avec traverse
        if (!model.endsWith("-M")) {
            model = model + "-M"; // Ajouter le suffixe "-M" pour le modèle avec traverse
        }
    }

    // Si l'aspect est "2", on modifie la traverse
    if (aspect === "2") {
        // si ce n'est pas déjà un modèle avec traverse
        if (!model.endsWith("-M")) {
            model = model + "-M"; // Ajouter le suffixe "-M" pour le modèle avec traverse
        }

        transomXml = `              <TRANSOM transom_id="1" leaf_id="1" filling_id="1" pos="W / 2" code="ALU ASPECT 2VTX" info="" masonry="1" />`;
    }

    // Si le modèle est de type '310' et qu'il existe des remplissages pour ce modèle
    if (model.includes("310") && specs.remplissage_vantail.some(vantail => vantail.model === modelName)) {
        // Modèle 310 n'a qu'un seul vantail
        let nombre_panneaux = 1;

        // Fusionner les remplissages du vantail 2 dans le vantail 1 pour les modèles '310'
        // Exemple : si remplissage_vantail1 = [2] et remplissage_vantail2 = [2], le résultat sera remplissage_vantail1 = [2, 4]
        
        // Trouver le plus grand remplissage existant dans les deux vantaux
        const maxRemplissage1 = Math.max(...remplissage_vantail1, 0); // Si vide, renvoie 0
        const maxRemplissage2 = Math.max(...remplissage_vantail2, 0);
        const maxRemplissage = Math.max(maxRemplissage1, maxRemplissage2);

        // Ajouter les éléments de remplissage_vantail2 avec un décalage pour les fusionner dans remplissage_vantail1
        remplissage_vantail1 = remplissage_vantail1.concat(
            remplissage_vantail2.map(value => value + maxRemplissage)
        );
        // Vider le remplissage du vantail 2 car tout est transféré dans le vantail 1
        remplissage_vantail2 = [];
    }


    // Construire le XML pour les vantaux
    const buildSashXml = () => {
        let sashXml = `<SASH id="1" leaves="${nombre_panneaux}" leaf_orientation="H" door="0" fixe="0" doorfixe="0">\n
                    <ASYMETRIC_LEAVES_0>${width2}</ASYMETRIC_LEAVES_0>\n
                    <FITTING_OPTION code="QQ_serrure" value="${serrure}" />\n
                    <FITTING_OPTION code="QQ_poignee" value="${poignee}" />\n
                    <SASH_OPTION code="QQ_ferrage" value="${ferrage}" />\n
                    <DIRECTION>${sens}</DIRECTION>\n\n`;

        if (!model.includes("110")) {
            
            for (let i = 0; i < remplissage_vantail1.length; i++) {
                sashXml += `                    <FILLING leaf_id="1" filling_id="${remplissage_vantail1[i]}">\n
                                <FILLING_INNER_COLOUR info="">${color2}</FILLING_INNER_COLOUR>\n
                    </FILLING>\n\n`;
            }
        
        
            for (let i = 0; i < remplissage_vantail2.length; i++) {
                sashXml += `                    <FILLING leaf_id="2" filling_id="${remplissage_vantail2[i]}">\n
                                <FILLING_INNER_COLOUR info="">${color2}</FILLING_INNER_COLOUR>\n
                    </FILLING>\n\n`;
            }

        } else {
            sashXml += `                    <FILLING leaf_id="1" filling_id="2">\n
                                    <FILLING_INNER_COLOUR info="">${color2}</FILLING_INNER_COLOUR>\n
                        </FILLING>\n\n`;
        }

        sashXml += transomXml; // Ajouter le poteau intermédiaire si nécessaire

        sashXml += `                    </SASH>\n`;
        return sashXml;
    };

    // Si le modèle n'est pas un portillon
    if (!model.includes("110")) {
        // Ajuster les dimensions pour les modèles B, BH, BB, B, CDG et CDGI
        if (model.endsWith("-B") || model.endsWith("-BB") || model.endsWith("-BH") || model.endsWith("-CDG") || model.endsWith("-CDGI")) {
            console.log("Ajustement des dimensions pour le modèle:", model);

            if (model.endsWith("-BH")) {
                // Si le modèle est un modèle -BH ou -BB, C = width/2, D = C * Tangeant(7°) et E = C * Tangeant(7°)
                var C = width / 2;
                var D = C * Math.tan(7 * Math.PI / 180);
                var E = C * Math.tan(7 * Math.PI / 180);
                var shapeXml = `<SHAPE id="16" c="${C}" d="${D}" e="${E}" />`;
            } else if (model.endsWith("-BB")) {
                // Si le modèle est un modèle -BH ou -BB, C = width/2, D = - (C * Tangeant(7°)) et E = - (C * Tangeant(7°))
                var C = width / 2;
                var D = - (C * Math.tan(7 * Math.PI / 180));
                var E = - (C * Math.tan(7 * Math.PI / 180));
                var shapeXml = `<SHAPE id="16" c="${C}" d="${D}" e="${E}" />`;
            } else if (model.endsWith("-B")) {
                // Si le modèle est un modèle -B, C = 7514 * (1 - racine(1 - (width^2/4*7514^2)))
                var C = 7514 * (1 - Math.sqrt(1 - (width ** 2 / (4 * 7514 ** 2))));
                var shapeXml = `<SHAPE id="8" c="${C}" />`;
            } else if (model.endsWith("-CDG")) {
                // Si le modèle est un modèle -CDG, C = 200, E = 1686, F = 1804, D = (width - 2329) / 4 + 15
                var C = 200;
                var E = 1686;
                var F = 1804;
                var D = (width - 2329) / 4 + 15;
                var shapeXml = `<SHAPE id="42" c="${C}" d="${D}" e="${E}" f="${F}" />`;
            } else { // CDGI
                // Si le modèle est un modèle -CDGI, C = -200, E = 1804, F = 1686, D = (width - 2329) / 4 + 15
                var C = -200;
                var E = 1804;
                var F = 1686;
                var D = (width - 2329) / 4 + 15;
                var shapeXml = `<SHAPE id="42" c="${C}" d="${D}" e="${E}" f="${F}" />`;
            }

        } else {
            var shapeXml = '';
        }
    } else { // Si le modèle est un portillon
        // Ajuster les dimensions pour les modèles B, BH, BB, B, CDG et CDGI
        if (model.includes("-B") || model.includes("-CDG") || model.includes("-CDGI")) {
            console.log("Ajustement des dimensions pour le modèle:", model);

            if (model.includes("-B")) {
                // Si le modèle est un modèle -B, C = 7514, E = B - C
                var C = 7514
                var E = height - C;
                // si le sens d'ouverture est à gauche, d = weight sinon d=0
                if (sens_ouverture.includes("gauche")) {
                    var D = width;

                    // ajouter -D à la fin du modèle
                    model = model + "-G";
                } else {
                    var D = 0;

                    // ajouter -G à la fin du modèle
                    model = model + "-D";
                }
                var shapeXml = `<SHAPE id="5" c="${C}" d="${D}" e="${E}" />`;
            } else if (model.includes("-CDG") && sens_ouverture.includes("droite")) {
                // Si le modèle est un modèle -CDG et ouverture droite, C = 200, E = 904, F = 786, D = (weight - 797.5) / 2 + 5
                var C = 200;
                var E = 904;
                var F = 786;
                var D = (width - 797.5) / 2 + 5;
                var shapeXml = `<SHAPE id="43" orientation="1" c="${C}" d="${D}" e="${E}" f="${F}" />`;

                // ajouter -D à la fin du modèle
                model = model + "-D";
            } else if (model.includes("-CDG") && sens_ouverture.includes("gauche")) {
                // Si le modèle est un modèle -CDG et ouverture gauche, C = 200, E = 786, F = 904, D = (weight - 797.5) / 2 - 5*
                var C = 200;
                var E = 786;
                var F = 904;
                var D = (width - 797.5) / 2 - 5;
                var shapeXml = `<SHAPE id="43" orientation="-1" c="${C}" d="${D}" e="${E}" f="${F}" />`;

                // ajouter -G à la fin du modèle
                model = model + "-G";
            }

        } else {
            var shapeXml = '';
        }
    }

    // Construire le XML pour les profils périphériques
    if (gammeDecor === "QP_GamDecor_Sans") {
        var peripheralProfileXml = ``
    } else {
        var peripheralProfileXml = `
                    <PERIPHERAL_PROFILES>
                        <PERIPHERAL_PROFILE code="DECORS">
                            <PERIPHERAL_PROFILE_OPTION code="QP_GamDecor" value="${gammeDecor}" />
                            <PERIPHERAL_PROFILE_OPTION code="QP_ModDecor" value="${decor}" />
                            <PERIPHERAL_PROFILE_OPTION code="QP_NumRue" value="${numeroRue}" />
                        </PERIPHERAL_PROFILE>
                    </PERIPHERAL_PROFILES>
        `;
    }


    // Construire le XML pour la requête
    const buildRequestXml = (sashXml) => {
        return `
        <REQUEST_TO_WINPRO>
            <REQUEST_TYPE>0</REQUEST_TYPE>
            <LIBRARY>${collection}</LIBRARY>
            <ITEM>${model}</ITEM>
            <IMAGE type="svg" view="reverse" />
            <DIMENSION_LINES>0</DIMENSION_LINES>
            <CONFIGS>
                <CONFIG>
                    <WIDTH>${width}</WIDTH>
                    <HEIGHT>${height}</HEIGHT>
                    ${shapeXml}
                    <COLOUR>${color1}</COLOUR>\n
                    ${isBicolor ? `<FILLING_INNER_COLOUR info="">${color2}</FILLING_INNER_COLOUR>\n` : ''}
                    
                    ${sashXml}

                    ${peripheralProfileXml}                    
                    
                    <OPTION code="QD_ControleCoheL" value="QD_ControleCoheL_non" />
                    <OPTION code="QD_typepose" value="${pose}" />
                    <OPTION code="QD_sensouv" value="${sens_ouverture}" />
                    <OPTION code="QD_poteauG" value="${poteau_gauche}" />
                    <OPTION code="QD_poteauD" value="${poteau_droit}" />
                </CONFIG>
            </CONFIGS>
            <GET_CONFIG type="1"/>
        </REQUEST_TO_WINPRO>`;
    };

    // Affichage de la requête XML
    console.log("Requête XML:");
    console.log(buildRequestXml(buildSashXml()));

    // Construire l'enveloppe SOAP
    const buildSoapEnvelope = (requestXml) => {
        return `
        <soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:Webshopv1-IWebshopv1">
            <soapenv:Header/>
            <soapenv:Body>
                <urn:webshop soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                    <sValue xsi:type="xsd:string"><![CDATA[<?xml version="1.0" encoding="UTF-8"?>${requestXml}]]></sValue>
                    <sLogin xsi:type="xsd:string">YOUR_LOGIN</sLogin>
                    <sToken xsi:type="xsd:string">YOUR_TOKEN</sToken>
                </urn:webshop>
            </soapenv:Body>
        </soapenv:Envelope>`;
    };

    // Envoyer la requête SOAP
    try {
        console.log("Envoi de la requête SOAP...");
        const sashXml = buildSashXml();
        const requestXml = buildRequestXml(sashXml);
        const soapEnvelope = buildSoapEnvelope(requestXml);

        const response = await fetch("http://localhost:3000/sendSoapRequest", {
            method: 'POST',
            headers: { 'Content-Type': 'text/xml' },
            body: soapEnvelope,
        });

        if (!response.ok) {
            const errorText = await response.text();

            // afficher le message d'erreur dans le conteneur d'image
            const imageContainer = document.getElementById("imageContainer");
            imageContainer.innerHTML = `<h2>${errorText}</h2>`;

            throw new Error(`Erreur lors de l'envoi de la requête : ${errorText}`);
        }

        const responseText = await response.text();

        const formattedData = responseText
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/ onmouseenter="WPitemEnter\(this\)"/g, "")
            .replace(/ onmouseleave="WPitemLeave\(this\)"/g, "")
            .replace(/ onclick="WPitemClick\(this\)"/g, "");

        const svgElement = extractSvgAndAdjustViewBox(formattedData, width, height);
        const imageContainer = document.getElementById("imageContainer");
        imageContainer.innerHTML = "";
        if (svgElement) {
            svgElement.style.maxWidth = '100%';
            svgElement.style.height = '500px';
            svgElement.style.display = 'block';
            imageContainer.appendChild(svgElement);
        }

        console.log("Réponse SOAP reçue:", responseText);
    } catch (error) {
        console.error("Erreur lors de l'envoi de la requête:", error);
    }
}

// Fonction pour extraire le contenu SVG et ajuster la viewBox
function extractSvgAndAdjustViewBox(xmlContent, width, height) {
    // Trouver le début et la fin de l'élément SVG
    const startIndex = xmlContent.indexOf('<svg');
    const endIndex = xmlContent.indexOf('</svg>', startIndex);

    if (startIndex !== -1 && endIndex !== -1) {
        // Extraire le contenu SVG
        let svgContent = xmlContent.slice(startIndex, endIndex + '</svg>'.length);
        
        // Analyser le SVG pour obtenir les coordonnées extrêmes
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
        const svgElement = svgDoc.documentElement;

        let minX = Number.POSITIVE_INFINITY;
        let minY = Number.POSITIVE_INFINITY;
        let maxX = Number.NEGATIVE_INFINITY;
        let maxY = Number.NEGATIVE_INFINITY;

        // Parcourir tous les éléments ayant des attributs de position
        svgElement.querySelectorAll('*').forEach(elem => {
            const x = parseFloat(elem.getAttribute('x')) || 0;
            const y = parseFloat(elem.getAttribute('y')) || 0;
            const width = parseFloat(elem.getAttribute('width')) || 0;
            const height = parseFloat(elem.getAttribute('height')) || 0;

            // Calculer les points extrêmes et ajouter une petite marge
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x + width);
            maxY = Math.max(maxY, y + height);
        });

        // Ajuster la viewBox
        const viewBox = `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;
        svgElement.setAttribute("viewBox", viewBox);
        return svgElement;
    } else {
        console.error("Aucun élément SVG trouvé dans la réponse.");
        return null;
    }
}

// Charger les spécifications à l'ouverture de la page
loadSpecs();

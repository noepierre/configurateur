import { specs } from './specsLoader.js';

export async function sendRequest() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const width2 = document.getElementById('width2').value;
    const collection = document.getElementById('collection').value;
    const model = document.getElementById('model').value;
    const pose = document.getElementById('pose').value;
    const sens = document.getElementById('sens').value;
    const sens_ouverture = document.getElementById('sens_ouverture').value;
    const poteau_gauche = document.getElementById('poteau_gauche').value;
    const poteau_droit = document.getElementById('poteau_droit').value;
    const serrure = document.getElementById('serrure').value;
    const ferrage = document.getElementById('ferrage').value;

    // Vérifier si le modèle est bicolore
    const isBicolor = specs.bicolor_fillings.includes(model);

    // Récupérer les vantaux pour le modèle
    const vantaux = specs.vantaux.filter(v => v.model === model);

    // Calculer le nombre de panneaux (le max dans les leaf_id)
    const nombre_panneaux = Math.max(...vantaux.map(v => v.leaf_id));

    // Construire la section SASH
    let sashXml = `<SASH id="1" leaves="${nombre_panneaux}" leaf_orientation="H" door="0" fixe="0" doorfixe="0">\n
                <ASYMETRIC_LEAVES_0>${width2}</ASYMETRIC_LEAVES_0>\n
                <FITTING_OPTION code="QQ_serrure" value="${serrure}" />\n
                <SASH_OPTION code="QQ_ferrage" value="${ferrage}" />\n
                <DIRECTION>${sens}</DIRECTION>\n`;
    
    vantaux.forEach((vant, index) => {
        sashXml += `    <FILLING leaf_id="${vant.leaf_id}" filling_id="${vant.filling_id}">\n`;
            sashXml += `        <FILLING_INNER_COLOUR info="">${color2}</FILLING_INNER_COLOUR>\n`;
        sashXml += `    </FILLING>\n`;
    });
    
    sashXml += `</SASH>\n`;

    // Construire la requête XML
    let requestXml = `
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
                <COLOUR>${color1}</COLOUR>\n`;

    // Ajouter la couleur intérieure si le modèle est bicolore
    if (isBicolor) {
        requestXml += `<FILLING_INNER_COLOUR info="">${color2}</FILLING_INNER_COLOUR>\n`;
    }

    // Ajouter la section SASH
    requestXml += `
                ${sashXml}
                <OPTION code="QD_ControleCoheL" value="QD_ControleCoheL_non" />
                <OPTION code="QD_typepose" value="${pose}" />
                <OPTION code="QD_sensouv" value="${sens_ouverture}" />
                <OPTION code="QD_poteauG" value="${poteau_gauche}" />
                <OPTION code="QD_poteauD" value="${poteau_droit}" />

            </CONFIG>
        </CONFIGS>
        <GET_CONFIG type="1"/>
    </REQUEST_TO_WINPRO>
    `;

    console.log("Requête XML:", requestXml);

    // Construire la requête SOAP avec le XML
    const soapEnvelope = `
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

    try {
        console.log("Envoi de la requête SOAP...");
        // Envoyer la requête SOAP via le serveur Node.js
        const response = await fetch("http://localhost:3000/sendSoapRequest", {
            method: 'POST',
            headers: { 'Content-Type': 'text/xml' },
            body: soapEnvelope,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erreur lors de l'envoi de la requête : ${errorText}`);
        }
        
        // Obtenir la réponse en texte
        const responseText = await response.text();
        console.log(responseText);

        // Formater et traiter la réponse
        const formattedData = responseText
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/ onmouseenter="WPitemEnter\(this\)"/g, "")
            .replace(/ onmouseleave="WPitemLeave\(this\)"/g, "")
            .replace(/ onclick="WPitemClick\(this\)"/g, "");

        // Extraire le SVG et ajuster la viewBox
        const svgElement = extractSvgAndAdjustViewBox(formattedData, width, height);
        document.getElementById("imageContainer").innerHTML = "";
        if (svgElement) {
            svgElement.style.maxWidth = '100%';  // Laisser l'image s'adapter à la largeur du conteneur
            svgElement.style.height = '500px';    // Hauteur fixe
            svgElement.style.display = 'block';   // Afficher en tant que bloc
            document.getElementById("imageContainer").appendChild(svgElement);
        }

    } catch (error) {
        console.error("Erreur lors de l'envoi de la requête SOAP:", error);
    }
}

// Fonction pour extraire le SVG de la réponse et ajuster la viewBox
function extractSvgAndAdjustViewBox(responseText, width, height) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(responseText, 'text/xml');
    const svgElement = doc.getElementsByTagName("svg")[0];

    if (svgElement) {
        svgElement.setAttribute("viewBox", `0 0 ${width} ${height}`);
        return svgElement;
    } else {
        console.error("Aucun élément SVG trouvé dans la réponse.");
        return null;
    }
}
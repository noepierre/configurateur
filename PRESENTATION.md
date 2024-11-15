# LIEN ENTRE WINPRO ET UNE PAGE WEB

## Introduction

Ce projet vise à établir un lien entre WinPro et une page web, permettant d'interroger WinPro depuis l'interface web et de recevoir ses réponses. Pour cela, une API SOAP (Simple Object Access Protocol) est utilisée, facilitant l'échange de données en XML.

## Prérequis

- WinPro
- WebShop
- SOAP UI (pour tester l'API et comprendre son fonctionnement)
- Un éditeur de code

## Fonctionnement

L'API SOAP est un protocole de communication qui permet d'échanger des données structurées entre un serveur et un client. Dans notre cas, le serveur est WinPro et le client est une page web. L'API SOAP est basée sur XML, un langage de balisage qui permet de structurer les données de manière hiérarchique.

Exemple simple de requête SOAP :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:Webshopv1-IWebshopv1">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:webshop soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <sValue xsi:type="xsd:string">
                  <![CDATA[<?xml version="1.0" encoding="UTF-8"?>
                    <REQUEST_TO_WINPRO>

                        <REQUEST_TYPE>0</REQUEST_TYPE>
                        <LIBRARY>WEB_ELEG_2VTX</LIBRARY>
                        <ITEM>ALTA210</ITEM>

                        <IMAGE type="svg" view="reverse" />
                        <DIMENSION_LINES>0</DIMENSION_LINES>

                        <CONFIGS>
                            <CONFIG>
                                <WIDTH>4000</WIDTH>
                                <HEIGHT>1400</HEIGHT>                
                                <COLOUR>7016STRU</COLOUR>

                                <OPTION code="QD_poteauG" value="QD_poteauG_180" />
                                <OPTION code="QD_poteauD" value="QD_poteauD_180" />
                            </CONFIG>
                        </CONFIGS>

                        <GET_CONFIG type="1"/>

				    </REQUEST_TO_WINPRO>
                  ]]>
          </sValue>
          <sLogin xsi:type="xsd:string">?</sLogin>
          <sToken xsi:type="xsd:string">?</sToken>
       </urn:webshop>
    </soapenv:Body>
</soapenv:Envelope>
```

- LIBRARY : La collection
- ITEM : Le modèle
- IMAGE : Le format de l'image
- DIMENSION_LINES : Afficher les lignes de cotes ou non
- CONFIGS : Les configurations
- CONFIG : La configuration
- WIDTH : Largeur
- HEIGHT : Hauteur
- COLOUR : Couleur
- OPTION code="QD_poteauD" value="QD_poteauD_180" : Ajout d'un poteau à droite
- GET_CONFIG : Type de réponse (0= image, 1= image + infos)

Tous ces paramètres sont des paramètres de WinPro.

Pour le poteau, il s'agit d'une question/réponse dans WinPro :

![](images/poteau.png)

<details>
<summary>Réponse de WinPro à la requête ci-dessus</summary>

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/">
   <SOAP-ENV:Body SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:NS1="urn:Webshopv1-IWebshopv1">
      <NS1:webshopResponse>
         <return xsi:type="xsd:string"><![CDATA[<?xml version="1.0" encoding="UTF-8"?>
<ANSWER_FROM_WINPRO>
<REQUEST_ID>261E0C0A88121C781A4F2C4C1FA120C0BFB9C875</REQUEST_ID>
<WINPRO_ID>C33FD04EEDDED9C97CAB9B5C1A3FDEDD488E5F1F</WINPRO_ID>
<DEFAULT_DIMS a="4000.001999999999953" b="1600.001999999999953"/>
<ERROR_CODE>0</ERROR_CODE>
<CURRENCY>EUR</CURRENCY>
<DEC_PLACES>2</DEC_PLACES>
<PRICE>4581.84</PRICE>
<MARGIN_ERROR>Margin  does not exist</MARGIN_ERROR>
<DESCRIPTION>PORTAIL ALTAIR 2 VANTAUX - Azet Abaca</DESCRIPTION>
<WEIGHT>96.1</WEIGHT>
<SURFACE>0</SURFACE>
<PERIMETER>10.8</PERIMETER>
<INFORMATIONS>
<INFORMATION>
<CODE>ALU PORTAIL</CODE>
<TEXT>Les Barreaux et lames sont en FEVR4 au lieu de TIGER depuis Fab semaine 37 (07/09/2020)</TEXT>
</INFORMATION>
</INFORMATIONS>
<DRAWING>
<![CDATA[<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" viewbox="-180.000000000000057 -0 4360.002000000000408 1900.001999999999953" winpro-url="http://www.winpro.be" winpro-info="software for windows and doors manufacturer" winpro-version="WinPro 10.6.0.5130">
<defs>
<marker id="markerArrow1" markerWidth="13" markerHeight="13" refx="9" refy="6" orient="auto">
<path d="M2,2 L2,10 L10,6 Z" fill="#000000"/>
</marker>
<marker id="markerArrow2" markerWidth="13" markerHeight="13" refx="2" refy="6" orient="auto">
<path d="M10,2 L10,10 L2,6 Z" fill="#000000"/>
</marker>
</defs>
<g>
<path d="M127.001000000000005 204.000999999999976 L127.001000000000005 114.000999999999976 L1903.000999999999976 114.000999999999976 L1903.000999999999976 204.000999999999976 L127.001000000000005 204.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1903.000999999999976 1455.000999999999976 L127.001000000000005 1455.000999999999976 L127.001000000000005 1305.000999999999976 L1903.000999999999976 1305.000999999999976 L1903.000999999999976 1455.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1902.000999999999749 1458.000999999999976 L1902.000999999999749 104.000999999999976 L1992.001000000000204 104.000999999999976 L1992.001000000000204 1458.000999999999976 L1902.000999999999749 1458.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M25.000999999999962 1458.000999999999976 L25.000999999999962 104.000999999999976 L128.001000000000033 104.000999999999976 L128.001000000000033 1458.000999999999976 L25.000999999999962 1458.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M112.001000000000005 1148.901000000000067 L1918.000999999999976 1148.901000000000067 L1918.000999999999976 1320.000999999999976 L112.001000000000005 1320.000999999999976 L112.001000000000005 1148.901000000000067" style="stroke:#58606A;stroke-width:1;fill:#2C343E" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" data-fillingTotal_id="1" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1918.000999999999976 1153.601000000000113 L112.001000000000005 1153.601000000000113 L112.001000000000005 1129.201000000000022 L1918.000999999999976 1129.201000000000022 L1918.000999999999976 1153.601000000000113" style="stroke:#747983;stroke-width:1;fill:#BBC0CA" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" data-fillingTotal_id="1" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1918.000999999999976 1133.901000000000067 L112.001000000000005 1133.901000000000067 L112.001000000000005 889.401000000000067 L1918.000999999999976 889.401000000000067 L1918.000999999999976 1133.901000000000067" style="stroke:#58606A;stroke-width:1;fill:#2C343E" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" data-fillingTotal_id="1" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1918.000999999999976 894.101000000000113 L112.001000000000005 894.101000000000113 L112.001000000000005 869.701000000000022 L1918.000999999999976 869.701000000000022 L1918.000999999999976 894.101000000000113" style="stroke:#747983;stroke-width:1;fill:#BBC0CA" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" data-fillingTotal_id="1" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1918.000999999999976 874.401000000000067 L112.001000000000005 874.401000000000067 L112.001000000000005 629.901000000000067 L1918.000999999999976 629.901000000000067 L1918.000999999999976 874.401000000000067" style="stroke:#58606A;stroke-width:1;fill:#2C343E" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" data-fillingTotal_id="1" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1918.000999999999976 634.601000000000113 L112.001000000000005 634.601000000000113 L112.001000000000005 610.201000000000022 L1918.000999999999976 610.201000000000022 L1918.000999999999976 634.601000000000113" style="stroke:#747983;stroke-width:1;fill:#BBC0CA" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" data-fillingTotal_id="1" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1918.000999999999976 614.901000000000067 L112.001000000000005 614.901000000000067 L112.001000000000005 370.401000000000067 L1918.000999999999976 370.401000000000067 L1918.000999999999976 614.901000000000067" style="stroke:#58606A;stroke-width:1;fill:#2C343E" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" data-fillingTotal_id="1" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1918.000999999999976 375.101000000000113 L112.001000000000005 375.101000000000113 L112.001000000000005 350.701000000000022 L1918.000999999999976 350.701000000000022 L1918.000999999999976 375.101000000000113" style="stroke:#747983;stroke-width:1;fill:#BBC0CA" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" data-fillingTotal_id="1" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1918.000999999999976 355.401000000000067 L112.001000000000005 355.401000000000067 L112.001000000000005 189.000999999999976 L1918.000999999999976 189.000999999999976 L1918.000999999999976 355.401000000000067" style="stroke:#58606A;stroke-width:1;fill:#2C343E" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" data-fillingTotal_id="1" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M112.001000000000005 1320.000999999999976 L112.001000000000005 189.000999999999976 L1918.000999999999976 189.000999999999976 L1918.000999999999976 1320.000999999999976 L112.001000000000005 1320.000999999999976" style="stroke:#000000;stroke-width:1" fill-opacity="0" fill="none" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" filling_id="1" data-filling_id="1" data-fillingTotal_id="1" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1903.000999999999749 116.000999999999976 L1903.000999999999749 104.000999999999976 L1920.500999999999749 104.000999999999976 L1920.500999999999749 116.000999999999976 L1903.000999999999749 116.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1974.500999999999749 1458.000999999999976 L1974.500999999999749 1435.000999999999976 L1992.001000000000204 1435.000999999999976 L1992.001000000000204 1458.000999999999976 L1974.500999999999749 1458.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M109.501000000000033 116.000999999999976 L109.501000000000033 104.000999999999976 L127.001000000000033 104.000999999999976 L127.001000000000033 116.000999999999976 L109.501000000000033 116.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M127.001000000000005 1455.000999999999976 L127.001000000000005 1437.500999999999976 L1903.000999999999976 1437.500999999999976 L1903.000999999999976 1455.000999999999976 L127.001000000000005 1455.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M25.000999999999962 1457.000999999999976 L25.000999999999962 105.000999999999976 L55.501000000000033 105.000999999999976 L55.501000000000033 1457.000999999999976 L25.000999999999962 1457.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M127.001000000000005 204.000999999999976 L127.001000000000005 114.000999999999976 L1903.000999999999976 114.000999999999976 L1903.000999999999976 204.000999999999976 L127.001000000000005 204.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1903.000999999999976 1455.000999999999976 L127.001000000000005 1455.000999999999976 L127.001000000000005 1305.000999999999976 L1903.000999999999976 1305.000999999999976 L1903.000999999999976 1455.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M1902.000999999999749 1458.000999999999976 L1902.000999999999749 104.000999999999976 L1992.001000000000204 104.000999999999976 L1992.001000000000204 1458.000999999999976 L1902.000999999999749 1458.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<g code="ALU 2VTX">
<rect x="1900.500999999999749" y="1458.000999999999976" width="93" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="1900.500999999999749" y="1458.000999999999976" width="93" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<g code="ALU 2VTX">
<rect x="1900.500999999999749" y="100.000999999999976" width="93" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="1900.500999999999749" y="100.000999999999976" width="93" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<path d="M25.000999999999962 1458.000999999999976 L25.000999999999962 104.000999999999976 L128.001000000000033 104.000999999999976 L128.001000000000033 1458.000999999999976 L25.000999999999962 1458.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<g code="ALU 2VTX">
<rect x="0.000999999999962" y="1494.000999999999976" rx="12" ry="12" width="65" height="-32" stroke="#000000" stroke-width="0.2%" fill="#000000" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="0.000999999999962" y="1391.000999999999976" width="11" height="103" stroke="#000000" stroke-width="0.2%" fill="#000000" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="0.000999999999962" y="1494.000999999999976" rx="12" ry="12" width="65" height="-32" stroke="#000000" stroke-width="0.2%" fill="#000000" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="0.000999999999962" y="1391.000999999999976" width="11" height="103" stroke="#000000" stroke-width="0.2%" fill="#000000" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<g code="ALU 2VTX">
<path d="M90.000999999999962 90.000999999999976 A90 30 0  0,0 0.000999999999946 60.000999999999976" stroke="#000000" stroke-width="0.2%" fill="none" fill-opacity="0" stroke-opacity="1"/>
<path d="M0.000999999999962 100.000999999999976 L0.000999999999962 100.000999999999976 L90.000999999999962 100.000999999999976 L0.000999999999962 100.000999999999976" stroke="#000000" stroke-width="0.2%" fill="#262E38" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M90.000999999999962 90.000999999999976 A90 30 0  0,0 0.000999999999946 60.000999999999976" stroke="#000000" stroke-width="0.2%" fill="none" fill-opacity="0" stroke-opacity="1"/>
<path d="M90.000999999999962 100.000999999999976 L0.000999999999962 100.000999999999976 L90.000999999999962 100.000999999999976 L90.000999999999962 100.000999999999976" stroke="#000000" stroke-width="0.2%" fill="#262E38" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<g code="ALU 2VTX">
<rect x="23.500999999999962" y="1458.000999999999976" width="106" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="23.500999999999962" y="1458.000999999999976" width="106" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<g code="ALU 2VTX">
<rect x="23.500999999999962" y="100.000999999999976" width="106" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="23.500999999999962" y="100.000999999999976" width="106" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<path d="M2097.001000000000204 204.000999999999976 L2097.001000000000204 114.000999999999976 L3873.001000000000204 114.000999999999976 L3873.001000000000204 204.000999999999976 L2097.001000000000204 204.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3873.001000000000204 1455.000999999999976 L2097.001000000000204 1455.000999999999976 L2097.001000000000204 1305.000999999999976 L3873.001000000000204 1305.000999999999976 L3873.001000000000204 1455.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3872.001000000000204 1458.000999999999976 L3872.001000000000204 104.000999999999976 L3975.001000000000204 104.000999999999976 L3975.001000000000204 1458.000999999999976 L3872.001000000000204 1458.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M2008.000999999999976 1458.000999999999976 L2008.000999999999976 104.000999999999976 L2098.001000000000204 104.000999999999976 L2098.001000000000204 1458.000999999999976 L2008.000999999999976 1458.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M2082.001000000000204 1148.901000000000067 L3888.001000000000204 1148.901000000000067 L3888.001000000000204 1320.000999999999976 L2082.001000000000204 1320.000999999999976 L2082.001000000000204 1148.901000000000067" style="stroke:#58606A;stroke-width:1;fill:#2C343E" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" data-fillingTotal_id="2" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3888.001000000000204 1153.601000000000113 L2082.001000000000204 1153.601000000000113 L2082.001000000000204 1129.201000000000022 L3888.001000000000204 1129.201000000000022 L3888.001000000000204 1153.601000000000113" style="stroke:#747983;stroke-width:1;fill:#BBC0CA" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" data-fillingTotal_id="2" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3888.001000000000204 1133.901000000000067 L2082.001000000000204 1133.901000000000067 L2082.001000000000204 889.401000000000067 L3888.001000000000204 889.401000000000067 L3888.001000000000204 1133.901000000000067" style="stroke:#58606A;stroke-width:1;fill:#2C343E" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" data-fillingTotal_id="2" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3888.001000000000204 894.101000000000113 L2082.001000000000204 894.101000000000113 L2082.001000000000204 869.701000000000022 L3888.001000000000204 869.701000000000022 L3888.001000000000204 894.101000000000113" style="stroke:#747983;stroke-width:1;fill:#BBC0CA" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" data-fillingTotal_id="2" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3888.001000000000204 874.401000000000067 L2082.001000000000204 874.401000000000067 L2082.001000000000204 629.901000000000067 L3888.001000000000204 629.901000000000067 L3888.001000000000204 874.401000000000067" style="stroke:#58606A;stroke-width:1;fill:#2C343E" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" data-fillingTotal_id="2" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3888.001000000000204 634.601000000000113 L2082.001000000000204 634.601000000000113 L2082.001000000000204 610.201000000000022 L3888.001000000000204 610.201000000000022 L3888.001000000000204 634.601000000000113" style="stroke:#747983;stroke-width:1;fill:#BBC0CA" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" data-fillingTotal_id="2" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3888.001000000000204 614.901000000000067 L2082.001000000000204 614.901000000000067 L2082.001000000000204 370.401000000000067 L3888.001000000000204 370.401000000000067 L3888.001000000000204 614.901000000000067" style="stroke:#58606A;stroke-width:1;fill:#2C343E" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" data-fillingTotal_id="2" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3888.001000000000204 375.101000000000113 L2082.001000000000204 375.101000000000113 L2082.001000000000204 350.701000000000022 L3888.001000000000204 350.701000000000022 L3888.001000000000204 375.101000000000113" style="stroke:#747983;stroke-width:1;fill:#BBC0CA" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" data-fillingTotal_id="2" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3888.001000000000204 355.401000000000067 L2082.001000000000204 355.401000000000067 L2082.001000000000204 189.000999999999976 L3888.001000000000204 189.000999999999976 L3888.001000000000204 355.401000000000067" style="stroke:#58606A;stroke-width:1;fill:#2C343E" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" data-fillingTotal_id="2" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M2082.001000000000204 1320.000999999999976 L2082.001000000000204 189.000999999999976 L3888.001000000000204 189.000999999999976 L3888.001000000000204 1320.000999999999976 L2082.001000000000204 1320.000999999999976" style="stroke:#000000;stroke-width:1" fill-opacity="0" fill="none" code="ALU PORTAIL" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" filling_id="1" data-filling_id="1" data-fillingTotal_id="2" origin="p" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3873.001000000000204 116.000999999999976 L3873.001000000000204 104.000999999999976 L3890.501000000000204 104.000999999999976 L3890.501000000000204 116.000999999999976 L3873.001000000000204 116.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M2079.501000000000204 116.000999999999976 L2079.501000000000204 104.000999999999976 L2097.001000000000204 104.000999999999976 L2097.001000000000204 116.000999999999976 L2079.501000000000204 116.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M2097.001000000000204 1455.000999999999976 L2097.001000000000204 1437.500999999999976 L3873.001000000000204 1437.500999999999976 L3873.001000000000204 1455.000999999999976 L2097.001000000000204 1455.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M2008.000999999999976 1458.000999999999976 L2008.000999999999976 104.000999999999976 L2026.501000000000204 104.000999999999976 L2026.501000000000204 1458.000999999999976 L2008.000999999999976 1458.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3944.501000000000204 1457.000999999999976 L3944.501000000000204 105.000999999999976 L3975.001000000000204 105.000999999999976 L3975.001000000000204 1457.000999999999976 L3944.501000000000204 1457.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M2097.001000000000204 204.000999999999976 L2097.001000000000204 114.000999999999976 L3873.001000000000204 114.000999999999976 L3873.001000000000204 204.000999999999976 L2097.001000000000204 204.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3873.001000000000204 1455.000999999999976 L2097.001000000000204 1455.000999999999976 L2097.001000000000204 1305.000999999999976 L3873.001000000000204 1305.000999999999976 L3873.001000000000204 1455.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M3872.001000000000204 1458.000999999999976 L3872.001000000000204 104.000999999999976 L3975.001000000000204 104.000999999999976 L3975.001000000000204 1458.000999999999976 L3872.001000000000204 1458.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<g code="ALU 2VTX">
<rect x="4000.001000000000204" y="1494.000999999999976" rx="12" ry="12" width="-65" height="-32" stroke="#000000" stroke-width="0.2%" fill="#000000" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="4000.001000000000204" y="1391.000999999999976" width="-11" height="103" stroke="#000000" stroke-width="0.2%" fill="#000000" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="4000.001000000000204" y="1494.000999999999976" rx="12" ry="12" width="-65" height="-32" stroke="#000000" stroke-width="0.2%" fill="#000000" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="4000.001000000000204" y="1391.000999999999976" width="-11" height="103" stroke="#000000" stroke-width="0.2%" fill="#000000" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<g code="ALU 2VTX">
<path d="M4000.001000000000204 60.000999999999976 A90 30 0  0,0 3910.001000000000204 90.000999999999976" stroke="#000000" stroke-width="0.2%" fill="none" fill-opacity="0" stroke-opacity="1"/>
<path d="M4000.001000000000204 100.000999999999976 L3910.001000000000204 100.000999999999976 L4000.001000000000204 100.000999999999976 L4000.001000000000204 100.000999999999976" stroke="#000000" stroke-width="0.2%" fill="#262E38" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M4000.001000000000204 60.000999999999976 A90 30 0  0,0 3910.001000000000204 90.000999999999976" stroke="#000000" stroke-width="0.2%" fill="none" fill-opacity="0" stroke-opacity="1"/>
<path d="M4000.001000000000204 100.000999999999976 L3910.001000000000204 100.000999999999976 L4000.001000000000204 100.000999999999976 L4000.001000000000204 100.000999999999976" stroke="#000000" stroke-width="0.2%" fill="#262E38" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<g code="ALU 2VTX">
<rect x="3870.501000000000204" y="1458.000999999999976" width="106" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="3870.501000000000204" y="1458.000999999999976" width="106" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<g code="ALU 2VTX">
<rect x="3870.501000000000204" y="100.000999999999976" width="106" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="3870.501000000000204" y="100.000999999999976" width="106" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<path d="M2008.000999999999976 1458.000999999999976 L2008.000999999999976 104.000999999999976 L2098.001000000000204 104.000999999999976 L2098.001000000000204 1458.000999999999976 L2008.000999999999976 1458.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="2" data-leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<g code="ALU 2VTX">
<rect x="2006.500999999999976" y="1458.000999999999976" width="93" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="2006.500999999999976" y="1458.000999999999976" width="93" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<g code="ALU 2VTX">
<rect x="2006.500999999999976" y="100.000999999999976" width="93" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="2006.500999999999976" y="100.000999999999976" width="93" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<path d="M1973.500999999999749 1435.000999999999976 L1973.500999999999749 109.000999999999976 L2024.501000000000204 109.000999999999976 L2024.501000000000204 1435.000999999999976 L1973.500999999999749 1435.000999999999976" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU 2VTX" sash_id="1" data-sash_id="1" leaf_id="1" data-leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<g code="ALU 2VTX">
<rect x="1972.000999999999749" y="105.000999999999976" width="55" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="1972.000999999999749" y="105.000999999999976" width="55" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="1" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<path d="M4000.001000000000204 1900.001999999999953 L4000.001000000000204 0 L4180.002000000000408 0 L4180.002000000000408 1900.001999999999953 L4000.001000000000204 1900.001999999999953" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU PORTAIL" leaf_id="0" data-leaf_id="0" origin="F" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M-180.000000000000057 1900.001999999999953 L-180.000000000000057 0 L0.001000000000043 0 L0.001000000000043 1900.001999999999953 L-180.000000000000057 1900.001999999999953" style="stroke:#58606A;stroke-width:1;fill:#262E38" code="ALU PORTAIL" leaf_id="0" data-leaf_id="0" origin="F" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<g code="ALU PORTAIL">
<rect x="3998.501000000000204" y="-4" width="184" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" leaf_id="0" origin="F" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="3998.501000000000204" y="-4" width="184" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" leaf_id="0" origin="F" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<g code="ALU PORTAIL">
<rect x="-181.500000000000057" y="-4" width="184" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" leaf_id="0" origin="F" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="-181.500000000000057" y="-4" width="184" height="4" stroke="#171F29" stroke-width="0.1%" fill="#171F29" fill-opacity="1" stroke-opacity="1" leaf_id="0" origin="F" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<path d="M0 1500.001999999999953 L0 100 L4000.002000000000408 100 L4000.002000000000408 1500.001999999999953 L0 1500.001999999999953" style="stroke:#000000;stroke-width:1" fill-opacity="0" fill="none" code="" leaf_id="0" data-leaf_id="0" origin="F" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<path d="M0.001 1500.000999999999976 L0.001 100.000999999999976 L4000.001000000000204 100.000999999999976 L4000.001000000000204 1500.000999999999976 L0.001 1500.000999999999976" style="stroke:#000000;stroke-width:1" fill-opacity="0" fill="none" stroke-dasharray="8" code="" leaf_id="0" data-leaf_id="0" origin="?" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<g code="ALU 2VTX" data-no-click="true"/>
<g code="ALU 2VTX">
<rect x="1940.500999999999976" y="1430.000999999999976" rx="90" ry="40" width="40" height="70" stroke="#000000" stroke-width="0.2%" fill="#808080" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="1935.500999999999976" y="1480.000999999999976" width="130" height="20" stroke="#000000" stroke-width="0.2%" fill="#000000" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="1935.500999999999976" y="1455.000999999999976" rx="90" ry="40" width="130" height="45" stroke="#000000" stroke-width="0.2%" fill="#000000" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
<g code="ALU 2VTX">
<rect x="2048.001000000000204" y="403.000999999999976" rx="10" ry="10" width="120" height="20" stroke="#000000" stroke-width="0.1%" fill="#C8C8C8" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<rect x="2053.001000000000204" y="483.000999999999976" rx="10" ry="10" width="10" height="25" stroke="#000000" stroke-width="0.1%" fill="#C8C8C8" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<circle cx="2058.001000000000204" cy="483.000999999999976" r="9" stroke="#000000" stroke-width="0.1%" fill="#C8C8C8" fill-opacity="1" stroke-opacity="1" sash_id="1" data-sash_id="1" leaf_id="2" origin="S" data-set_id="0" data-set_part_id="0" onmouseenter="WPitemEnter(this)" onmouseleave="WPitemLeave(this)" onclick="WPitemClick(this)"/>
<data-no-click>true</data-no-click>
</g>
</g>
<g/>
</svg>
]]]]>><![CDATA[</DRAWING>
<SASH_NUMBERING>0</SASH_NUMBERING>
<CONFIGS>
<CONFIG>
<LIBRARY>WEB_ELEG_2VTX</LIBRARY>
<ITEM>ALTA210</ITEM>
<WIDTH>4000</WIDTH>
<HEIGHT>1400</HEIGHT>
<WEIGHT>96.1</WEIGHT>
<ENSEMBLE>0</ENSEMBLE>
<IDENSEMBLE>0</IDENSEMBLE>
<PARTIE>0</PARTIE>
<SURFACE>0</SURFACE>
<PERIMETER>10.8</PERIMETER>
<INPUT_MODE_SELECT>WALL</INPUT_MODE_SELECT>
<INPUT_MODE>1</INPUT_MODE>
<MASONRY_EXTENSION>0</MASONRY_EXTENSION>
<MASONRY_DEPTH_L>0</MASONRY_DEPTH_L>
<MASONRY_DEPTH_T>0</MASONRY_DEPTH_T>
<MASONRY_DEPTH_R>0</MASONRY_DEPTH_R>
<MASONRY_DEPTH_B>0</MASONRY_DEPTH_B>
<WIDTH_MIN>0</WIDTH_MIN>
<WIDTH_MAX>9999</WIDTH_MAX>
<HEIGHT_MIN>0</HEIGHT_MIN>
<HEIGHT_MAX>9999</HEIGHT_MAX>
<SHAPE id="0" info="SHAPE_0" orientation="0"/>
<WITH_ROLLER_SHUTTER>0</WITH_ROLLER_SHUTTER>
<SYSTEM info="">ALU PORTAIL</SYSTEM>
<FRAME info="">ALU PORTAIL</FRAME>
<FRAME_B info="">ALU PORTAIL</FRAME_B>
<FRAME_T info="">ALU PORTAIL</FRAME_T>
<FRAME_L info="">ALU PORTAIL</FRAME_L>
<FRAME_R info="">ALU PORTAIL</FRAME_R>
<FRAME_TL info="">ALU PORTAIL</FRAME_TL>
<FRAME_TR info="">ALU PORTAIL</FRAME_TR>
<FRAME_BL info="">ALU PORTAIL</FRAME_BL>
<FRAME_BR info="">ALU PORTAIL</FRAME_BR>
<GLAZING_BEADS info="">ALU PORTAIL</GLAZING_BEADS>
<WITH_RAL_COLOURS>0</WITH_RAL_COLOURS>
<COLOUR info="">7016STRU</COLOUR>
<WITH_FIN_COLOURS>1</WITH_FIN_COLOURS>
<FIN_OUTER_FRAME info=""></FIN_OUTER_FRAME>
<WITH_SILL>0</WITH_SILL>
<OPTION id="1" code="QD_Dessin" value="QD_Dessin_Client" question_text="Dessin Portail" answer_text="Vue Client" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="2" code="QD_modeleA" value="QD_modeleA_ALTAIR" question_text="Modèle de portail" answer_text="ALTAÏR" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="3" code="QD_FabSpe" value="QD_FabSpe_Std" question_text="Fabrication Spéciale" answer_text="Fabrication Standard" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="4" code="QD_typepose" value="QD_typepose_entrep" question_text="Type de pose" answer_text="Pose Entre Piliers" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="5" code="QD_poteauD" value="QD_poteauD_180" question_text="Poteau ALU à droite" answer_text="Poteau de 180mm à droite" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="6" code="QD_poteauG" value="QD_poteauG_180" question_text="Poteau ALU à gauche" answer_text="Poteau de 180mm à Gauche" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="7" code="QD_PosePoteauD" value="QD_PosePoteauD_Sol" question_text="Pose Poteau DROITE" answer_text="Pose au sol" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="0" code="QD_hauteurPoteauD" value="0" question_text="Hauteur du POTEAU à Droite" answer_text="0" type="0" info="" level="0" title="" picture="" text=""/>
<OPTION id="8" code="QD_PosePoteauG" value="QD_PosePoteauG_Sol" question_text="Pose Poteau GAUCHE" answer_text="Pose au sol" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="0" code="QD_hauteurPoteauG" value="0" question_text="Hauteur du POTEAU à Gauche" answer_text="0" type="0" info="" level="0" title="" picture="" text=""/>
<OPTION id="9" code="QD_posepoteaux" value="QD_posepoteaux_scel" question_text="Fixation poteaux" answer_text="pose poteaux scellés" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="0" code="QD_LongScelmtPoteaux" value="0" question_text="Profondeur scelement Poteau (400mm std) :" answer_text="0" type="0" info="" level="0" title="" picture="" text=""/>
<OPTION id="10" code="QD_FournPoteaux" value="QD_FournPoteaux_Avec" question_text="Fourniture Poteaux" answer_text="Avec la commande" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="11" code="QD_jeusousportail" value="QD_jeusousportail_std" question_text="Jeu sous portail" answer_text="Jeu sous portail standard" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="12" code="QD_KitRetouche" value="QD_KitRetouche_sans" question_text="Kit Retouche Peinture" answer_text="Sans Kit de retouche peinture" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="13" code="QD_ControleCoheL" value="QD_ControleCoheL_Oui" question_text="Controle Cohérence Largeurs Rempl" answer_text="Activée" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="0" code="QD_PrixPortail" value="0" question_text="Prix du Portail" answer_text="0" type="0" info="" level="0" title="" picture="" text=""/>
<OPTION id="0" code="QD_PrixOptions" value="0" question_text="Prix des options" answer_text="0" type="0" info="" level="0" title="" picture="" text=""/>
<OPTION id="0" code="QD_PVGrille" value="0" question_text="Plus value spéciale sur grille de prix" answer_text="0" type="0" info="" level="0" title="" picture="" text=""/>
<FILLING_TYPE>3</FILLING_TYPE>
<GLAZING info="">ALU PORTAIL</GLAZING>
<FILLING_INNER_COLOUR info="">FEVR4</FILLING_INNER_COLOUR>
<GLAZING_OPTION id="14" code="QR_TypeRempl" value="QR_TypeRempl_Lames" question_text="Type de remplissage" answer_text="LAMES EMPILEES" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<GLAZING_OPTION id="15" code="QR_typelames" value="QR_typelames_24020" question_text="Type de lames empilées" answer_text="Lames de 240+20" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<GLAZING_OPTION id="16" code="QR_OrienLames" value="QR_OrienLames_Horiz" question_text="Orientation lames" answer_text="Horizontales" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<GLAZING_OPTION id="17" code="QR_RepartLames" value="QR_RepartLames_auto" question_text="Répartition des lames" answer_text="Automatique" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<GLAZING_OPTION id="18" code="QR_CouleurBI" value="QR_CouleurBI_D3" question_text="Bicoloration lames de remplissages" answer_text="Grande lame couleur Ouvrant, lame de 20 bicolore" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<GLAZING_OPTION id="19" code="QR_BiCOLOR20" value="QR_BiCOLOR20_uni" question_text="Bicoloration lames de 20" answer_text="lame de 20 couleur unie" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<GLAZING_OPTION id="20" code="QR_ModDecor" value="QR_ModDecor_Sans" question_text="Modèle de Décor" answer_text="Sans Décor" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<GLAZING_OPTION id="21" code="QR_BALdansRempl" value="QR_BALdansRempl_sans" question_text="Boite au lettre dans Remplissage" answer_text="Sans Boite à Lettres" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FLAG_NO_TRANSOM>1</FLAG_NO_TRANSOM>
<SASH id="1" leaves="2" leaf_orientation="H" door="0" fixe="0" doorfixe="0">
<SASH_CODE info="">ALU 2VTX</SASH_CODE>
<FITTING info="">ALU 2VTX</FITTING>
<DIRECTION>0</DIRECTION>
<FILLING_TYPE info="FILLING_TYPE_3" >3</FILLING_TYPE>
<SASH_OPTION id="22" code="QO_sensouv" value="QO_sensouv_droiteP" question_text="Sens d&apos;ouverture" answer_text="Droite POUSSANT - vue de l&apos;exterieur (std)" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<SASH_OPTION id="23" code="QO_Battement" value="QO_Battement_ext" question_text="Profil Battement int/Ext" answer_text="Battement simple Exterieur" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<SASH_OPTION id="24" code="QQ_ferrage" value="QQ_ferrage_B" question_text="Type de Ferrage Vantail Principal" answer_text="Ferrage B - Gond 2 points Haut et multireglable Bas" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<SASH_OPTION id="25" code="QQ_ferrage2" value="QQ_ferrage2_idem" question_text="Type de Ferrage Vantail Secondaire" answer_text="Ferrage identique au vantail principal" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="26" code="QQ_Motor" value="QQ_Motor_sans" question_text="Motorisation" answer_text="sans motorisation" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="27" code="QQ_serrure" value="QQ_serrure_PR" question_text="Serrure" answer_text="Serrure Pène Rentrant" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="28" code="QQ_gache" value="QQ_gache_Manuel" question_text="Gache Electrique" answer_text="Gache manuelle" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="29" code="QQ_Poignee" value="QQ_Poignee_BeqInox" question_text="Poignée Extérieure" answer_text="Bequille Inox extérieure" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="30" code="QQ_PoigneeI" value="QQ_PoigneeI_BeqInox" question_text="Poignée intérieure" answer_text="Bequille Inox intérieure" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="31" code="QQ_HPoigneeSTD" value="QQ_HPoigneeSTD_Std" question_text="Hauteur Poignée (ou gache Elec)" answer_text="Hauteur Poignée Standard" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="0" code="QQ_HPoignee" value="1087" question_text="Hauteur Poignée / Sol" answer_text="1087" type="5" info="" level="0" title="" picture="" text=""/>
<FITTING_OPTION id="32" code="QQ_jambeCV" value="QQ_jambeCV_sans" question_text="Jambe de Contreventement" answer_text="Sans jambe de Contreventement" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="33" code="QQ_verrouSF" value="QQ_verrouSF_SMan" question_text="Vérouillage 2ème vantail" answer_text="Sabot pour butée semi fixe Manuel" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="34" code="QQ_RehausseSab" value="QQ_RehausseSab_sans" question_text="Rehausse de sabot" answer_text="Sans rehausse de sabot" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="35" code="QQ_CorniereOccultante" value="QQ_CorniereOccultante_sans" question_text="Cornière occultante" answer_text="Sans cornière occultante" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="36" code="QQ_jointAPD" value="QQ_jointAPD_avec" question_text="Joint anti pince doigt" answer_text="AVEC joint anti pince doigt" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="37" code="QQ_arretPortail" value="QQ_arretPortail_avec" question_text="Butée arrêt de portail" answer_text="avec butée d&apos;arrêt" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FITTING_OPTION id="38" code="QQ_SocleArret" value="QQ_SocleArret_sans" question_text="Socle arrêt de portail" answer_text="Sans" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<FILLING leaf_id="1" filling_id="1">
<FILLING_TYPE>0</FILLING_TYPE>
</FILLING>
<FILLING leaf_id="2" filling_id="1">
<FILLING_TYPE>0</FILLING_TYPE>
</FILLING>
</SASH>
<QUESTION_SELECTIONS>
<OPTION id="1">
<SEL value="QD_Dessin_Client" code="QD_Dessin_Client" info="" text="" title="Vue Client" picture="" level="0"/>
<SEL value="QD_Dessin_Atelier" code="QD_Dessin_Atelier" info="" text="" title="Vue Atelier" picture="" level="0"/>
<SEL value="QD_Dessin_Plan" code="QD_Dessin_Plan" info="" text="" title="Vue Plan Projet" picture="" level="0"/>
</OPTION>
<OPTION id="2">
<SEL value="QD_modeleA_ABALON" code="QD_modeleA_ABALON" info="" text="" title="ABALON" picture="" level="0"/>
<SEL value="QD_modeleA_ALPHA" code="QD_modeleA_ALPHA" info="" text="" title="ALPHA" picture="" level="0"/>
<SEL value="QD_modeleA_ALTAIR" code="QD_modeleA_ALTAIR" info="" text="" title="ALTAÏR" picture="" level="0"/>
<SEL value="QD_modeleA_ANTAR" code="QD_modeleA_ANTAR" info="" text="" title="ANTARCTIQUE" picture="" level="0"/>
<SEL value="QD_modeleA_ANTARES" code="QD_modeleA_ANTARES" info="" text="" title="ANTARES" picture="" level="0"/>
<SEL value="QD_modeleA_ARCEN" code="QD_modeleA_ARCEN" info="" text="" title="ARC EN CIEL" picture="" level="0"/>
<SEL value="QD_modeleA_ARCTI" code="QD_modeleA_ARCTI" info="" text="" title="ARCTIQUE" picture="" level="0"/>
<SEL value="QD_modeleA_ASTRO" code="QD_modeleA_ASTRO" info="" text="" title="ASTRONAUTE" picture="" level="0"/>
<SEL value="QD_modeleA_ATACA" code="QD_modeleA_ATACA" info="" text="" title="ATACAMA" picture="" level="0"/>
<SEL value="QD_modeleA_ATLAS" code="QD_modeleA_ATLAS" info="" text="" title="ATLAS" picture="" level="0"/>
<SEL value="QD_modeleA_ATRIA" code="QD_modeleA_ATRIA" info="" text="" title="ATRIA" picture="" level="0"/>
<SEL value="QD_modeleA_AUROR" code="QD_modeleA_AUROR" info="" text="" title="AURORE" picture="" level="0"/>
<SEL value="QD_modeleA_AVIOR" code="QD_modeleA_AVIOR" info="" text="" title="AVIOR" picture="" level="0"/>
<SEL value="QD_modeleA_BARA" code="QD_modeleA_BARA" info="" text="" title="BARA" picture="" level="0"/>
<SEL value="QD_modeleA_BAUGE" code="QD_modeleA_BAUGE" info="" text="" title="BAUGE" picture="" level="0"/>
<SEL value="QD_modeleA_BEAUG" code="QD_modeleA_BEAUG" info="" text="" title="BEAUGENCY" picture="" level="0"/>
<SEL value="QD_modeleA_BEAUR" code="QD_modeleA_BEAUR" info="" text="" title="BEAUREGARD" picture="" level="0"/>
<SEL value="QD_modeleA_BRIAR" code="QD_modeleA_BRIAR" info="" text="" title="BRIARE" picture="" level="0"/>
<SEL value="QD_modeleA_BRISS" code="QD_modeleA_BRISS" info="" text="" title="BRISSAC" picture="" level="0"/>
<SEL value="QD_modeleA_CAPELLA" code="QD_modeleA_CAPELLA" info="" text="" title="CAPELLA" picture="" level="0"/>
<SEL value="QD_modeleA_CHALB" code="QD_modeleA_CHALB" info="" text="" title="CHALBI" picture="" level="0"/>
<SEL value="QD_modeleA_CHANT" code="QD_modeleA_CHANT" info="" text="" title="CHANTELOUP" picture="" level="0"/>
<SEL value="QD_modeleA_CHAUM" code="QD_modeleA_CHAUM" info="" text="" title="CHAUMONT" picture="" level="0"/>
<SEL value="QD_modeleA_CHISS" code="QD_modeleA_CHISS" info="" text="" title="CHISSAY" picture="" level="0"/>
<SEL value="QD_modeleA_CHROMA" code="QD_modeleA_CHROMA" info="" text="" title="CHROMA" picture="" level="0"/>
<SEL value="QD_modeleA_COMET" code="QD_modeleA_COMET" info="" text="" title="COMETE" picture="" level="0"/>
<SEL value="QD_modeleA_CREPU" code="QD_modeleA_CREPU" info="" text="" title="CREPUSCULE" picture="" level="0"/>
<SEL value="QD_modeleA_DANAK" code="QD_modeleA_DANAK" info="" text="" title="DANAKIL" picture="" level="0"/>
<SEL value="QD_modeleA_DEGRE" code="QD_modeleA_DEGRE" info="" text="" title="DEGREE" picture="" level="0"/>
<SEL value="QD_modeleA_ESPAC" code="QD_modeleA_ESPAC" info="" text="" title="ESPACE" picture="" level="0"/>
<SEL value="QD_modeleA_ETINC" code="QD_modeleA_ETINC" info="" text="" title="ETINCELLE" picture="" level="0"/>
<SEL value="QD_modeleA_FOUDR" code="QD_modeleA_FOUDR" info="" text="" title="FOUDRE" picture="" level="0"/>
<SEL value="QD_modeleA_GALA" code="QD_modeleA_GALA" info="" text="" title="GALA" picture="" level="0"/>
<SEL value="QD_modeleA_GIBSO" code="QD_modeleA_GIBSO" info="" text="" title="GIBSON" picture="" level="0"/>
<SEL value="QD_modeleA_GIENAH" code="QD_modeleA_GIENAH" info="" text="" title="GIENAH" picture="" level="0"/>
<SEL value="QD_modeleA_GOBI" code="QD_modeleA_GOBI" info="" text="" title="GOBI" picture="" level="0"/>
<SEL value="QD_modeleA_GRUIS" code="QD_modeleA_GRUIS" info="" text="" title="GRUIS" picture="" level="0"/>
<SEL value="QD_modeleA_GURBA" code="QD_modeleA_GURBA" info="" text="" title="GURBAN" picture="" level="0"/>
<SEL value="QD_modeleA_HIBON" code="QD_modeleA_HIBON" info="" text="" title="HIBONITE" picture="" level="0"/>
<SEL value="QD_modeleA_KALAH" code="QD_modeleA_KALAH" info="" text="" title="KALAHARI" picture="" level="0"/>
<SEL value="QD_modeleA_KAMACI" code="QD_modeleA_KAMACI" info="" text="" title="KAMACITE" picture="" level="0"/>
<SEL value="QD_modeleA_KOURO" code="QD_modeleA_KOURO" info="" text="" title="KOUROU" picture="" level="0"/>
<SEL value="QD_modeleA_KUM" code="QD_modeleA_KUM" info="" text="" title="KUM" picture="" level="0"/>
<SEL value="QD_modeleA_LAVAR" code="QD_modeleA_LAVAR" info="" text="" title="LAVARDIN" picture="" level="0"/>
<SEL value="QD_modeleA_LINEA" code="QD_modeleA_LINEA" info="" text="" title="LINEA" picture="" level="0"/>
<SEL value="QD_modeleA_LODRA" code="QD_modeleA_LODRA" info="" text="" title="LODRANITE" picture="" level="0"/>
<SEL value="QD_modeleA_LOMPO" code="QD_modeleA_LOMPO" info="" text="" title="LOMPOUL" picture="" level="0"/>
<SEL value="QD_modeleA_LYBIQ" code="QD_modeleA_LYBIQ" info="" text="" title="LYBIQUE" picture="" level="0"/>
<SEL value="QD_modeleA_MAGNE" code="QD_modeleA_MAGNE" info="" text="" title="MAGNETO" picture="" level="0"/>
<SEL value="QD_modeleA_MEDIT" code="QD_modeleA_MEDIT" info="" text="" title="MEDITERANEE" picture="" level="0"/>
<SEL value="QD_modeleA_MEGA" code="QD_modeleA_MEGA" info="" text="" title="MEGA" picture="" level="0"/>
<SEL value="QD_modeleA_MERAK" code="QD_modeleA_MERAK" info="" text="" title="MERAK" picture="" level="0"/>
<SEL value="QD_modeleA_METEO" code="QD_modeleA_METEO" info="" text="" title="METEORITE" picture="" level="0"/>
<SEL value="QD_modeleA_MIR" code="QD_modeleA_MIR" info="" text="" title="MIR" picture="" level="0"/>
<SEL value="QD_modeleA_MIZAR" code="QD_modeleA_MIZAR" info="" text="" title="MIZAR" picture="" level="0"/>
<SEL value="QD_modeleA_MOCA" code="QD_modeleA_MOCA" info="" text="" title="MOCA" picture="" level="0"/>
<SEL value="QD_modeleA_MOJAV" code="QD_modeleA_MOJAV" info="" text="" title="MOJAVES" picture="" level="0"/>
<SEL value="QD_modeleA_MONTR" code="QD_modeleA_MONTR" info="" text="" title="MONTRESOR" picture="" level="0"/>
<SEL value="QD_modeleA_MONTS" code="QD_modeleA_MONTS" info="" text="" title="MONTSOREAU" picture="" level="0"/>
<SEL value="QD_modeleA_NAMIB" code="QD_modeleA_NAMIB" info="" text="" title="NAMIB" picture="" level="0"/>
<SEL value="QD_modeleA_NAOS" code="QD_modeleA_NAOS" info="" text="" title="NAOS" picture="" level="0"/>
<SEL value="QD_modeleA_NASA" code="QD_modeleA_NASA" info="" text="" title="NASA" picture="" level="0"/>
<SEL value="QD_modeleA_NEGEV" code="QD_modeleA_NEGEV" info="" text="" title="NEGEV" picture="" level="0"/>
<SEL value="QD_modeleA_NINET" code="QD_modeleA_NINET" info="" text="" title="NINETY" picture="" level="0"/>
<SEL value="QD_modeleA_NODUS" code="QD_modeleA_NODUS" info="" text="" title="NODUS" picture="" level="0"/>
<SEL value="QD_modeleA_NUBIE" code="QD_modeleA_NUBIE" info="" text="" title="NUBIE" picture="" level="0"/>
<SEL value="QD_modeleA_ORDOS" code="QD_modeleA_ORDOS" info="" text="" title="ORDOS" picture="" level="0"/>
<SEL value="QD_modeleA_OSOYO" code="QD_modeleA_OSOYO" info="" text="" title="OSOYOSS" picture="" level="0"/>
<SEL value="QD_modeleA_PACIF" code="QD_modeleA_PACIF" info="" text="" title="PACIFIQUE" picture="" level="0"/>
<SEL value="QD_modeleA_PESKI" code="QD_modeleA_PESKI" info="" text="" title="PESKI" picture="" level="0"/>
<SEL value="QD_modeleA_PATAG" code="QD_modeleA_PATAG" info="" text="" title="PATAGONIE" picture="" level="0"/>
<SEL value="QD_modeleA_PICTO" code="QD_modeleA_PICTO" info="" text="" title="PICTORIS" picture="" level="0"/>
<SEL value="QD_modeleA_POLAR" code="QD_modeleA_POLAR" info="" text="" title="POLARIS" picture="" level="0"/>
<SEL value="QD_modeleA_POLDER" code="QD_modeleA_POLDER" info="" text="" title="POLDER" picture="" level="0"/>
<SEL value="QD_modeleA_PLESSI" code="QD_modeleA_PLESSI" info="" text="" title="PLESSITE" picture="" level="0"/>
<SEL value="QD_modeleA_REDA" code="QD_modeleA_REDA" info="" text="" title="REDA" picture="" level="0"/>
<SEL value="QD_modeleA_SABLE" code="QD_modeleA_SABLE" info="" text="" title="SABLE" picture="" level="0"/>
<SEL value="QD_modeleA_SADIR" code="QD_modeleA_SADIR" info="" text="" title="SADIR" picture="" level="0"/>
<SEL value="QD_modeleA_SAUMU" code="QD_modeleA_SAUMU" info="" text="" title="SAUMUR" picture="" level="0"/>
<SEL value="QD_modeleA_SIRIUS" code="QD_modeleA_SIRIUS" info="" text="" title="SIRIUS" picture="" level="0"/>
<SEL value="QD_modeleA_SONOR" code="QD_modeleA_SONOR" info="" text="" title="SONORA" picture="" level="0"/>
<SEL value="QD_modeleA_TALCY" code="QD_modeleA_TALCY" info="" text="" title="TALCY" picture="" level="0"/>
<SEL value="QD_modeleA_TENER" code="QD_modeleA_TENER" info="" text="" title="TENERE" picture="" level="0"/>
<SEL value="QD_modeleA_TERRE" code="QD_modeleA_TERRE" info="" text="" title="TERRE" picture="" level="0"/>
<SEL value="QD_modeleA_THAR" code="QD_modeleA_THAR" info="" text="" title="THAR" picture="" level="0"/>
<SEL value="QD_modeleA_TONNE" code="QD_modeleA_TONNE" info="" text="" title="TONNERRE" picture="" level="0"/>
<SEL value="QD_modeleA_TOURM" code="QD_modeleA_TOURM" info="" text="" title="TOURMENTE" picture="" level="0"/>
<SEL value="QD_modeleA_UNIVE" code="QD_modeleA_UNIVE" info="" text="" title="UNIVERS" picture="" level="0"/>
<SEL value="QD_modeleA_USSE" code="QD_modeleA_USSE" info="" text="" title="USSE" picture="" level="0"/>
<SEL value="QD_modeleA_UTEN" code="QD_modeleA_UTEN" info="" text="" title="UTEN" picture="" level="0"/>
<SEL value="QD_modeleA_VALEN" code="QD_modeleA_VALEN" info="" text="" title="VALENCAY" picture="" level="0"/>
<SEL value="QD_modeleA_VICTO" code="QD_modeleA_VICTO" info="" text="" title="VICTORIA" picture="" level="0"/>
<SEL value="QD_modeleA_VONAT" code="QD_modeleA_VONAT" info="" text="" title="VONAT" picture="" level="0"/>
<SEL value="QD_modeleA_LIBRE" code="QD_modeleA_LIBRE" info="" text="" title="Modèle personnalisé" picture="" level="0"/>
<SEL value="QD_modeleA_CORR" code="QD_modeleA_CORR" info="" text="" title="Modèle Corrèze" picture="" level="0"/>
</OPTION>
<OPTION id="3">
<SEL value="QD_FabSpe_Std" code="QD_FabSpe_Std" info="" text="" title="Fabrication Standard" picture="" level="0"/>
<SEL value="QD_FabSpe_Spe" code="QD_FabSpe_Spe" info="" text="" title="Fabrication spécifique" picture="" level="0"/>
<SEL value="QD_FabSpe_SurPlan" code="QD_FabSpe_SurPlan" info="" text="" title="Fabrication sur plan DAO joint" picture="" level="0"/>
<SEL value="QD_FabSpe_Reliquat" code="QD_FabSpe_Reliquat" info="" text="" title="Fabrication en Reliquat sur autre commande" picture="" level="0"/>
</OPTION>
<OPTION id="4">
<SEL value="QD_typepose_entrep" code="QD_typepose_entrep" info="" text="" title="Pose Entre Piliers" picture="" level="0"/>
<SEL value="QD_typepose_gonarr" code="QD_typepose_gonarr" info="" text="" title="Pose portail et gonds arrière Piliers" picture="" level="0"/>
<SEL value="QD_typepose_entGA" code="QD_typepose_entGA" info="" text="" title="Pose Entre Piliers gonds arrières (F)" picture="" level="0"/>
<SEL value="QD_typepose_ouvext" code="QD_typepose_ouvext" info="" text="" title="Pose Entre Piliers OUVERTURE EXTERIEURE" picture="" level="0"/>
<SEL value="QD_typepose_ouvextDP" code="QD_typepose_ouvextDP" info="" text="" title="Pose Devant Piliers OUVERTURE EXTERIEURE" picture="" level="0"/>
<SEL value="QD_typepose_entrepGapD" code="QD_typepose_entrepGapD" info="" text="" title="Pose Entre Piliers à Gauche ET Arrière Pilier à Droite" picture="" level="0"/>
<SEL value="QD_typepose_entrepDapG" code="QD_typepose_entrepDapG" info="" text="" title="Pose Entre Piliers à Droite ET Arrière Pilier à Gauche" picture="" level="0"/>
</OPTION>
<OPTION id="5">
<SEL value="QD_poteauD_Sans" code="QD_poteauD_Sans" info="" text="" title="Pilier à droite" picture="" level="0"/>
<SEL value="QD_poteauD_100" code="QD_poteauD_100" info="" text="" title="Poteau de 100mm à droite" picture="" level="0"/>
<SEL value="QD_poteauD_150" code="QD_poteauD_150" info="" text="" title="Poteau de 150mm à droite" picture="" level="0"/>
<SEL value="QD_poteauD_180" code="QD_poteauD_180" info="" text="" title="Poteau de 180mm à droite" picture="" level="0"/>
<SEL value="QD_poteauD_SansPP" code="QD_poteauD_SansPP" info="" text="" title="Sans Poteau Ni Pilier à Droite" picture="" level="0"/>
</OPTION>
<OPTION id="6">
<SEL value="QD_poteauG_Sans" code="QD_poteauG_Sans" info="" text="" title="Pilier à Gauche" picture="" level="0"/>
<SEL value="QD_poteauG_100" code="QD_poteauG_100" info="" text="" title="Poteau de 100mm à Gauche" picture="" level="0"/>
<SEL value="QD_poteauG_150" code="QD_poteauG_150" info="" text="" title="Poteau de 150mm à Gauche" picture="" level="0"/>
<SEL value="QD_poteauG_180" code="QD_poteauG_180" info="" text="" title="Poteau de 180mm à Gauche" picture="" level="0"/>
<SEL value="QD_poteauG_SansPP" code="QD_poteauG_SansPP" info="" text="" title="Sans Poteau ni pilier à GAUCHE" picture="" level="0"/>
</OPTION>
<OPTION id="7">
<SEL value="QD_PosePoteauD_Sol" code="QD_PosePoteauD_Sol" info="" text="" title="Pose au sol" picture="" level="0"/>
<SEL value="QD_PosePoteauD_SurP" code="QD_PosePoteauD_SurP" info="" text="" title="Pose sur Pilier" picture="" level="0"/>
</OPTION>
<OPTION id="8">
<SEL value="QD_PosePoteauG_Sol" code="QD_PosePoteauG_Sol" info="" text="" title="Pose au sol" picture="" level="0"/>
<SEL value="QD_PosePoteauG_SurP" code="QD_PosePoteauG_SurP" info="" text="" title="Pose sur Pilier" picture="" level="0"/>
</OPTION>
<OPTION id="9">
<SEL value="QD_posepoteaux_platSoud" code="QD_posepoteaux_platSoud" info="" text="" title="pose poteaux sur platine soudée" picture="" level="0"/>
<SEL value="QD_posepoteaux_scel" code="QD_posepoteaux_scel" info="" text="" title="pose poteaux scellés" picture="" level="0"/>
<SEL value="QD_posepoteaux_FAB" code="QD_posepoteaux_FAB" info="" text="" title="Fixation Sans Scellement, Fer à Béton non Fourni" picture="" level="0"/>
<SEL value="QD_posepoteaux_DEP" code="QD_posepoteaux_DEP" info="" text="" title="Depareillée Droite/Gauche" picture="" level="0"/>
</OPTION>
<OPTION id="10">
<SEL value="QD_FournPoteaux_Avec" code="QD_FournPoteaux_Avec" info="" text="" title="Avec la commande" picture="" level="0"/>
<SEL value="QD_FournPoteaux_Non" code="QD_FournPoteaux_Non" info="" text="" title="Poteaux non fournies, sur commande à part" picture="" level="0"/>
</OPTION>
<OPTION id="11">
<SEL value="QD_jeusousportail_std" code="QD_jeusousportail_std" info="" text="" title="Jeu sous portail standard" picture="" level="0"/>
<SEL value="QD_jeusousportail_spe" code="QD_jeusousportail_spe" info="" text="" title="Jeu sous portail spécifique" picture="" level="0"/>
</OPTION>
<OPTION id="12">
<SEL value="QD_KitRetouche_sans" code="QD_KitRetouche_sans" info="" text="" title="Sans Kit de retouche peinture" picture="" level="0"/>
<SEL value="QD_KitRetouche_avec" code="QD_KitRetouche_avec" info="" text="" title="Avec 1 kit de retouche peinture" picture="" level="0"/>
</OPTION>
<OPTION id="13">
<SEL value="QD_ControleCoheL_Oui" code="QD_ControleCoheL_Oui" info="" text="" title="Activée" picture="" level="0"/>
<SEL value="QD_ControleCoheL_Non" code="QD_ControleCoheL_Non" info="" text="" title="Désactivée" picture="" level="0"/>
</OPTION>
<GLAZING_OPTION id="14">
<SEL value="QR_TypeRempl_Lames" code="QR_TypeRempl_Lames" info="" text="" title="LAMES EMPILEES" picture="" level="0"/>
<SEL value="QR_TypeRempl_Barreaux" code="QR_TypeRempl_Barreaux" info="" text="" title="Barreaux" picture="" level="0"/>
<SEL value="QR_TypeRempl_Boomerang" code="QR_TypeRempl_Boomerang" info="" text="" title="Lames Boomerang" picture="" level="0"/>
<SEL value="QR_TypeRempl_Biseautee" code="QR_TypeRempl_Biseautee" info="" text="" title="Lames Biseautées" picture="" level="0"/>
<SEL value="QR_TypeRempl_Tole" code="QR_TypeRempl_Tole" info="" text="" title="Tole" picture="" level="0"/>
<SEL value="QR_TypeRempl_PannAlu" code="QR_TypeRempl_PannAlu" info="" text="" title="Panneau 2 faces Tôle ALU" picture="" level="0"/>
<SEL value="QR_TypeRempl_Bois240x30" code="QR_TypeRempl_Bois240x30" info="" text="" title="Bois RED CEDAR 240x30 mm" picture="" level="0"/>
<SEL value="QR_TypeRempl_PMMA" code="QR_TypeRempl_PMMA" info="" text="" title="PMMA" picture="" level="0"/>
<SEL value="QR_TypeRempl_Vide" code="QR_TypeRempl_Vide" info="" text="" title="Vide" picture="" level="0"/>
<SEL value="QR_TypeRempl_SAV" code="QR_TypeRempl_SAV" info="" text="" title="SAV Ouvrant non fabriqué" picture="" level="0"/>
</GLAZING_OPTION>
<GLAZING_OPTION id="15">
<SEL value="QR_typelames_150" code="QR_typelames_150" info="" text="" title="Lames de 150" picture="" level="0"/>
<SEL value="QR_typelames_240" code="QR_typelames_240" info="" text="" title="Lames de 240" picture="" level="0"/>
<SEL value="QR_typelames_15020" code="QR_typelames_15020" info="" text="" title="Lames de 150+20" picture="" level="0"/>
<SEL value="QR_typelames_24020" code="QR_typelames_24020" info="" text="" title="Lames de 240+20" picture="" level="0"/>
<SEL value="QR_typelames_15020150" code="QR_typelames_15020150" info="" text="" title="Lames de 2x150+20" picture="" level="0"/>
<SEL value="QR_typelames_24020240" code="QR_typelames_24020240" info="" text="" title="Lames de 2x240+20" picture="" level="0"/>
<SEL value="QR_typelames_autre" code="QR_typelames_autre" info="" text="" title="Autre Répartition" picture="" level="0"/>
</GLAZING_OPTION>
<GLAZING_OPTION id="16">
<SEL value="QR_OrienLames_Horiz" code="QR_OrienLames_Horiz" info="" text="" title="Horizontales" picture="" level="0"/>
<SEL value="QR_OrienLames_Verti" code="QR_OrienLames_Verti" info="" text="" title="Verticales" picture="" level="0"/>
<SEL value="QR_OrienLames_45D" code="QR_OrienLames_45D" info="" text="" title="à 45° à droite" picture="" level="0"/>
<SEL value="QR_OrienLames_45G" code="QR_OrienLames_45G" info="" text="" title="à 45° à gauche" picture="" level="0"/>
<SEL value="QR_OrienLames_Spe" code="QR_OrienLames_Spe" info="" text="" title="angle Spécifique" picture="" level="0"/>
</GLAZING_OPTION>
<GLAZING_OPTION id="17">
<SEL value="QR_RepartLames_auto" code="QR_RepartLames_auto" info="" text="" title="Automatique" picture="" level="0"/>
<SEL value="QR_RepartLames_entHS" code="QR_RepartLames_entHS" info="" text="" title="Lame entière en haut ou à gauche" picture="" level="0"/>
<SEL value="QR_RepartLames_entBF" code="QR_RepartLames_entBF" info="" text="" title="Lame entière en bas ou à droite" picture="" level="0"/>
<SEL value="QR_RepartLames_egale" code="QR_RepartLames_egale" info="" text="" title="Lames réparties égales Haut/Bas ou Droite/Gauche" picture="" level="0"/>
<SEL value="QR_RepartLames_ForcHD" code="QR_RepartLames_ForcHD" info="" text="" title="Hauteur de lame départ forcée à partir du Haut ou  Droite" picture="" level="0"/>
<SEL value="QR_RepartLames_ForcBG" code="QR_RepartLames_ForcBG" info="" text="" title="Hauteur de lame départ forcée à partir du Bas ou Gauche" picture="" level="0"/>
</GLAZING_OPTION>
<GLAZING_OPTION id="18">
<SEL value="QR_CouleurBI_Mono" code="QR_CouleurBI_Mono" info="" text="" title="Mono couleur" picture="" level="0"/>
<SEL value="QR_CouleurBI_D1" code="QR_CouleurBI_D1" info="" text="" title="Première lame ref couleur EXTérieure, 2eme couleur INTérieure" picture="" level="0"/>
<SEL value="QR_CouleurBI_D2" code="QR_CouleurBI_D2" info="" text="" title="Première lame ref couleur INTérieure, 2eme couleur EXTérieure" picture="" level="0"/>
<SEL value="QR_CouleurBI_D3" code="QR_CouleurBI_D3" info="" text="" title="Grande lame couleur Ouvrant, lame de 20 bicolore" picture="" level="0"/>
<SEL value="QR_CouleurBI_D4" code="QR_CouleurBI_D4" info="" text="" title="Bicoloration spécifique MIR" picture="" level="0"/>
</GLAZING_OPTION>
<GLAZING_OPTION id="19">
<SEL value="QR_BiCOLOR20_uni" code="QR_BiCOLOR20_uni" info="" text="" title="lame de 20 couleur unie" picture="" level="0"/>
<SEL value="QR_BiCOLOR20_13pan" code="QR_BiCOLOR20_13pan" info="" text="" title="lame de 20 1/3 couleur panneau (Namib-Danakil)" picture="" level="0"/>
<SEL value="QR_BiCOLOR20_23pan" code="QR_BiCOLOR20_23pan" info="" text="" title="lame de 20 2/3 couleur panneau (Mojaves)" picture="" level="0"/>
<SEL value="QR_BiCOLOR20_sequ1" code="QR_BiCOLOR20_sequ1" info="" text="" title="lame de 20 séquence specifique (ORDOS)" picture="" level="0"/>
<SEL value="QR_BiCOLOR20_sequ5" code="QR_BiCOLOR20_sequ5" info="" text="" title="Lame de 20 sequence specifique (MERAK) new" picture="" level="0"/>
<SEL value="QR_BiCOLOR20_sequ3b" code="QR_BiCOLOR20_sequ3b" info="" text="" title="Lame de 20 sequence specifique (LYBIQUE 2 couleurs)" picture="" level="0"/>
<SEL value="QR_BiCOLOR20_sequ3" code="QR_BiCOLOR20_sequ3" info="" text="" title="Lame de 20 sequence specifique (LYBIQUE 3 couleurs)" picture="" level="0"/>
<SEL value="QR_BiCOLOR20_sequ2" code="QR_BiCOLOR20_sequ2" info="" text="" title="Lame de 20 sequence specifique (MERAK) 2019- ancien" picture="" level="0"/>
<SEL value="QR_BiCOLOR20_sequ4" code="QR_BiCOLOR20_sequ4" info="" text="" title="Lame de 20 sequence specifique (OSOYOSS)" picture="" level="0"/>
</GLAZING_OPTION>
<GLAZING_OPTION id="20">
<SEL value="QR_ModDecor_Sans" code="QR_ModDecor_Sans" info="" text="" title="Sans Décor" picture="" level="0"/>
<SEL value="QR_ModDecor_A01" code="QR_ModDecor_A01" info="" text="" title="Décor Alunox 01 - Carrés 160 évidés verticaux" picture="" level="0"/>
<SEL value="QR_ModDecor_A02" code="QR_ModDecor_A02" info="" text="" title="Décor Alunox 02  - Carrés pleins et 1 évidé" picture="" level="0"/>
<SEL value="QR_ModDecor_A03" code="QR_ModDecor_A03" info="" text="" title="Décor Alunox 03 - Carrés évidés et 1 plein" picture="" level="0"/>
<SEL value="QR_ModDecor_A04" code="QR_ModDecor_A04" info="" text="" title="Décor Alunox 04 - 2 Carrés 160 évidés et 1 plein" picture="" level="0"/>
<SEL value="QR_ModDecor_A05" code="QR_ModDecor_A05" info="" text="" title="Décor Alunox 05 - Carrés Doubles Verti." picture="" level="0"/>
<SEL value="QR_ModDecor_A06" code="QR_ModDecor_A06" info="" text="" title="Décor Alunox 06 - 1 Ensemble Bulles" picture="" level="0"/>
<SEL value="QR_ModDecor_A06sym" code="QR_ModDecor_A06sym" info="" text="" title="Décor Alunox 06-sym - 1 Ensemble Bulles" picture="" level="0"/>
<SEL value="QR_ModDecor_A07" code="QR_ModDecor_A07" info="" text="" title="Décor Alunox 07 - Ronds Pleins D135 Verti." picture="" level="0"/>
<SEL value="QR_ModDecor_A08" code="QR_ModDecor_A08" info="" text="" title="Décor Alunox 08 - Ronds Evidés D135 Horiz." picture="" level="0"/>
<SEL value="QR_ModDecor_A09" code="QR_ModDecor_A09" info="" text="" title="Décor Alunox 09 - Hublots D135" picture="" level="0"/>
<SEL value="QR_ModDecor_A10p" code="QR_ModDecor_A10p" info="" text="" title="Décor Alunox 10 - 1 Ens Courbes Plein" picture="" level="0"/>
<SEL value="QR_ModDecor_A10" code="QR_ModDecor_A10" info="" text="" title="Décor Alunox 10 - 1 Ens Hublots Courbes" picture="" level="0"/>
<SEL value="QR_ModDecor_A11p" code="QR_ModDecor_A11p" info="" text="" title="Décor Alunox 11 - 1 Ens Courbes Plein" picture="" level="0"/>
<SEL value="QR_ModDecor_A11" code="QR_ModDecor_A11" info="" text="" title="Décor Alunox 11 - 1 Ens Hublots Courbes" picture="" level="0"/>
<SEL value="QR_ModDecor_A12" code="QR_ModDecor_A12" info="" text="" title="Décor Alunox 12 - 1 Ens Barette Aviateur/vtl H+B" picture="" level="0"/>
<SEL value="QR_ModDecor_A13" code="QR_ModDecor_A13" info="" text="" title="Décor Alunox 13 - 2 Ens Barette Aviateur/vtl" picture="" level="0"/>
<SEL value="QR_ModDecor_A14" code="QR_ModDecor_A14" info="" text="" title="Décor Alunox 14 - Barettes 200x30" picture="" level="0"/>
<SEL value="QR_ModDecor_A15" code="QR_ModDecor_A15" info="" text="" title="Décor Alunox 15 - Rectangles évidés 1400x200 Horiz." picture="" level="0"/>
<SEL value="QR_ModDecor_A16" code="QR_ModDecor_A16" info="" text="" title="Décor Alunox 16 - Rectangles évidés 900x200 Verti." picture="" level="0"/>
<SEL value="QR_ModDecor_A17" code="QR_ModDecor_A17" info="" text="" title="Décor Alunox 17 - 2 barettes 500x50 et N° de rue" picture="" level="0"/>
<SEL value="QR_ModDecor_A18" code="QR_ModDecor_A18" info="" text="" title="Décor Alunox 18 - Pied de Porte Avec Motif" picture="" level="0"/>
<SEL value="QR_ModDecor_A18NumSeul" code="QR_ModDecor_A18NumSeul" info="" text="" title="Décor Alunox 18 bis - N° de rue sur Plaque" picture="" level="0"/>
<SEL value="QR_ModDecor_A19" code="QR_ModDecor_A19" info="" text="" title="Décor Alunox 19 - Numéro de Rue face Extérieure" picture="" level="0"/>
<SEL value="QR_ModDecor_A20" code="QR_ModDecor_A20" info="" text="" title="Décor Alunox 20 - Carrés 160 Pleins verticaux" picture="" level="0"/>
<SEL value="QR_ModDecor_Comete" code="QR_ModDecor_Comete" info="" text="" title="Décor Alunox- hublots 160" picture="" level="0"/>
<SEL value="QR_ModDecor_Libre" code="QR_ModDecor_Libre" info="" text="" title="Décor Alunox Libre- à configurer" picture="" level="0"/>
</GLAZING_OPTION>
<GLAZING_OPTION id="21">
<SEL value="QR_BALdansRempl_sans" code="QR_BALdansRempl_sans" info="" text="" title="Sans Boite à Lettres" picture="" level="0"/>
<SEL value="QR_BALdansRempl_Avec" code="QR_BALdansRempl_Avec" info="" text="" title="Boite à Lettres (non fournie)" picture="" level="0"/>
<SEL value="QR_BALdansRempl_CFP" code="QR_BALdansRempl_CFP" info="" text="" title="Boite aux Lettres Fournie CFP / couleur Clôture" picture="" level="0"/>
</GLAZING_OPTION>
<SASH_OPTION id="22">
<SEL value="QO_sensouv_droiteP" code="QO_sensouv_droiteP" info="" text="" title="Droite POUSSANT - vue de l&apos;exterieur (std)" picture="" level="0"/>
</SASH_OPTION>
<SASH_OPTION id="23">
<SEL value="QO_Battement_ext" code="QO_Battement_ext" info="" text="" title="Battement simple Exterieur" picture="" level="0"/>
<SEL value="QO_Battement_double" code="QO_Battement_double" info="" text="" title="Battement double Interieur Exterieur" picture="" level="0"/>
</SASH_OPTION>
<SASH_OPTION id="24">
<SEL value="QQ_ferrage_A" code="QQ_ferrage_A" info="" text="" title="Ferrage A - Gond 2 points Haut et pivot de sol" picture="" level="0"/>
<SEL value="QQ_ferrage_B" code="QQ_ferrage_B" info="" text="" title="Ferrage B - Gond 2 points Haut et multireglable Bas" picture="" level="0"/>
<SEL value="QQ_ferrage_C" code="QQ_ferrage_C" info="" text="" title="Ferrage C - Gonds Fixpress Haut et pivot de sol" picture="" level="0"/>
<SEL value="QQ_ferrage_D" code="QQ_ferrage_D" info="" text="" title="Ferrage D - Gonds Fixpress Haut et Bas" picture="" level="0"/>
<SEL value="QQ_ferrage_E" code="QQ_ferrage_E" info="" text="" title="Ferrage E - Régulateur de pente" picture="" level="0"/>
<SEL value="QQ_ferrage_G" code="QQ_ferrage_G" info="" text="" title="Ferrage G - Gonds L Multiréglable Haut et Bas" picture="" level="0"/>
<SEL value="QQ_ferrage_H" code="QQ_ferrage_H" info="" text="" title="Ferrage H - Gonds 2 points Haut et Bas" picture="" level="0"/>
<SEL value="QQ_ferrage_P" code="QQ_ferrage_P" info="" text="" title="Ferrage Paumelles" picture="" level="0"/>
<SEL value="QQ_ferrage_AncRegul" code="QQ_ferrage_AncRegul" info="" text="" title="Ferrage Régulateur de pente **Ancien Modèle**" picture="" level="0"/>
<SEL value="QQ_ferrage_Dep" code="QQ_ferrage_Dep" info="" text="" title="Ferrage Dépareillé Demande Spéciale" picture="" level="0"/>
</SASH_OPTION>
<SASH_OPTION id="25">
<SEL value="QQ_ferrage2_A" code="QQ_ferrage2_A" info="" text="" title="Ferrage A - Gond 2 points Haut et pivot de sol /2eme Vtl" picture="" level="0"/>
<SEL value="QQ_ferrage2_B" code="QQ_ferrage2_B" info="" text="" title="Ferrage B - Gond 2 points Haut et multireglable Bas /2eme Vtl" picture="" level="0"/>
<SEL value="QQ_ferrage2_C" code="QQ_ferrage2_C" info="" text="" title="Ferrage C - Gonds Fixpress Haut et pivot de sol /2eme Vtl" picture="" level="0"/>
<SEL value="QQ_ferrage2_D" code="QQ_ferrage2_D" info="" text="" title="Ferrage D - Gonds Fixpress Hautet Bas /2eme Vtl" picture="" level="0"/>
<SEL value="QQ_ferrage2_E" code="QQ_ferrage2_E" info="" text="" title="Ferrage E - Régulateur de pente /2eme Vtl" picture="" level="0"/>
<SEL value="QQ_ferrage2_Ebis" code="QQ_ferrage2_Ebis" info="" text="" title="Ferrage E Bis - Régulateur pour faible pente" picture="" level="0"/>
<SEL value="QQ_ferrage2_G" code="QQ_ferrage2_G" info="" text="" title="Ferrage G - Gonds L Multiréglable Haut et Bas /2eme Vtl" picture="" level="0"/>
<SEL value="QQ_ferrage2_H" code="QQ_ferrage2_H" info="" text="" title="Ferrage H - Gond 2 points Haut et Bas /2eme Vtl" picture="" level="0"/>
<SEL value="QQ_ferrage2_P" code="QQ_ferrage2_P" info="" text="" title="Ferrage Paumelles /2eme Vtl" picture="" level="0"/>
<SEL value="QQ_ferrage2_idem" code="QQ_ferrage2_idem" info="" text="" title="Ferrage identique au vantail principal" picture="" level="0"/>
<SEL value="QQ_ferrage2_Dep" code="QQ_ferrage2_Dep" info="" text="" title="Ferrage dépareillé" picture="" level="0"/>
</SASH_OPTION>
<FITTING_OPTION id="26">
<SEL value="QQ_Motor_sans" code="QQ_Motor_sans" info="" text="" title="sans motorisation" picture="" level="0"/>
<SEL value="QQ_Motor_renf" code="QQ_Motor_renf" info="" text="" title="Renfort pour motorisation" picture="" level="0"/>
<SEL value="QQ_Motor_AXOVIA" code="QQ_Motor_AXOVIA" info="" text="" title="kit Moteur AXOVIA 3S" picture="" level="0"/>
<SEL value="QQ_Motor_AXOVIA_M" code="QQ_Motor_AXOVIA_M" info="" text="" title="kit Moteur AXOVIA 3S MULTIPRO" picture="" level="0"/>
<SEL value="QQ_Motor_IXENGO" code="QQ_Motor_IXENGO" info="" text="" title="kit Moteur IXENGO 3S" picture="" level="0"/>
<SEL value="QQ_Motor_INVISIO" code="QQ_Motor_INVISIO" info="" text="" title="kit Moteur INVISIO 3S" picture="" level="0"/>
<SEL value="QQ_Motor_IGEA" code="QQ_Motor_IGEA" info="" text="" title="Moteur IGEA" picture="" level="0"/>
<SEL value="QQ_Motor_VIRGO" code="QQ_Motor_VIRGO" info="" text="" title="Moteur VIRGO" picture="" level="0"/>
<SEL value="QQ_Motor_KUSTOS" code="QQ_Motor_KUSTOS" info="" text="" title="Moteur KUSTOS" picture="" level="0"/>
<SEL value="QQ_Motor_ELI" code="QQ_Motor_ELI" info="" text="" title="Moteur ELI" picture="" level="0"/>
</FITTING_OPTION>
<FITTING_OPTION id="27">
<SEL value="QQ_serrure_PR" code="QQ_serrure_PR" info="" text="" title="Serrure Pène Rentrant" picture="" level="0"/>
<SEL value="QQ_serrure_sans" code="QQ_serrure_sans" info="" text="" title="Sans serrure" picture="" level="0"/>
</FITTING_OPTION>
<FITTING_OPTION id="28">
<SEL value="QQ_gache_Manuel" code="QQ_gache_Manuel" info="" text="" title="Gache manuelle" picture="" level="0"/>
<SEL value="QQ_gache_Elec" code="QQ_gache_Elec" info="" text="" title="Gache éléctrique" picture="" level="0"/>
</FITTING_OPTION>
<FITTING_OPTION id="29">
<SEL value="QQ_Poignee_BeqInox" code="QQ_Poignee_BeqInox" info="" text="" title="Bequille Inox extérieure" picture="" level="0"/>
<SEL value="QQ_Poignee_BeqDSIGN" code="QQ_Poignee_BeqDSIGN" info="" text="" title="Bequille D-SIGN extérieure" picture="" level="0"/>
<SEL value="QQ_Poignee_PoiPlqNoir" code="QQ_Poignee_PoiPlqNoir" info="" text="" title="Poignée sur plaque Noir extérieure" picture="" level="0"/>
<SEL value="QQ_Poignee_PoiPlqBlanc" code="QQ_Poignee_PoiPlqBlanc" info="" text="" title="Poignée sur plaque Blanc extérieure" picture="" level="0"/>
<SEL value="QQ_Poignee_TirageDEK1" code="QQ_Poignee_TirageDEK1" info="" text="" title="Poignée de tirage DEKOR 1 extérieure" picture="" level="0"/>
<SEL value="QQ_Poignee_TirageDEK3" code="QQ_Poignee_TirageDEK3" info="" text="" title="Poignée de tirage DEKOR 3 extérieure" picture="" level="0"/>
<SEL value="QQ_Poignee_LIGNE" code="QQ_Poignee_LIGNE" info="" text="" title="Poignée de tirage LIGNE extérieure" picture="" level="0"/>
<SEL value="QQ_Poignee_BatMar" code="QQ_Poignee_BatMar" info="" text="" title="Poignée de tirage Baton de maréchal extérieure" picture="" level="0"/>
<SEL value="QQ_Poignee_sans" code="QQ_Poignee_sans" info="" text="" title="Sans Poignée (non fournie) extérieure" picture="" level="0"/>
<SEL value="QQ_Poignee_sansPU" code="QQ_Poignee_sansPU" info="" text="" title="Sans Poignée ni usinage extérieure" picture="" level="0"/>
</FITTING_OPTION>
<FITTING_OPTION id="30">
<SEL value="QQ_PoigneeI_BeqInox" code="QQ_PoigneeI_BeqInox" info="" text="" title="Bequille Inox intérieure" picture="" level="0"/>
<SEL value="QQ_PoigneeI_sansPU" code="QQ_PoigneeI_sansPU" info="" text="" title="Sans Poignée ni usinage intérieure" picture="" level="0"/>
</FITTING_OPTION>
<FITTING_OPTION id="31">
<SEL value="QQ_HPoigneeSTD_Std" code="QQ_HPoigneeSTD_Std" info="" text="" title="Hauteur Poignée Standard" picture="" level="0"/>
<SEL value="QQ_HPoigneeSTD_Spe" code="QQ_HPoigneeSTD_Spe" info="" text="" title="Hauteur Poignée Spécifique" picture="" level="0"/>
</FITTING_OPTION>
<FITTING_OPTION id="32">
<SEL value="QQ_jambeCV_sans" code="QQ_jambeCV_sans" info="" text="" title="Sans jambe de Contreventement" picture="" level="0"/>
<SEL value="QQ_jambeCV_Avec" code="QQ_jambeCV_Avec" info="" text="" title="AVEC jambe de Contreventement" picture="" level="0"/>
</FITTING_OPTION>
<FITTING_OPTION id="33">
<SEL value="QQ_verrouSF_SMan" code="QQ_verrouSF_SMan" info="" text="" title="Sabot pour butée semi fixe Manuel" picture="" level="0"/>
<SEL value="QQ_verrouSF_Baill" code="QQ_verrouSF_Baill" info="" text="" title="Verrou baïonnette sur sabot pour semi fixe" picture="" level="0"/>
<SEL value="QQ_verrouSF_Baillong" code="QQ_verrouSF_Baillong" info="" text="" title="Verrou baïonnette spécial (Long)" picture="" level="0"/>
<SEL value="QQ_verrouSF_SManIx" code="QQ_verrouSF_SManIx" info="" text="" title="Sabot INOX pour butée semi fixe Manuel" picture="" level="0"/>
<SEL value="QQ_verrouSF_SMotIx" code="QQ_verrouSF_SMotIx" info="" text="" title="Sabot INOX pour butée semi fixe Motorisé" picture="" level="0"/>
<SEL value="QQ_verrouSF_Sans" code="QQ_verrouSF_Sans" info="" text="" title="Sabot pour butée semi fixe NON FOURNI" picture="" level="0"/>
</FITTING_OPTION>
<FITTING_OPTION id="34">
<SEL value="QQ_RehausseSab_sans" code="QQ_RehausseSab_sans" info="" text="" title="Sans rehausse de sabot" picture="" level="0"/>
<SEL value="QQ_RehausseSab_MANU" code="QQ_RehausseSab_MANU" info="" text="" title="Réhausse de sabot pour manuelle" picture="" level="0"/>
</FITTING_OPTION>
<FITTING_OPTION id="35">
<SEL value="QQ_CorniereOccultante_sans" code="QQ_CorniereOccultante_sans" info="" text="" title="Sans cornière occultante" picture="" level="0"/>
<SEL value="QQ_CorniereOccultante_avec" code="QQ_CorniereOccultante_avec" info="" text="" title="Avec cornière occultante" picture="" level="0"/>
</FITTING_OPTION>
<FITTING_OPTION id="36">
<SEL value="QQ_jointAPD_avec" code="QQ_jointAPD_avec" info="" text="" title="AVEC joint anti pince doigt" picture="" level="0"/>
<SEL value="QQ_jointAPD_sansF" code="QQ_jointAPD_sansF" info="" text="" title="* SANS joint anti pince doigt *" picture="" level="0"/>
</FITTING_OPTION>
<FITTING_OPTION id="37">
<SEL value="QQ_arretPortail_avec" code="QQ_arretPortail_avec" info="" text="" title="avec butée d&apos;arrêt" picture="" level="0"/>
<SEL value="QQ_arretPortail_Force_sans" code="QQ_arretPortail_Force_sans" info="" text="" title="Sans butée d&apos;arrêt" picture="" level="0"/>
<SEL value="QQ_arretPortail_ArretClic" code="QQ_arretPortail_ArretClic" info="" text="" title="Arret de portail poussoir à crochet (ArretClic)" picture="" level="0"/>
<SEL value="QQ_arretPortail_ArretStop" code="QQ_arretPortail_ArretStop" info="" text="" title="Arret de portail Tampon (ArretStop)" picture="" level="0"/>
</FITTING_OPTION>
<FITTING_OPTION id="38">
<SEL value="QQ_SocleArret_sans" code="QQ_SocleArret_sans" info="" text="" title="Sans" picture="" level="0"/>
<SEL value="QQ_SocleArret_Avec" code="QQ_SocleArret_Avec" info="" text="" title="Avec Socle Moulé pour Arret" picture="" level="0"/>
</FITTING_OPTION>
</QUESTION_SELECTIONS>
<DESCRIBE_WINDOW>
<ROLLER_SHUTTER/>
<WINDOW>
<SYSTEM>Portails Aluminium CFP</SYSTEM>
<GLAZING_BEADS>
<DESCRIPTION>Pour Portails ALU</DESCRIPTION>
<COLOUR></COLOUR>
</GLAZING_BEADS>
<GLAZING>
<DESCRIPTION>Remplissages de portails ALU</DESCRIPTION>
</GLAZING>
<OUTER_FRAME>
<DESCRIPTION>ALU PORTAILS</DESCRIPTION>
<COLOUR></COLOUR>
<WALL_DIMENSIONS>Tableau: 4000 mm × 1400 mm</WALL_DIMENSIONS><OPTIONS>
<OPTION id="1">
<QUESTION>Modèle de portail</QUESTION><ANSWER>ALTAÏR</ANSWER>
</OPTION>
<OPTION id="2">
<QUESTION>Type d&apos;ouverture</QUESTION><ANSWER>Portail Battant 2 vantaux</ANSWER>
</OPTION>
<OPTION id="3">
<QUESTION>Type de pose</QUESTION><ANSWER>Pose Entre Piliers</ANSWER>
</OPTION>
<OPTION id="4">
<QUESTION>Poteau ALU à droite</QUESTION><ANSWER>Poteau de 180mm à droite</ANSWER>
</OPTION>
<OPTION id="5">
<QUESTION>Poteau ALU à gauche</QUESTION><ANSWER>Poteau de 180mm à Gauche</ANSWER>
</OPTION>
<OPTION id="6">
<QUESTION>Fixation poteaux</QUESTION><ANSWER>pose poteaux scellés</ANSWER>
</OPTION>
</OPTIONS>
<OUTER_FRAME_TRANSOMS>
</OUTER_FRAME_TRANSOMS>
</OUTER_FRAME>
<PERIPHERAL_PROFILES>
</PERIPHERAL_PROFILES>
<SASHES>
<SASH id="1"><DESCRIPTION>2 vantaux Portail</DESCRIPTION>
<COLOUR></COLOUR>
<OPTIONS>
<OPTION id="1">
<QUESTION>Sens d&apos;ouverture</QUESTION><ANSWER>Droite POUSSANT - vue de l&apos;exterieur (std)</ANSWER>
</OPTION>
<OPTION id="2">
<QUESTION>Type de Ferrage Vantail Principal</QUESTION><ANSWER>Ferrage B - Gond 2 points Haut et multireglable Bas</ANSWER>
</OPTION>
</OPTIONS>
<FITTING>
<DESCRIPTION>Portail ALU 1 &amp; 2 VTX</DESCRIPTION>
<COLOUR>7016 FT Gris anthracite (Fine Texture 2)-std</COLOUR>
<OPTIONS>
<OPTION id="1">
<QUESTION>Serrure</QUESTION><ANSWER>Serrure Pène Rentrant</ANSWER>
</OPTION>
<OPTION id="2">
<QUESTION>Poignée Extérieure</QUESTION><ANSWER>Bequille Inox extérieure</ANSWER>
</OPTION>
<OPTION id="3">
<QUESTION>Poignée intérieure</QUESTION><ANSWER>Bequille Inox intérieure</ANSWER>
</OPTION>
<OPTION id="4">
<QUESTION>Hauteur Poignée / Sol</QUESTION><ANSWER>1087</ANSWER>
</OPTION>
<OPTION id="5">
<QUESTION>Vérouillage 2ème vantail</QUESTION><ANSWER>Sabot pour butée semi fixe Manuel</ANSWER>
</OPTION>
<OPTION id="6">
<QUESTION>Joint anti pince doigt</QUESTION><ANSWER>AVEC joint anti pince doigt</ANSWER>
</OPTION>
<OPTION id="7">
<QUESTION>Butée arrêt de portail</QUESTION><ANSWER>avec butée d&apos;arrêt</ANSWER>
</OPTION>
</OPTIONS>
<FITTING_ACCESSORIES>
</FITTING_ACCESSORIES>
</FITTING>
</SASH>
</SASHES>
<MESSAGES>
<MESSAGE id="1">
<CODE>ALU PORTAIL</CODE>
<DESCRIPTION>Les Barreaux et lames sont en FEVR4 au lieu de TIGER depuis Fab semaine 37 (07/09/2020)</DESCRIPTION>
<TABLE>Panneaux composés</TABLE>
</MESSAGE>
</MESSAGES>
</WINDOW>
</DESCRIBE_WINDOW>

</CONFIG>

</CONFIGS>
<TIMER>460.51350</TIMER>
</ANSWER_FROM_WINPRO>]]></return>
      </NS1:webshopResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</details>

Dans ce cas, le code d'erreur est 2 et le message est "Library item not found" car la librairie que j'ai demandé n'existe pas.

### 2. Le SVG

Ensuite, on peut voir que la réponse contient un SVG qui représente le portail configuré. C'est une image vectorielle qui peut être affichée dans un navigateur.

Pour avoir le svg il faut extraire le contenu de la balise `<svg>` et le sauvegarder dans un fichier avec l'extension `.svg`.

Voici un exemple de rendu :

![](images/svg.png)

### 3. Toutes les options de configuration

Enfin, la réponse contient toutes les options de configuration du portail. C'est ici que l'on peut trouver les informations sur les lames, les couleurs, les poignées, etc.

Par exemple :

```xml
<OPTION id="5" code="QD_poteauD" value="QD_poteauD_180" question_text="Poteau ALU à droite" answer_text="Poteau de 180mm à droite" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
<OPTION id="6" code="QD_poteauG" value="QD_poteauG_180" question_text="Poteau ALU à gauche" answer_text="Poteau de 180mm à Gauche" type="2" info="" level="0" title="" picture="" text="" answer_info=""/>
```

Dans cet exemple, on peut voir que le poteau de droite est de 180mm et le poteau de gauche est de 180mm comme spécifié dans notre requête.

Même les options qui n'ont pas été spécifiées dans la requête sont renvoyées dans la réponse. Cela permet de voir toutes les options possibles pour le portail et d'ensuite en ajouter dans la requête.

**Astuce** : Pour identifier quelles options modifier, ajustez un modèle de portail dans WinPro et observez les options qui changent dans la réponse. Par exemple changer la couleur d'un vantail et chzercher la couleur dans la réponse, vous saurez ensuite quelle option modifier dans la requête. Attention, si vous modifiez quelque chose dans WinPro, il faut relancer WebShop pour que les modifications soient prises en compte.
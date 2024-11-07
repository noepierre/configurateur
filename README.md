# CONFIGURATEUR

## Introduction

Ce projet vise à établir un lien entre WinPro et une page web, permettant d'interroger WinPro depuis l'interface web et de recevoir ses réponses. Pour cela, une API SOAP (Simple Object Access Protocol) est utilisée, facilitant l'échange de données en XML.

## Prérequis

- WinPro
- WebShop
- SOAP UI (pour tester l'API et comprendre son fonctionnement)
- Node.js et npm
- Un éditeur de code

## Installation

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/noepierre/configurateur.git
    cd configurateur
    ```

2. Installez les dépendances :
    ```sh
    npm install
    ```

## Démarrage

1. Lancez le serveur :
    ```sh
    node server.mjs
    ```

2. Ouvrez votre navigateur et accédez à `http://localhost:3000`.

## Structure du projet

- `server.mjs` : Fichier principal du serveur Node.js utilisant Express pour gérer les requêtes.
- `portail_specifications.json` : Fichier JSON contenant les spécifications des portails.
- `soap_response.xml` : Fichier où la réponse SOAP est enregistrée.
- `web/` : Dossier contenant les fichiers statiques pour le front-end.
  - `app.js` : Fichier JavaScript pour la logique front-end.
  - `index.html` : Fichier HTML principal.
  - `styles.css` : Fichier CSS pour le style de la page.

## Fonctionnalités

### Serveur

- Utilise Express pour servir les fichiers statiques et gérer les routes.
- Route GET `/portail-specifications` pour obtenir les spécifications des portails (fichier JSON).
- Route POST `/sendSoapRequest` pour envoyer une requête SOAP et recevoir la réponse.

### Front-end

- Affiche les modèles de portails disponibles.
- Formulaire pour configurer le portail et envoyer une requête SOAP.
- Affiche l'image SVG du portail configuré.
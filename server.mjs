// server.mjs

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import fs from 'fs';

const app = express();
const PORT = 3000;

// Utiliser CORS et BodyParser pour analyser les requêtes
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/xml' }));

// Servir les fichiers statiques depuis le dossier "web"
app.use(express.static('web'));

// Créer une route GET pour obtenir les spécifications des portails
app.get('/portail-specifications', (req, res) => {
    fs.readFile('portail_specifications.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier:', err);
            return res.status(500).send('Erreur lors de la lecture des spécifications des portails');
        }
        res.json(JSON.parse(data)); // Retourner les spécifications en format JSON
    });
});

// Créer une route POST pour envoyer la requête SOAP
app.post('/sendSoapRequest', async (req, res) => {
    console.log("Requête SOAP reçue.");
    try {
        const soapEnvelope = req.body;

        // Envoyer la requête SOAP à votre serveur SOAP local
        const response = await fetch('http://127.0.0.1:8001/soap/IWebshopv1', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/xml; charset=utf-8',
            },
            body: soapEnvelope,
        });

        const responseText = await response.text();

        // Modifier la réponse pour inclure xmlns:xlink
        const modifiedResponse = responseText.replace('xmlns="http://www.w3.org/2000/svg"', 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"');

        // Ecrire la réponse SOAP dans un fichier
        fs.writeFile('soap_response.xml', modifiedResponse, (err) => {

            console.log("Réponse SOAP écrite dans le fichier soap_response.xml.");

            if (err) {
                console.error('Erreur lors de l\'écriture du fichier:', err);
            }
        });

        // Retourner la réponse SOAP au client
        res.send(modifiedResponse);


        console.log("Réponse SOAP retournée au client.");
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête SOAP:', error);
        res.status(500).send('Erreur lors de l\'envoi de la requête SOAP');
    }
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
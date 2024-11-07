import { loadSpecifications, updateCollection } from './specsLoader.js';
import { sendRequest } from './requestHandler.js';

function init() {
    loadSpecifications();
    document.getElementById("model").addEventListener("input", updateCollection);
    document.getElementById("submitButton").addEventListener("click", sendRequest);
}

window.onload = init;
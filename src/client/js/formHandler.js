// config
import {getSentiment} from "./sentimentHandler";

require('dotenv').config();

async function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    checkForName(formText);

    let textToAnalyse = document.getElementById('form__text-to-process').value;
    console.log('analyzing the test '+ textToAnalyse);

    getSentiment(formText)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }

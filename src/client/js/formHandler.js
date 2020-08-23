const sentimentHandler = require('./sentimentHandler.js');

export async function handleSubmit(event) {
    event.preventDefault();

    let textToAnalyse = document.querySelector('#input-text').value;

    sentimentHandler.getSentiment(textToAnalyse)
        .then(res => res.json())
        .then(res => {
            document.querySelector('#polarity').innerHTML = `Polarity: ${res.polarity}`;
            document.querySelector('#subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.querySelector('#polarity_confidence').innerHTML = `Polarity confidence: ${res.polarity_confidence}`;
            document.querySelector('#subjectivity_confidence').innerHTML = `Subjectivity confidence: ${res.subjectivity_confidence}`;
        })
}


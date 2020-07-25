// require('dotenv').config();


async function getSentiment(textInput) {
    fetch(`http://localhost:8008/sentiment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(textInput)
    }).then(response => response.json())
        .then(res => console.log(res))
        .then(Client.formHandler(response))
        .catch(error => console.log(`error ${error}`, error));
}

export { getSentiment }

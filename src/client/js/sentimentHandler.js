async function getSentiment(textInput) {
    fetch(`http://localhost:${port}/sentiment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(textInput)
    }).then(response => response.json())
        .then(Client.formHandler(response))
        .catch(error => console.log(`error ${error}`, error));
}

export { getSentiment }

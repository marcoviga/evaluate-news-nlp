export async function getSentiment(textInput) {
    return fetch(`http://localhost:8008/sentiment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'content': textInput })
    }).catch(error => console.log(`error ${error}`, error));
}

async function handleSubmit(event) {
    event.preventDefault();

    let textToAnalyse = document.getElementById('input-text').value;

    Client.getSentiment(textToAnalyse)
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.message
        })
}

export { handleSubmit }

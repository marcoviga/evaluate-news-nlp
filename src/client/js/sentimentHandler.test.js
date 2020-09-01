const fetchMock =require('jest-fetch-mock')

fetchMock.enableMocks();

const sut = require('./sentimentHandler');

it('should get the sentiment of the text', async () => {

    const response = {
        "polarity":"positive",
        "subjectivity":"subjective",
        "text":"Lebron is king",
        "polarity_confidence":23.4,
        "subjectivity_confidence":45.4
    };

    fetch.mockResponseOnce(JSON.stringify(response));

    const result = await sut.getSentiment('test').then(res => res.json());

    expect(result).toEqual(response);
    expect(fetch).toHaveBeenCalledTimes(1);
});


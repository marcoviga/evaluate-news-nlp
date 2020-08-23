import "@babel/polyfill"
import fetchMock from "jest-fetch-mock";

const sut = require('./formHandler');

fetchMock.enableMocks();

it('should get the form filled in', async () => {


    document.body.innerHTML = `
        <div class="input" >
            <form class="input-area">
                <textarea id="input-text" placeholder="Write something here..."></textarea>
                <input id="submit-botton" type="submit" value="submit" onclick="return Client.handleSubmit(event)" onsubmit="return Client.handleSubmit(event)">
            </form>
        </div>
        <div class="output">
            <div id="polarity"></div>
            <div id="subjectivity"></div>
            <div id="polarity_confidence"></div>
            <div id="subjectivity_confidence"></div>
        </div>
  `;

    const response = {
        "polarity":"positive",
        "subjectivity":"subjective",
        "text":"Lebron is king",
        "polarity_confidence":23.4,
        "subjectivity_confidence":45.4
    };

    fetch.mockResponseOnce(JSON.stringify(response));

    const myMockElement = {
        preventDefault: jest.fn(),
    };

    await sut.handleSubmit(myMockElement);

    expect(fetch).toBeCalled();
    expect(fetch).toHaveBeenCalledTimes(1);
    // TODO testing dom,
    // expect(document.querySelector('#polarity').innerHTML).toEqual('positive');

});


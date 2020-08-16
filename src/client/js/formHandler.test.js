import "@babel/polyfill"

const sut = require('./formHandler');

const sentimentHandler = require('./sentimentHandler');
import Client from './sentimentHandler'

it('should display the weather info', async () => {


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
    jest.mock('./sentimentHandler');

    sentimentHandler.getSentiment = jest.fn().mockResolvedValue({
        data:
            {
                polarity:"positive",
                subjectivity:"subjective",
                text:"Lebron is the king",
                polarity_confidence:0.78,
                subjectivity_confidence:0.45
            }
    });

    const myMockElement = {
        preventDefault: jest.fn(),
    };

    await sut.handleSubmit(myMockElement);

    expect(document.querySelector('#polarity').innerHTML).toEqual('positive');

});


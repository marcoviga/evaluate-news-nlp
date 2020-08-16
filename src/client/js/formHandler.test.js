// import "@babel/polyfill"
//
// const sut = require('./formHandler');
//
// const sentimentHandler = require('./sentimentHandler');
//
// jest.mock('./sentimentHandler');
//
// it('should display the weather info', async () => {
//
//
//     document.body.innerHTML = `
//         <div class="output">
//             <div id="polarity"></div>
//             <div id="subjectivity"></div>
//             <div id="polarity_confidence"></div>
//             <div id="subjectivity_confidence"></div>
//         </div>
//   `;
//
//     sentimentHandler.getSentiment.mockResolvedValue({
//         data:
//             {
//                 polarity:"positive",
//                 subjectivity:"subjective",
//                 text:"Lebron is the king",
//                 polarity_confidence:0.78,
//                 subjectivity_confidence:0.45
//             }
//     });
//
//     event.preventDefault();
//
//     await sut.handleSubmit();
//
//     expect(document.querySelector('#polarity').innerHTML).toEqual('positive');
//
// });
//

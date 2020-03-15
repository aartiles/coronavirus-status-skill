'use strict'

const should = require('should');
const { AskByCityIntentHandler } = require('../../../src/app/intent-handlers/');

describe('AskByCityIntentHandler', () => {

  it('should return no statuse when there isn\'t', async () => {
    const handlerInput = handlerInputBuilder();

    await AskByCityIntentHandler.handle(handlerInput);

    const expectedMsgParams = 'STATUS_MSG,Cordoba,37,37,0,0,<s>Entre ellos hay un hombre de 26 años que había viajado recientemente a Italia.</s>';
    should(handlerInput.speakLastCallArgument()).be.eql(expectedMsgParams);
  });

  function handlerInputBuilder() {
    let speakOutputSpy;
    return {
      speakLastCallArgument: () => speakOutputSpy,
      attributesManager: {
        getRequestAttributes: () => ({
          t: (...args) => args.toString()
        })
      },
      requestEnvelope: {
        request: {
          intent: {
            name: 'AskByCityIntent',
            confirmationStatus: 'NONE',
            slots: {
              location: {
                name: 'location',
                value: 'córdoba',
                confirmationStatus: 'NONE',
                source: 'USER'
              }
            }
          }
        },        
      },
      responseBuilder: {
        speak: (speakOutput) => {
          speakOutputSpy = speakOutput
          return {
            reprompt: (speakOutput) => ({
              withShouldEndSession: () => ({
                getResponse: () => Promise.resolve()
              })
            })
          }
        }
      }
    };    
  }

});
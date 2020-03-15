// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.

'use strict';


module.exports = {
  canHandle() {
    return true;
  },
  async handle(handlerInput, error) {
    const { attributesManager } = handlerInput;
    const requestAttributes = attributesManager.getRequestAttributes();

    let speakOutput;
    console.error(`~~~~ Error handled: ${error.stack}`);
    speakOutput = requestAttributes.t('ERROR_MSG') + ' ' + requestAttributes.t('HELP_MSG');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

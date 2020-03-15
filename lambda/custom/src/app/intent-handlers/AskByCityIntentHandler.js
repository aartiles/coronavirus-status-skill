'use strict';
const { startCase, first } = require('lodash');
const Alexa = require('ask-sdk-core');
const actionsFactory = require('../actionsFactory');
const resolveSlots = require('../resolveSlots');

module.exports = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AskByCityIntent'
    );
  },
  async handle(handlerInput) {
    const { attributesManager } = handlerInput;
    const requestAttributes = attributesManager.getRequestAttributes();
    const { getStatusByCity } = actionsFactory(handlerInput);
    const { location } = resolveSlots(handlerInput.requestEnvelope.request.intent.slots);

    console.log('location', location);

    const status = await getStatusByCity({ city: location.resolved });

    let speakOutput;
    if (!status) {
      speakOutput = requestAttributes.t('CITY_NOT_AVAILABLE_MSG', location.resolved);
    } else {
      const textSSML = formatTextToSSML(status.text());
      const city = formatCity(status.city());
      if (status.diagnosed === 0) {
        speakOutput = requestAttributes.t('STATUS_NO_CASES_MSG', city, textSSML);
      }
      else {
        speakOutput = requestAttributes.t('STATUS_MSG', city, status.diagnosed(), status.active(), status.cured(), status.deceased(), textSSML);
      }
    }

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .withShouldEndSession(false)
      .getResponse();
  },
};

function formatTextToSSML(text) {
  const textSSML = text.split('.').map(t => `<s>${t}.</s>`).join('');
  return textSSML.replace('<s>.</s>', '');
}

function formatCity(city) {
  return startCase(first(city.split('/')));
}

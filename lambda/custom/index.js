const Alexa = require('ask-sdk-core');
const interceptors = require('./src/app/interceptors');

const {
  LaunchRequestHandler,
  AskByCityIntentHandler,
  HelpIntentHandler,
  CancelAndStopIntentHandler,
  ErrorHandler,
  SessionEndedRequestHandler,
  IntentReflectorHandler
} = require('./src/app/intent-handlers/');


// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    AskByCityIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
  )
  .addErrorHandlers(
    ErrorHandler,
  )
  .addRequestInterceptors(
    interceptors.LocalizationRequestInterceptor,
    interceptors.LoggingRequestInterceptor)
  .addResponseInterceptors(
    interceptors.LoggingResponseInterceptor)
  .lambda();

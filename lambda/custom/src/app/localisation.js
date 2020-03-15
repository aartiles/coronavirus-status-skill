module.exports = {
  es: {
    translation: {
      GREETING_MSG:
        '<s><say-as interpret-as="interjection">Hola!</say-as></s> <s>Dime de qué ciudad quieres conocer el estado de contagios por Coronavirus.</s>',
      CITY_NOT_AVAILABLE_MSG:
        '<s><say-as interpret-as="interjection">Qué pena</say-as>, no tenemos datos para %s.</s><s>Puedes preguntarme por otra ciudad o decir cierra la skill para terminar.</s>',
      STATUS_MSG:
        '<s>El número de diagnosticados con Coronavirus en %s es de %d, de los cuales %d siguen activos, %d se han recuperado y %d han fallecido.</s> %s <s>Puedes preguntarme por otra ciudad o decir cierra la skill para terminar.</s>',
      STATUS_NO_CASES_MSG: '<s>No se han detectado casos de Coronavirus en %s</s> %s <s>Puedes preguntarme por otra ciudad o decir cierra la skill para terminar.</s>',
      HELP_MSG:
        'Puedes preguntame por cualquier ciudad de españa para conocer el número de contagios por Coronavirus',
      BYE_MSG: '<say-as interpret-as="interjection">Hasta luego</say-as> y recuerda, quédate en casa!',
      // Errors
      ERROR_MSG: 'Ha ocurrido un error.'
    },
  },
};

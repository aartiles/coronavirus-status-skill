'use strict';
const getStatusByCityFactory = require('../core/actions/getStatusByCity');
const StatusesRetrieverFromURLFactory = require('../core/infrastructure/StatusesRetrieverFromURL');
const StatusesRepositoryFactory = require('../core/infrastructure/StatusesRepository');
const STATUSES_URL = 'https://raw.githubusercontent.com/aartiles/coronavirus-status-skill/master/lambda/custom/data/statuses.json';
const statusesRetriever = StatusesRetrieverFromURLFactory({ url: STATUSES_URL });

module.exports = () => {
  const statusesRepository = StatusesRepositoryFactory({ statusesRetriever });

  return {
    getStatusByCity: getStatusByCityFactory({ statusesRepository }),
  };
};

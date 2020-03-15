'use strict';
const getStatusByCityFactory = require('../core/actions/getStatusByCity');
const StatusesRetrieverFromURLFactory = require('../core/infrastructure/StatusesRetrieverFromURL');
const StatusesRepositoryFactory = require('../core/infrastructure/StatusesRepository');
const STATUSES_URL = 'https://gist.githubusercontent.com/aartiles/9e3d8fc7864109d96e8acd41efd99e50/raw/08746a9fa10f54ca5a31cec6186328d2e6c2be0a/covid-19-spain-by-province.json';
const statusesRetriever = StatusesRetrieverFromURLFactory({ url: STATUSES_URL });

module.exports = () => {
  const statusesRepository = StatusesRepositoryFactory({ statusesRetriever });

  return {
    getStatusByCity: getStatusByCityFactory({ statusesRepository }),
  };
};

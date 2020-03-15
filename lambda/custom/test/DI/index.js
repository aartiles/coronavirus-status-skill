'use strict';

const getStatusByCityFactory = require('../../src/core/actions/getStatusByCity');
const StatusesRepositoryFactory = require('../../src/core/infrastructure/StatusesRepository');
const StatusesRetrieverFromFileFactory = require('../../src/core/infrastructure/StatusesRetrieverFromFile');
const statusesRetriever = StatusesRetrieverFromFileFactory({});

module.exports = {
  getStatusByCityFactory,
  statusesRepository: StatusesRepositoryFactory({ statusesRetriever })
};
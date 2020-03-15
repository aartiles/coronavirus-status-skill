'use strict';

const Status = require('../domain/Status');
const alternateName = require('./alternateName');

module.exports = ({ statusesRetriever }) => {
  const that = {};
  let _statuses = null;

  that.add = async ({ status }) => {
    if (!_statuses) _statuses = [];
    _statuses.push(status);
    return Promise.resolve();
  };

  that.find = async ({ city }) => {
    if (!_statuses) await _loadStatuses();
    const found = _statuses.filter(status => city === status.city() || alternateName(city) === status.city());
    return Promise.resolve(found[0]);
  };

  async function _loadStatuses() {
    const FIELD = {
      DIAGNOSED: 0,
      ACTIVE: 1,
      CURED: 2,
      DECEASED: 3,
      TEXT: 4
    };
  
    _statuses = [];
    const statuses = await statusesRetriever.retrieve();
    for (const statusData of Object.values(statuses)) {      
      const status = Status({
        city: statusData.name.toLowerCase(),
        diagnosed: statusData.metadata[FIELD.DIAGNOSED],
        active: statusData.metadata[FIELD.ACTIVE],
        cured: statusData.metadata[FIELD.CURED],
        deceased: statusData.metadata[FIELD.DECEASED],
        text: statusData.metadata[FIELD.TEXT].replace('<br>', ' ')
      });
      await that.add({ status });
    }
  }

  that.clear = async () => {
    _statuses = null;
    Promise.resolve();
  };

  return that;
};

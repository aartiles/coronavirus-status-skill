'use strict';

const statuses = require('../../../data/statuses.json');

module.exports = ({ path }) => {
  const that = {};

  that.retrieve = async () => {
    return Promise.resolve(statuses);
  };

  return that;
};

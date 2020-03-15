'use strict';

const statuses = require('./statuses.json');

module.exports = ({ path }) => {
  const that = {};

  that.retrieve = async () => {
    return Promise.resolve(statuses);
  };

  return that;
};

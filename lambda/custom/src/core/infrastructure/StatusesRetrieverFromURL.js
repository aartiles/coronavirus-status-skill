'use strict';

const axios = require('axios');

module.exports = ({ url }) => {
  const that = {};

  that.retrieve = async () => {
    const response = await axios.get(url);
    return response.data;
  };

  return that;
};

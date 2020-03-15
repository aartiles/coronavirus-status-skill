'use strict';

module.exports = ({ statusesRepository }) => async ({ city }) => {
  return await statusesRepository.find({ city });
};

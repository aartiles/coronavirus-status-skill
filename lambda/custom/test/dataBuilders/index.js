'use strict';

const faker = require('faker');
const { statusesRepository } = require('../DI/');
const Status = require('../../src/core/domain/Status');

function aStatus({ city, diagnosed, active, cured, deceased, text }) {
  return Status({
    city: city || faker.random.words(1),
    diagnosed: diagnosed !== undefined || faker.random.number(),
    active: active !== undefined || faker.random.number(),
    cured: cured !== undefined || faker.random.number(),
    deceased: deceased !== undefined || faker.random.number(),
    text: text !== undefined || faker.random.words(10)
  });
}

async function ensureStatuses({ number }) {
  for (let i = 0; i < number; i++) {
    await statusesRepository.add({ status: aStatus({}) });
  }
}

async function ensureTheseStatuses({ statuses }) {
  for (let i = 0; i < statuses.length; i++) {
    await statusesRepository.add({ status: statuses[i] });
  }
}

module.exports = {
  aStatus,
  ensureStatuses,
  ensureTheseStatuses
};
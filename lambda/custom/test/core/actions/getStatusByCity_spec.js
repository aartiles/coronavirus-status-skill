'use strict'

const should = require('should');
const { getStatusByCityFactory, statusesRepository } = require('../../DI');
const { ensureStatuses, ensureTheseStatuses, aStatus } = require('../../dataBuilders');

describe('getStatusByCity action', () => {
  const getStatusByCity = getStatusByCityFactory({ statusesRepository });

  beforeEach(statusesRepository.clear);

  it('should return no statuse when there isn\'t', async () => {
    await ensureStatuses({ number: 1 });
    const city = 'non existing city';
    const status = await getStatusByCity({ city });
    should.not.exists(status);
  });

  it('should return status for a city', async () => {
    const expectedStatus = aStatus({});
    await ensureTheseStatuses({ statuses: [expectedStatus] });

    const status = await getStatusByCity({ city: expectedStatus.city() });
    should(status.city()).eql(expectedStatus.city());
  });

  it('should return status for a city with alternate names', async () => {
    const expectedStatus = aStatus({ city: "cataluña" });
    await ensureTheseStatuses({ statuses: [expectedStatus] });

    const status = await getStatusByCity({ city: "barcelona" });
    should(status.city()).eql(expectedStatus.city());
  });

});
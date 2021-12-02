const config = require('./config');

// include test suites
const user = require('./suites/user/user.suite');
const trip = require('./suites/trip/trip.suite');

const headers = {};
/*const headers = {
  authorization: config.HEADER_AUTH,
  'client-agent': config.HEADER_AGENT,
  'Content-Type': HEADER_CONTENT_TYPE
};*/

const app = require('../app');

describe('Main', () => {

  afterAll(async () => {
    //await app.apiDb.disconnect();
  });

  user(headers);
  trip(headers);
});

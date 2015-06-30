'use strict';

var usps = require('../../');

usps.configure(require('../options'));

module.exports = {
  track: function (test) {
    usps.trackAndConfirm.track(
      { trackID: [ 'EJ123456780US',
                   'EJ123456781US',
                   '12345' ] },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.trackInfo, 'trackAndConfirm.track');

        test.done();
      }
    );
  },
  trackField: function (test) {
    usps.trackAndConfirm.trackField(
      { revision: '1',
        clientIP: '127.0.0.1',
        sourceID: 'John Doe',
        trackID: [ { id: '010850921250125054',
                     destinationZipCode: '12345',
                     mailingDate: '2010-01-01' } ] },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.trackInfo, 'trackAndConfirm.trackField');

        test.done();
      }
    );
  }
};
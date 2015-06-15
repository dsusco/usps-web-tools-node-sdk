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
        test.deepEqual(
          response,
          {"trackInfo":[{"trackSummary":"The Postal Service could not locate the tracking information for your request. Please verify your tracking number and try again later." },{"trackSummary":"The Postal Service could not locate the tracking information for your request. Please verify your tracking number and try again later." },{"error":{"number":"-2147219301","description":"Delivery status information is not available for your item via this web site.","helpFile":"","helpContext":""}}]},
          'trackAndConfirm.track does not return expected response'
        );

        test.done();
      }
    );
  }
};
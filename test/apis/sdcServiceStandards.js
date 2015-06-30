'use strict';

var
  moment = require('moment'),
  usps = require('../../');

usps.configure(require('../options'));

module.exports = {
  sdcGetLocations: function (test) {
    usps.sdcServiceStandards.sdcGetLocations(
      { mailClass: '0',
        originZIP: '70601',
        destinationZIP: '98101',
        acceptDate: moment().format('D-MMM-YYYY'),
        acceptTime: '0900',
        nonEMDetail: true },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.release, 'sdcServiceStandards.sdcGetLocations');

        test.done();
      }
    );
  }
};
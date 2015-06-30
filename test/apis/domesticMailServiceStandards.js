'use strict';

var usps = require('../../');

usps.configure(require('../options'));

module.exports = {
  priorityMail: function (test) {
    usps.domesticMailServiceStandards.priorityMail(
      { originZip: '90201',
        destinationZip: '21114',
        pmGuarantee: 'Y' },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.originZip, 'domesticMailServiceStandards.priorityMail');

        test.done();
      }
    );
  },
  standardB: function (test) {
    usps.domesticMailServiceStandards.standardB(
      { originZip: '90201',
        destinationZip: '21114' },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.originZip, 'domesticMailServiceStandards.standardB');

        test.done();
      }
    );
  },
  firstClassMail: function (test) {
    usps.domesticMailServiceStandards.firstClassMail(
      { originZip: '90201',
        destinationZip: '21114' },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.originZip, 'domesticMailServiceStandards.firstClassMail');
        test.done();
      }
    );
  },
  expressMailCommitment: function (test) {
    usps.domesticMailServiceStandards.expressMailCommitment(
      { originZip: '90201',
        destinationZip: '21114',
        pmGuarantee: 'Y',
        clientType: '8' },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.originZIP, 'domesticMailServiceStandards.expressMailCommitment');

        test.done();
      }
    );
  }
};
'use strict';

var
  moment = require('moment'),
  usps = require('../../');

usps.configure(require('../options'));

module.exports = {
  priorityMail: function (test) {
    usps.domesticMailServiceStandards.priorityMail(
      { originZip: '90201', destinationZip: '21114', pmGuarantee: 'Y' },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.deepEqual(
          response,
          { originZip: '90201', destinationZip: '21114', days: '2' },
          'domesticMailServiceStandards.priorityMail does not return expected response'
        );

        test.done();
      }
    );
  },
  standardB: function (test) {
    usps.domesticMailServiceStandards.standardB(
      { originZip: '90201', destinationZip: '21114' },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.deepEqual(
          response,
          { originZip: '90201', destinationZip: '21114', days: '7' },
          'domesticMailServiceStandards.standardB does not return expected response'
        );

        test.done();
      }
    );
  },
  firstClassMail: function (test) {
    usps.domesticMailServiceStandards.firstClassMail(
      { originZip: '90201', destinationZip: '21114' },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.deepEqual(
          response,
          { originZip: '90201', destinationZip: '21114', days: '3' },
          'domesticMailServiceStandards.firstClassMail does not return expected response'
        );

        test.done();
      }
    );
  },
  expressMailCommitment: function (test) {
    usps.domesticMailServiceStandards.expressMailCommitment(
      { originZip: '90201', destinationZip: '21114', pmGuarantee: 'Y', clientType: '8' },
      function (error, response) {
        test.expect(2);
console.log(error);
        test.ifError(error);
        test.deepEqual(
          response,
          { originZIP: '90201',
            originCity: 'BELL GARDENS',
            originState: 'CA',
            destinationZIP: '21114',
            destinationCity: 'CROFTON',
            destinationState: 'MD',
            date: moment().format('D-MMM-YYYY'),
            time: moment().utcOffset(-420).format('h:mmA'),
            commitment:
             [ { commitmentName: '1-Day',
                 commitmentTime: '12:00 PM',
                 commitmentSequence: 'A0112',
                 location: [ { cutOff: '5:00 PM',
                               facility: 'EXPRESS MAIL COLLECTION BOX',
                               street: '4357 SLAUSON AVE',
                               city: 'BELL GARDENS',
                               state: 'CA',
                               zip: '90201' },
                             { cutOff: '3:00 PM',
                               facility: 'POST OFFICE',
                               street: '7001 GARFIELD AVE',
                               city: 'BELL GARDENS',
                               state: 'CA',
                               zip: '90201' },
                             { cutOff: '2:30 PM',
                               facility: 'POST OFFICE',
                               street: '4619 ELIZABETH ST',
                               city: 'CUDAHY',
                               state: 'CA',
                               zip: '90201' },
                             { cutOff: '2:00 PM',
                               facility: 'POST OFFICE',
                               street: '5555 BANDINI BLVD',
                               city: 'BELL GARDENS',
                               state: 'CA',
                               zip: '90201' } ] },
               { commitmentName: '1-Day',
                 commitmentTime: '3:00 PM',
                 commitmentSequence: 'B0115',
                 location: [ { cutOff: '5:00 PM',
                               facility: 'EXPRESS MAIL COLLECTION BOX',
                               street: '4357 SLAUSON AVE',
                               city: 'BELL GARDENS',
                               state: 'CA',
                               zip: '90201' },
                             { cutOff: '3:00 PM',
                               facility: 'POST OFFICE',
                               street: '7001 GARFIELD AVE',
                               city: 'BELL GARDENS',
                               state: 'CA',
                               zip: '90201' },
                             { cutOff: '2:30 PM',
                               facility: 'POST OFFICE',
                               street: '4619 ELIZABETH ST',
                               city: 'CUDAHY',
                               state: 'CA',
                               zip: '90201' },
                             { cutOff: '2:00 PM',
                               facility: 'POST OFFICE',
                               street: '5555 BANDINI BLVD',
                               city: 'BELL GARDENS',
                               state: 'CA',
                               zip: '90201' } ] } ] },
          'domesticMailServiceStandards.expressMailCommitment does not return expected response'
        );

        test.done();
      }
    );
  }
};
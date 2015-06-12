'use strict';

var usps = require('../../');

usps.configure(require('../options'));

module.exports = {
  cityStateLookup: function (test) {
    usps.addressInformation.cityStateLookup(
      { zipCode: ['90210', '20770'] },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.deepEqual(
          response,
          { zipCode:
             [ { zip5: '90210', city: 'BEVERLY HILLS', state: 'CA' },
               { zip5: '20770', city: 'GREENBELT', state: 'MD' } ] },
          'addressInformation.cityStateLookup does not return expected response'
        );

        test.done();
      }
    );
  },
  verify: function (test) {
    usps.addressInformation.verify(
      { includeOptionalElements: true,
        returnCarrierRoute: true,
        address: [ { address2: '205 bagwell ave',
                     city: 'nutter fort',
                     state: 'wv' } ] },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.deepEqual(
          response,
          { address:
             { address2: '205 BAGWELL AVE',
               city: 'NUTTER FORT',
               state: 'WV',
               zip5: '26301',
               zip4: '4322',
               deliveryPoint: '05',
               carrierRoute: 'C025' } },
          'addressInformation.verify does not return expected response'
        );

        test.done();
      }
    );
  },
  zipCodeLookup: function (test) {
    usps.addressInformation.zipCodeLookup(
      { address: [ { firmName: 'XYZ Corp.',
                     address2: '6406 Ivy',
                     city: 'Greenbelt',
                     state: 'MD' },
                   { firmName: 'ABC Company',
                     address1: 'Apt/Suite 2',
                     address2: '435 S Main Street',
                     city: 'Los Angeles',
                     state: 'CA' } ] },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.deepEqual(
          response,
          { address:
             [ { firmName: 'XYZ CORP.',
                 address2: '6406 IVY LN',
                 city: 'GREENBELT',
                 state: 'MD',
                 zip5: '20770',
                 zip4: '1441' },
               { firmName: 'ABC COMPANY',
                 address1: 'STE 2',
                 address2: '435 S MAIN ST',
                 city: 'LOS ANGELES',
                 state: 'CA',
                 zip5: '90013',
                 zip4: '' } ] },
          'addressInformation.zipCodeLookup does not return expected response'
        );

        test.done();
      }
    );
  }
};
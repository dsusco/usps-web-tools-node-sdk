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
        test.ok(response.zipCode, 'addressInformation.cityStateLookup');

        test.done();
      }
    );
  },
  verify: function (test) {
    usps.addressInformation.verify(
      { includeOptionalElements: true,
        returnCarrierRoute: true,
        address: [
          { address2: '205 bagwell ave',
            city: 'nutter fort',
            state: 'wv' },
          { firmName: 'mrs. jane doe',
            address1: 'apt. 1',
            address2: '150 calle a',
            city: 'san juan',
            state: 'pr',
            urbanization: 'urb las gladiolas',
            zip5: '00926',
            zip4: '3232' }
        ] },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.address, 'addressInformation.verify');

        test.done();
      }
    );
  },
  zipCodeLookup: function (test) {
    usps.addressInformation.zipCodeLookup(
      { address: [
        { firmName: 'XYZ Corp.',
          address2: '6406 Ivy',
          city: 'Greenbelt',
          state: 'MD' },
        { firmName: 'ABC Company',
          address1: 'Apt/Suite 2',
          address2: '435 S Main Street',
          city: 'Los Angeles',
          state: 'CA' }
      ] },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.address, 'addressInformation.zipCodeLookup');

        test.done();
      }
    );
  }
};
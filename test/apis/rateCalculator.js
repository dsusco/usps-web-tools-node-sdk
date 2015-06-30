'use strict';

var usps = require('../../');

usps.configure(require('../options'));

module.exports = {
  rate: function (test) {
    usps.rateCalculator.rate(
      { revision: '2',
        package: [
          { service: 'FIRST CLASS',
            firstClassMailType: 'LETTER',
            zipOrigination: '44106',
            zipDestination: '20770',
            pounds: '0',
            ounces: '3.5',
            size: 'REGULAR',
            machinable: true },
          { service: 'PRIORITY',
            zipOrigination: '44106',
            zipDestination: '20770',
            pounds: '1',
            ounces: '8',
            container: 'NONRECTANGULAR',
            size: 'LARGE',
            width: '15',
            length: '30',
            height: '15',
            girth: '55',
            value: '1000',
            specialServices: ['1'] },
          { service: 'ALL',
            zipOrigination: '90210',
            zipDestination: '96698',
            pounds: '8',
            ounces: '32',
            size: 'REGULAR',
            machinable: true,
            dropOffTime: '23:59',
            shipDate: { shipDate: '2013-07-28' } }
        ] },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.package, 'rateCalculator.rate');

        test.done();
      }
    );
  },
  intlRate: function (test) {
    usps.rateCalculator.intlRate(
      { revision: '2',
        package: [
          { pounds: '15',
            ounces: '0',
            machinable: true,
            mailType: 'Package',
            gxg: { poBoxFlag: 'Y',
                   giftFlag: 'Y' },
            valueOfContents: '200',
            country: 'Australia',
            container: 'RECTANGULAR',
            size: 'LARGE',
            width: '10',
            length: '15',
            height: '10',
            girth: '0',
            originZip: '18701',
            commercialFlag: 'N',
            acceptanceDateTime: '2014-01-22T13:15:00-06:00',
            destinationPostalCode: '2046' },
          { pounds: '0',
            ounces: '3',
            mailType: 'Envelope',
            valueOfContents: '75',
            country: 'Algeria',
            container: '',
            size: 'REGULAR',
            width: '',
            length: '',
            height: '',
            girth: '',
            originZip: '',
            commercialFlag: 'N',
            extraServices: ['6'] }
        ] },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.package, 'rateCalculator.intlRate');

        test.done();
      }
    );
  }
};
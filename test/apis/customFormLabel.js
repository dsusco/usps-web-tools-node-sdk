'use strict';

var usps = require('../../');

usps.configure(require('../options'));

module.exports = {
  customs: function (test) {
    usps.customFormLabel.customs(
      { fromFirm: 'WASILLA PUBLIC LIBRARY',
        fromAddress2: '391 N MAIN ST',
        fromCity: 'WASILLA',
        fromState: 'AK',
        fromZip5: '99654',
        fromPhone: '9073765913',
        toFirm: 'The National Library of Russia',
        toAddress3: 'Main Building',
        toAddress4: '1/3 Ostrovsky Square',
        toAddress5: 'St. Petersburg',
        toCountry: 'RUSSIA',
        toPhone: '+7(812) 310-71-37',
        toEmail: 'INF0@NLR.RU',
        shippingContents: [
          { description: 'Books (in English)',
            quantity: '2',
            value: '20',
            netPounds: '3',
            netOunces: '1',
            hsTariffNumber: '490199' },
          { description: 'DVDs (in English)',
            quantity: '2',
            value: '50',
            netPounds: '0',
            netOunces: '10',
            hsTariffNumber: '999099' }
        ],
        grossPounds: '3',
        grossOunces: '11',
        imageType: 'TIF',
        imageLayout: 'ALLINONEFILE',
        contentType: 'OTHER',
        contentTypeOther: 'Language Materials',
        hsTariffNumber: '',
        countryOfOrigin: 'UNITED STATES',
        eelPFC: '30.37a' },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.totalValue, 'customFormLabel.customs');

        test.done();
      }
    );
  },
  customsCertify: function (test) {
    usps.customFormLabel.customsCertify(
      { fromFirm: 'WASILLA PUBLIC LIBRARY',
        fromAddress2: '391 N MAIN ST',
        fromCity: 'WASILLA',
        fromState: 'AK',
        fromZip5: '99654',
        fromPhone: '9073765913',
        toFirm: 'The National Library of Russia',
        toAddress3: 'Main Building',
        toAddress4: '1/3 Ostrovsky Square',
        toAddress5: 'St. Petersburg',
        toCountry: 'RUSSIA',
        toPhone: '+7(812) 310-71-37',
        toEmail: 'INF0@NLR.RU',
        shippingContents: [
          { description: 'Books (in English)',
            quantity: '2',
            value: '20',
            netPounds: '3',
            netOunces: '1',
            hsTariffNumber: '490199' },
          { description: 'DVDs (in English)',
            quantity: '2',
            value: '50',
            netPounds: '0',
            netOunces: '10',
            hsTariffNumber: '999099' }
        ],
        grossPounds: '3',
        grossOunces: '11',
        imageType: 'TIF',
        imageLayout: 'ALLINONEFILE',
        contentType: 'OTHER',
        contentTypeOther: 'Language Materials',
        hsTariffNumber: '',
        countryOfOrigin: 'UNITED STATES',
        eelPFC: '30.37a' },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.ok(response.totalValue, 'customFormLabel.customsCertify');

        test.done();
      }
    );
  }
};
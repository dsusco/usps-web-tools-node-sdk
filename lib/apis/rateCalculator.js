'use strict';

var api = require('../api');

module.exports = {
  rate: function (data, callback) {
    api.request('RateV4', 'rateV4', data, 'rateV4Response', callback);
  },
  intlRate: function (data, callback) {
    api.request('IntlRateV2', 'intlRateV2', data, 'intlRateV2Response', callback);
  }
};
'use strict';

var api = require('../api');

module.exports = {
  cityStateLookup: function (data, callback) {
    api.request('CityStateLookup', data, 'cityStateLookupResponse', callback);
  },
  verify: function (data, callback) {
    api.request('Verify', data, 'addressValidateResponse', callback);
  },
  zipCodeLookup: function (data, callback) {
    api.request('ZipCodeLookup', data, 'zipCodeLookupResponse', callback);
  }
};
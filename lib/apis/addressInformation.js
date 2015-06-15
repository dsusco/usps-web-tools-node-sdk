'use strict';

var api = require('../api');

module.exports = {
  cityStateLookup: function (data, callback) {
    api.request('CityStateLookup', 'cityStateLookup', data, 'cityStateLookupResponse', callback);
  },
  verify: function (data, callback) {
    api.request('Verify', 'addressValidate', data, 'addressValidateResponse', callback);
  },
  zipCodeLookup: function (data, callback) {
    api.request('ZipCodeLookup', 'zipCodeLookup', data, 'zipCodeLookupResponse', callback);
  }
};
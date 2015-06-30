'use strict';

var api = require('../api');

module.exports = {
  cityStateLookup: function (data, callback) {
    api.request(false, 'CityStateLookup', 'cityStateLookup', data, 'cityStateLookupResponse', callback);
  },
  verify: function (data, callback) {
    api.request(false, 'Verify', 'addressValidate', data, 'addressValidateResponse', callback);
  },
  zipCodeLookup: function (data, callback) {
    api.request(false, 'ZipCodeLookup', 'zipCodeLookup', data, 'zipCodeLookupResponse', callback);
  }
};
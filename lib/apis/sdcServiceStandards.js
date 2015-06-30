'use strict';

var api = require('../api');

module.exports = {
  sdcGetLocations: function (data, callback) {
    api.request(false, 'SDCGetLocations', 'sdcGetLocations', data, 'sDCGetLocationsResponse', callback);
  }
};
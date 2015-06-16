'use strict';

var api = require('../api');

module.exports = {
  sdcGetLocations: function (data, callback) {
    api.request('SDCGetLocations', 'sdcGetLocations', data, 'sDCGetLocationsResponse', callback);
  }
};
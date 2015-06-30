'use strict';

var api = require('../api');

module.exports = {
  track: function (data, callback) {
    api.request(false, 'TrackV2', 'track', data, 'trackResponse', callback);
  },
  trackField: function (data, callback) {
    api.request(false, 'TrackV2', 'trackField', data, 'trackResponse', callback);
  }
};
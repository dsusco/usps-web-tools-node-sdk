'use strict';

var api = require('../api');

module.exports = {
  track: function (data, callback) {
    api.request('TrackV2', data, 'trackResponse', callback);
  }
};
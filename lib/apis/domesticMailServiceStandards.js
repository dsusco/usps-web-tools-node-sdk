'use strict';

var api = require('../api');

module.exports = {
  priorityMail: function (data, callback) {
    api.request('PriorityMail', 'priorityMail', data, 'priorityMailResponse', callback);
  },
  standardB: function (data, callback) {
    api.request('StandardB', 'standardB', data, 'standardBResponse', callback);
  },
  firstClassMail: function (data, callback) {
    api.request('FirstClassMail', 'firstClassMail', data, 'firstClassMailResponse', callback);
  },
  expressMailCommitment: function (data, callback) {
    api.request('ExpressMailCommitment', 'expressMailCommitment', data, 'expressMailCommitmentResponse', callback);
  }
};
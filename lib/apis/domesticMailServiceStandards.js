'use strict';

var api = require('../api');

module.exports = {
  priorityMail: function (data, callback) {
    api.request(false, 'PriorityMail', 'priorityMail', data, 'priorityMailResponse', callback);
  },
  standardB: function (data, callback) {
    api.request(false, 'StandardB', 'standardB', data, 'standardBResponse', callback);
  },
  firstClassMail: function (data, callback) {
    api.request(false, 'FirstClassMail', 'firstClassMail', data, 'firstClassMailResponse', callback);
  },
  expressMailCommitment: function (data, callback) {
    api.request(false, 'ExpressMailCommitment', 'expressMailCommitment', data, 'expressMailCommitmentResponse', callback);
  }
};
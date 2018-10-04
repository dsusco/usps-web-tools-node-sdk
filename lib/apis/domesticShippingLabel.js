'use strict';

var api = require('../api');

module.exports = {
  deliveryConfirmation: function (data, callback) {
    api.request(true, 'DeliveryConfirmationV4', 'deliveryConfirmationV4', data, 'deliveryConfirmationV4.0Response', callback);
  },
  deliveryConfirmCeritfy: function (data, callback) {
    api.request(true, 'DelivConfirmCertifyV4', 'delivConfirmCertifyV4', data, 'delivConfirmCertifyV4.0Response', callback);
  }
};

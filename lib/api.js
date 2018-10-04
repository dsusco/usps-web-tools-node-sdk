'use strict';

var
  request = require('request'),
  templates = require('./templates'),
  xml2js = require('xml2js'),
  parser = new xml2js.Parser({
    explicitArray: false,
    ignoreAttrs: true,
    tagNameProcessors: [xml2js.processors.firstCharLowerCase]
  });

module.exports = {
  request: function (https, api, req, data, responseObject, callback) {
    var xml = templates[req](data);
    // Remove whitespace between XML elements
    xml = xml.replace(/>\s*</mg, '><');

    var protocol = https ? 'https://' : 'http://'; 
    var url = protocol + 'secure.shippingapis.com/ShippingAPI.dll';
    
    request({
        url: url,
        method: 'GET',
        qs: { API: api, XML: xml }
      },
      function (error, response, body) {
        if (!error && response.statusCode === 200) {
          parser.parseString(body, function (error, json) {
            if (!error) {
              if (!json.error) {
                callback(null, json[responseObject]);
              } else {
                // usps error
                callback(json.error, null);
              }
            } else {
              // parser error
              callback(error, null);
            }
          });
        } else {
          // request error
          callback(error, null);
        }
      }
    );
  }
};
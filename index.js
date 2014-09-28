/**
 * Module dependencies
 */

var d64 = require('d64');
var uuid = require('uuid');

module.exports = function toBase64(id) {
  var bytes = uuid.parse(id);
  return d64.encode(bytes);
};
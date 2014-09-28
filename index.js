/**
 * Module dependencies
 */

var escape = require('base64-url').escape;
var uuid = require('uuid');

module.exports = function toBase64(id) {
  var bytes = uuid.parse(id);
  var base64 = (new Buffer(bytes)).toString('base64');
  return escape(base64);
};
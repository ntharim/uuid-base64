/**
 * Module dependencies
 */

var d64 = require('d64');
var uuid = require('uuid');

exports.encode = function encode(id) {
  var bytes = uuid.parse(id);
  return d64.encode(bytes);
};

exports.decode = function decode(id) {
  var bytes = d64.decode(id);
  return uuid.unparse(bytes);
};
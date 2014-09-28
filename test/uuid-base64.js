var assert = require('assert');
var base64 = require('..');

describe('uuid-base64 encode', function () {
  it ('should compress UUID to 22 characters', function () {
    var id = base64.encode('a14a9df2-8e0d-42ef-8075-5c38b0f93c03');
    assert(id.length == 22);
  });
});

describe('uuid-base64 decode', function () {
  it ('should decode a compressed ID to a full UUID', function () {
    var uuid = 'a14a9df2-8e0d-42ef-8075-5c38b0f93c03';
    var id = base64.encode(uuid);
    assert(base64.decode(id) == uuid);
  });
});
var assert = require('assert');
var toBase64 = require('..');

describe('UUID to Base64', function () {
  it ('should compress UUID to 22 characters', function () {
    var id = toBase64('a14a9df2-8e0d-42ef-8075-5c38b0f93c03');
    console.log(id);
    assert(id.length == 22);
  });
});
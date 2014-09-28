var assert = require('assert');
var toBase64 = require('..');

describe('UUID to Base64', function () {
  it ('should compress UUID to 22 characters', function () {
    var id = toBase64('0e8c72e5-463f-446e-bcf2-695274d55940');
    assert(id.length == 22);
  });
});
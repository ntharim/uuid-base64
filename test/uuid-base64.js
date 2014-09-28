var assert = require('assert');
var toBase64 = require('..');

describe('UUID to Base64', function () {
  it ('should compress UUID to 22 characters', function () {
    var id = toBase64('38cb87b5-b23a-481e-8373-b238e5e864c4');
    assert(id.length == 22);
  });
});
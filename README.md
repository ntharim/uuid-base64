
# uuid-base64

[![NPM version][npm-image]][npm-url]
[![Github release][github-image]][github-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]

Compress a UUID to 22 characters

```js
var base64 = require('uuid-base64');
var id = base64.encode('a14a9df2-8e0d-42ef-8075-5c38b0f93c03');
// => cJeSwcsCFiy.SKksgEZw.k
base64.decode(id);
// => 'a14a9df2-8e0d-42ef-8075-5c38b0f93c03'
```

## Installation

  node:

```
$ npm install uuid-base64
```

[npm-image]: https://img.shields.io/npm/v/uuid-base64.svg?style=flat-square
[npm-url]: https://npmjs.org/package/uuid-base64
[github-image]: http://img.shields.io/github/release/ntran13/uuid-base64.svg?style=flat-square
[github-url]: https://github.com/ntran13/uuid-base64/releases
[travis-image]: https://img.shields.io/travis/ntran13/uuid-base64.svg?style=flat-square
[travis-url]: https://travis-ci.org/ntran13/uuid-base64
[coveralls-image]: https://img.shields.io/coveralls/ntran13/uuid-base64.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/ntran13/uuid-base64?branch=master
[david-image]: http://img.shields.io/david/ntran13/uuid-base64.svg?style=flat-square
[david-url]: https://david-dm.org/ntran13/uuid-base64
[license-image]: http://img.shields.io/npm/l/uuid-base64.svg?style=flat-square
[license-url]: LICENSE
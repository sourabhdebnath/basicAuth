# node-basic-auth
Basic authentication parser for Node Projects

## Installation
```
$ npm install node-basic-auth
```

## Import

```js
var bAuth = require('mode-basic-auth')
```
## Usage

```js
var bAuth = require('node-basic-auth')
var user = bAuth(req)
// => { domain: 'abc', name: 'john', pass: 'test' }
```

## License

[MIT](LICENSE)



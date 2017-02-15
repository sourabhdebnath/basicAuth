# node-basic-auth
Basic authentication parser for NodeJS Projects. Supports domain/team specific basic authentication.

## Example format
```js
domain\\name:pass
// =>
// => abc\\mike:test => { domain: 'abc', name: 'mike', pass: 'test' }
```

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
var cred = bAuth(req)
// => { domain: 'abc', name: 'mike', pass: 'test' }
```

## Usage using expressJS

```js
var express = require('express');
var app = express();
var bAuth = require('node-basic-auth');
app.get('/', function(req, res) {
	var cred = bAuth(req, res);
	if(!cred || !cred.domain = 'abc' || cred.name != 'mike' || cred.pass != 'test') {
       //Auth failed
    } else {
       //Auth success
    }
}
})
```
## Special cases

1. Without domain

```js
\\mike:test
// => {domain: '', name: 'mike', pass: 'test'}
```

2. Wothout password

```js
abc\\mike:
// => {domain: 'abc', name: 'mike', pass: ''}
```
## License

[MIT](LICENSE)



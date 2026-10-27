[![npm](https://img.shields.io/npm/v/@sqrtthree/debug-output)](https://www.npmjs.com/package/@sqrtthree/debug-output)

# debug-output

Proxy console.log with `JSON.stringify` to pretty json data in Vue.

Note: it only run in development env by default.

## How to use

```sh
yarn add @sqrtthree/debug-output

# or use npm
npm install @sqrtthree/debug-output
```

```js
import debugOutput from '@sqrtthree/debug-output'

debugOutput.enable()
```

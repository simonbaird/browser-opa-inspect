# POC for browser based rego inspection

It doesn't work currently. I get this:

```
bundle.js:58 Uncaught (in promise) TypeError: fs.readFileSync is not a function
    at bundle.js:58:12
    at new Promise (<anonymous>)
    at Object.inspect (bundle.js:56:12)
    at 1.@zregvart/opa-inspect (bundle.js:4:5)
    at o (bundle.js:1:265)
    at r (bundle.js:1:431)
    at bundle.js:1:460
```

Some possibly useful resources to figure out how to make it work:

- https://david.coffee/react-native-wasm-golang/
- https://itnext.io/webassembly-running-go-code-in-the-browser-916d87456e5f

To try it:

```
npm ci
npm run build
node index.js # Works fine
xdg-open index.html # Browser errors :(
```

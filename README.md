### Quick start
**Make sure you have Node version >= 5.0 and NPM >= 3**

```bash
# clone my repo
git clone https://github.com/ilcheivanovski/angular2-intern-example.git

# install the repo with npm
npm install

# start the server
npm start

# start functional test in other terminal
npm run intern
```

Chai provides its own set of different interfaces for providing assertions. They all do the same things, so just like Intern’s test interfaces, pick the one whose syntax you prefer:

1. <a href="http://chaijs.com/guide/styles/#assert">The assert API, loaded from 'intern/chai!assert', looks like assert.isTrue(value)</a></br>
2. <a href="http://chaijs.com/guide/styles/#expect">The expect API, loaded from 'intern/chai!expect', looks like expect(value).to.be.true</a></br>
3. <a href="http://chaijs.com/guide/styles/#should">The should API, loaded from 'intern/chai!should', looks like value.should.be.true</a></br>

### Debugging

Keep in mind that JavaScript code is running in two separate environments: your test suites are run in Node.js, while the page loaded by functional tests runs in a web browser. Functional tests can be debugged with Node.js’s built-in debugger, or with the more user-friendly node-inspector. Note that these instructions are for debugging functional tests, which run in Node.js; debugging code on the test page itself should be done using the browser's debugging tools.

npm install -g node-inspector
Set a breakpoint in your test code by adding a debugger statement. Since test modules are loaded dynamically by Intern, they will likely not show up in the debugger’s file list, so you won’t be able use the debugger to set an initial breakpoint.
Launch Node.js with debugging enabled, set to pause on the first line of code:
node --debug-brk node_modules/intern/runner config=myPackage/test/intern
Launch node-inspector by running node-inspector.
Open Chrome (you must use Chrome as node-inspector leverages Chrome's developer tools) to:</br>
http://127.0.0.1:8080/debug?port=5858
Continue code execution (F8). The tests will run until your debugger statement.
Debug!



## File Structure

```
angular2-webpack-starter/
 ├──config/                    * our configuration
 |   ├──helpers.js             * helper functions for our configuration files
 |   ├──spec-bundle.js         * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js          * karma config for our unit tests
 |   ├──protractor.conf.js     * protractor config for our end-to-end tests
 │   ├──webpack.dev.js         * our development webpack config
 │   ├──webpack.prod.js        * our production webpack config
 │   └──webpack.test.js        * our testing webpack config
 │
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.browser.ts        * our entry file for our browser environment
 │   │
 |   ├──index.html             * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts           * our polyfills file
 │   │
 |   ├──vendor.browser.ts      * our vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   ├──app.spec.ts        * a simple test of components in app.ts
 │   │   ├──app.e2e.ts         * a simple end-to-end test for /
 │   │   └──app.ts             * App.ts: a simple version of our App component components
 │   │
 │   ├─assets/                * static assets are served here
 │   |   ├──icon/              * our list of icons from www.favicon-generator.org
 │   |   ├──service-worker.js  * ignore this. Web App service worker that's not complete yet
 │   |   ├──robots.txt         * for search engines to crawl your website
 │   |   └──humans.txt          * for humans to know who the developers are
 │   └─tests/
 |       ├──functional/         * functionnal test are here
 │       └──intern.js           * configuration file
 │
 ├──tslint.json                * typescript lint config
 ├──typedoc.json               * typescript documentation generator
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──package.json               * what npm uses to manage it's dependencies
 └──webpack.config.js          * webpack main configuration file

```

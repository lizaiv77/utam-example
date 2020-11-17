# utam-example
Example of utam integration

## How to run UI tests in this repo
- `yarn install` installs all dependencies
- `yarn build` compiles Page Objects
- `yarn test` runs test

Example of the UI test that consumes UTAM Page Object is [here](https://github.com/lizaiv77/utam-example/blob/master/packages/tmp-pageobjects/src/__tests__/example.spec.ts)

## Utam dependencies

Utam dependencies to use utam are:
```json
{
    "devDependencies": {
        "utam": "0.0.1-alpha11",
        "@utam/tmp-pageobjects": "0.0.1-alpha11", 
        "wdio-utam-service": "0.0.1-alpha11"
    }
}
```

- `utam` is a compiler and is only needed to compile POs
- `@utam/tmp-pageobjects` is a package with Page Objects
- `wdio-utam-service` is wdio integration, needed for utam to be consumed from any wdio test
Technically wdio-utam-service depends on utam, but we recoomend to explicitely put both.
wdio-utam-service also has dependencies from wdio version 6.6, but we recommend to override those in your package configuration


## Compiler configuration

To configure compiler:
- copy JSON files to your package with tests inside folder `__utam__`, for example to `packages/myTests/src/__utam__`
- add utam.config.js with `module.exports = {};` at the package root
- add utam compile cli command to build phase:

```json
{
     "scripts": {
        "build": "yarn compile",
        "compile": "utam -c utam.config.js",
        "test": "wdio"
    }
}
```
- POs will be generated under `<package root>/pageObjects/`

## webdriverio integration using UtamWdioService

> IMPORTANT: all POs methods are asynchronious, remember to use async in tests

- Configure wdio as if you were not using UTAM 
- In wdio config add Utam wdio service:
```
const { UtamWdioService } = require('wdio-utam-service');
...
exports.config = {
    ...
    services: ['chromedriver', [UtamWdioService, {}]]
    ...
}
```

- in a spec file import utam page object from your target folder or from package
- use global object `utam` to create/load Utam Page Objects inside your test, ex:

```js
import Login from 'tmp-tests/pageObjects/login';

describe('my test', () => {    
    
    it('my test method', async () => {
        await browser.url('/');
        const loginPage = await utam.load(Login);
        await loginPage.login('user', 'password');
        ...
    }
```

## webdriverio integration without UtamWdioService

If you intend to use utam without starting utam service from wdio config (supported starting version `0.0.1-alpha11`) and with Page Objects from the package use method `createUtamLoader`.

Precompiled Page Objects are available in package `@utam/tmp-pageobjects`.

```js
import Login from '@utam/tmp-pageobjects';
import { createUtamLoader } from 'wdio-utam-service';

describe('login test example', () => {

    let utamLoader;

    beforeAll('utam loader setup', () => {
        // driver is a wdio BrowserObject created by its runner or by consumer
        utamLoader = createUtamLoader(driver);
    });
    
    it('login', async () => {
        await driver.url('/');
        const loginPage = await utamLoader.load(Login);
        await loginPage.login('user', 'password');
    });

});
```
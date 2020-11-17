# utam-example
Example of utam integration

## How to run UI tests in this repo
- `yarn install` installs all dependencies
- `yarn build` compiles Page Objects
- `yarn test` runs test

## Utam dependencies

Utam dependencies to use utam are:
```json
{
    "devDependencies": {
        "utam": "0.0.1-alpha9",
        "wdio-utam-service": "0.0.1-alpha9"
    }
}
```

- utam is a compiler and needed to compile POs
- wdio-utam-service is wdio integration, needed for utam to be consumed from any wdio test
Technically wdio-utam-service depends on utam, but we recoomend to explicitely put both.
wdio-utam-service also has dependencies from wdio version 6.6, but we recommend to override those in your package configuration.

Note: at the moment UTAM is indegrated with wdio ver 6.


## Compile POs from json

We do not publish artifact with POs, at the moment it should be set as part of the build.
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

## webdriverio integration and UI tests

- Configure wdio as if you were not using UTAM 
- add Utam wdio service:
```
const { UtamWdioService } = require('wdio-utam-service');
...
exports.config = {
    ...
    services: ['chromedriver', [UtamWdioService, {}]]
    ...
}
```

- inside a spec file 
    - import utam page object from your target folder
    - use global object __utam__ to create/load Utam Page Objects inside your test, ex:

```js
import Login from 'tmp-pageobjects/pageObjects/login';

describe('login test', () => {    
    beforeAll(() => {
        // timeout for UI operations
        // temporary, later should be set via service config
        browser.setTimeout({ implicit: 30000 });
    });

    it('app navigation', async () => {
        await browser.url('/');
        const loginPage = await utam.load(Login);
        await loginPage.login('test@kk.org', 'password123456');
        ...
    }
```

> IMPORTANT: all POs methods are asynchronious, remember to use async in tests
Example of consumer repo for UTAM JS.

# Setup
Clone or fork repository and run `yarn install` from root.

**UTAM project is only compatible with NodeJS ver 14 and later.**

# Packages structure

```
.
+-- packages
    +-- my-tests
        +-- package.json
        +-- tsconfig.json
        +-- wdio.conf.js
    +-- my-components
        +-- pageObjects
        +-- custom
            +-- <component sources>
            +-- __utam__
                +-- <component name>.utam.json
        +-- package.json
        +-- tsconfig.json
        +-- utam.config.js
+-- babel.config.js        
+-- lerna.json
+-- package.json        
+-- tsconfig.json
+-- tsconfig.settings.json        
```

# Compiler setup (my-components)

- add UTAM dependencies to package.json
```json
{
    "devDependencies": {
        "utam": "0.0.1-alpha18"
    }
}
```
- add utam.config.js with `module.exports = {};` at the package root
```js
module.exports = {
    // file mask for utam page objects
    testMatch: ['**/*.utam.json'],
    // output folder for generated page objects, relative to the package root
    outputDir: 'pageObjects',
};
```
- add utam compile cli command to build phase

```json
{
     "scripts": {
        "build": "yarn compile",
        "compile": "utam -c utam.config.js"
    }
}
```

# Webdriverio integration setup (my-tests)

- add dependencies wdio, utam and custom page objects
```json
{
    "devDependencies": {
        "utam": "0.0.1-alpha18",
        "wdio-utam-service": "0.0.1-alpha18",
        "utam-preview": "0.0.1-alpha18",
        "my-components" : "0.0.1"
    }
}
```
- add wdio.config.js with wdio-utam-service:
```
const { UtamWdioService } = require('wdio-utam-service');
...
exports.config = {
    ...
    services: ['chromedriver', [UtamWdioService, {}]]
    ...
}
```
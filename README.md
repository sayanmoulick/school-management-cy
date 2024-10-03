npm init -y

npm install cypress --save-dev

npx cypress open

npm install @badeball/cypress-cucumber-preprocessor --save-dev

npm i @bahmutov/cypress-esbuild-preprocessor --save-dev

npm i @cypress/browserify-preprocessor --save-dev

npm i @faker-js/faker --save-dev

const { faker } = require('@faker-js/faker');

When('Visitor {string} tries to contact property regarding {string} by filling up all mandatory fields with valid data', (fullName, subject) => {
  cy.sendMessage(fullName, faker.internet.email(), faker.phone.number(), subject, faker.lorem.lines(5));
});

## THINGS TO DO FOR REPORT GENERATION

npm install cypress-mochawesome-reporter --save-dev

npm install multiple-cucumber-html-reporter --save-dev

> Download json-formatter

https://github.com/cucumber/json-formatter/releases/tag/v19.0.0

MacOS

Download cucumber-json-formatter-darwin-amd64 and rename it to cucumber-json-formatter
Move it to a directory that's on your PATH
Make it executable with chmod +x cucumber-json-formatter
Verify that you can run it: cucumber-json-formatter --help
At the last step, you may get a security warning from MacOS. If you do, open System Preferences. Go to Security Settings. You should see a question asking if you want to open it anyway. Say yes.

Windows

Download cucumber-json-formatter-windows-amd64 and rename it to cucumber-json-formatter.exe
Move it to a directory that's on your PATH
Verify that you can run it: cucumber-json-formatter --help

Linux

Download cucumber-json-formatter-linux-amd64 (or one of the other CPU variants check by dpkg --print-architecture in ubuntu) and rename it to cucumber-json-formatter
Move it to a directory that's on your PATH
Make it executable with chmod +x cucumber-json-formatter
Verify that you can run it: cucumber-json-formatter --help

> change in package.json add 

```
"cypress-cucumber-preprocessor": {
    "json": {
      "enabled": true,
      "output": "cypress/cucumberReports/results.json"
    },
  },

```

> change in cypress.config.js add

setupNodeEvents{
...
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  require('cypress-mochawesome-reporter/plugin')(on);
...
}

reporter: 'cypress-mochawesome-reporter',

inside defineConfig

> change in e2e.js

import 'cypress-mochawesome-reporter/register'

A simple Express Application
  App folder: myExpressApp
  Tutorial from: https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
  Recommended reading: https://nodejs.org/api/
  Recommended reading: http://expressjs.com/en/api.html
  1. Install Express globally
    1.1 Express> npm install -g express-generator
          Output
              npm WARN deprecated mkdirp@0.5.1: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x.
              (Note that the API surface has changed to use Promises in 1.x.)
              changed 10 packages, and audited 12 packages in 1s
              3 vulnerabilities (1 moderate, 2 critical)
              To address all issues (including breaking changes), run:
                npm audit fix --force
              Run `npm audit` for details.
    1.2 Express> express --version
          Output
              4.16.1
    1.3 Express> npm audit
          Output
              npm ERR! code ENOLOCK
              npm ERR! audit This command requires an existing lockfile.
              npm ERR! audit Try creating one first with: npm i --package-lock-only
              npm ERR! audit Original error: loadVirtual requires existing shrinkwrap file

              npm ERR! A complete log of this run can be found in:
              npm ERR!     C:\Users\41792\AppData\Local\npm-cache\_logs\2022-08-16T18_42_39_902Z-debug-0.log
  2. Create App myExpressApp
    - The --view pug parameters tell the generator to use the pug template engine.
      The command creates some folders and some files listed in Terminal Output
    - The generated Express application has a package.json file
      which includes a start script to run node ./bin/www
    2.1 myExpressApp> express myExpressApp --view pug
          Output
              create : myExpressApp\
              create : myExpressApp\public\
              create : myExpressApp\public\javascripts\
              create : myExpressApp\public\images\
              create : myExpressApp\public\stylesheets\
              create : myExpressApp\public\stylesheets\style.css
              create : myExpressApp\routes\
              create : myExpressApp\routes\index.js
              create : myExpressApp\routes\users.js
              create : myExpressApp\views\
              create : myExpressApp\views\error.pug
              create : myExpressApp\views\index.pug
              create : myExpressApp\views\layout.pug
              create : myExpressApp\app.js
              create : myExpressApp\package.json
              create : myExpressApp\bin\
              create : myExpressApp\bin\www
              change directory:
                > cd myExpressApp
              install dependencies:
                > npm install
              run the app:
                > SET DEBUG=myexpressapp:* & npm start
  3. Install dependencies
    - This adds the folder node_modules
    3.1 myExpressApp> npm install
          Output
              npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained
              and not recommended for usage due to the number of issues.
              Because of the V8 engine whims, feature detection in old core-js versions could cause
              a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues.
              Please, upgrade your dependencies to the actual version of core-js.
              added 124 packages, and audited 125 packages in 16s
              8 packages are looking for funding
                run `npm fund` for details
              4 vulnerabilities (2 low, 2 high)
              To address issues that do not require attention, run:
                npm audit fix
              To address all issues, run:
                npm audit fix --force
              Run `npm audit` for details.
    3.2 Nodejs_Apps/myExpressApp> npm audit fix --force
          Output
              npm WARN using --force Recommended protections disabled.
              npm WARN audit Updating pug to 2.0.4, which is outside your stated dependency range.
              removed 3 packages, changed 8 packages, and audited 122 packages in 8s
              8 packages are looking for funding
                run `npm fund` for details
              # npm audit report
              pug  <3.0.1
              Severity: high
              Remote code execution via the `pretty` option. - https://github.com/advisories/GHSA-p493-635q-r6gr
              fix available via `npm audit fix --force`
              Will install pug@3.0.2, which is a breaking change
              node_modules/pug
              1 high severity vulnerability
              To address all issues (including breaking changes), run:
                npm audit fix --force
    3.3 Nodejs_Apps/myExpressApp> npm audit fix --force
          Output
              npm WARN using --force Recommended protections disabled.
              npm WARN audit Updating pug to 3.0.2, which is a SemVer major change.
              added 6 packages, removed 30 packages, changed 19 packages, and audited 98 packages in 6s
              8 packages are looking for funding
                run `npm fund` for details
              found 0 vulnerabilities
  4. Start node.js server
    - The generated Express application has a package.json file
      which includes a start script to run 'node ./bin/www'
    - The Node.js web server will start and you can browse to http://localhost:3000 to see the running application.
    4.1 Nodejs_Apps/myExpressApps> npm start
          Output
              > myexpressapp@0.0.0 start
              > node ./bin/www
    4.2 Open Browser
      4.2.1 URL http://localhost:3000
          Output
              Express
              Welcome to Express
  5. Stop node.js server
      1. In VScode open Terminal and close the node terminal
      2. Close Browser tab
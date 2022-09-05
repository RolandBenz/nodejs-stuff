Git commit message
  Tutorial from: https://code.visualstudio.com/docs/nodejs/reactjs-tutorial and https://github.com/facebook/create-react-app and https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm

Remarks
  node_modules folder with this framework is over 400 MB!

A simple React application; App folder: 1-Vscode-tutorial
  - Tutorial from: https://code.visualstudio.com/docs/nodejs/reactjs-tutorial
  - Code from: https://github.com/facebook/create-react-app
  - We'll be using the create-react-app generator for this tutorial.
    To use the generator as well as run the React application server,
    you'll need Node.js JavaScript runtime and npm (Node.js package manager) installed.
  1. Create React App
    https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm
    Also works according to: https://github.com/facebook/create-react-app
    - myReactApp> npm init react-app my-react-app
    - myReactApp> yarn create react-app my-react-app
    1.1 Vscode-tutorial> npx create-react-app myReactApp
          Output ERROR
              Need to install the following packages:
                create-react-app@5.0.1
              Ok to proceed? (y) y
                  npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
                  Cannot create a project named "myReactApp" because of npm naming restrictions:
                    * name can no longer contain capital letters
                  Please choose a different project name.
    1.1 Vscode-tutorial> npx create-react-app my-react-app
          Output
              Creating a new React app in C:\Users\41792\Documents\5) More-Code\2_Apps_Nodejs\4_React\1-Vscode-tutorial\my-react-app.
              Installing packages. This might take a couple of minutes.
              Installing react, react-dom, and react-scripts with cra-template...
              added 1391 packages in 3m
              207 packages are looking for funding
                run `npm fund` for details
              Initialized a git repository.
              Installing template dependencies using npm...
              added 55 packages in 11s
              207 packages are looking for funding
                run `npm fund` for details
              Removing template package using npm...
              removed 1 package, and audited 1446 packages in 4s
              207 packages are looking for funding
                run `npm fund` for details
              6 high severity vulnerabilities
              To address all issues (including breaking changes), run:
                npm audit fix --force
              Run `npm audit` for details.
              Created git commit.
              Success! Created my-react-app at C:\Users\41792\Documents\5) More-Code\2_Apps_Nodejs\4_React\1-Vscode-tutorial\my-react-app
              Inside that directory, you can run several commands:
                npm start
                  Starts the development server.
                npm run build
                  Bundles the app into static files for production.
                npm test
                  Starts the test runner.
                npm run eject
                  Removes this tool and copies build dependencies, configuration files
                  and scripts into the app directory. If you do this, you can’t go back!
              We suggest that you begin by typing:
                cd my-react-app
                npm start
              Happy hacking!
  2. Run React App
    2.1 my-react-app> npm start
          Output
              > my-react-app@0.1.0 start
              > react-scripts start
              (node:20460) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
              (Use `node --trace-deprecation ...` to show where the warning was created)
              (node:20460) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
              Starting the development server...
              Compiled successfully!
              You can now view my-react-app in the browser.
                Local:            http://localhost:3000
                On Your Network:  http://172.17.96.1:3000
              Note that the development build is not optimized.
              To create a production build, use npm run build.
              webpack compiled successfully
  3. Browser opens with URL
    3.1 http://localhost:3000
  4. In VScode open Readme.md
    To read im Markdown Preview press
    4.1 Ctrl-Shift-V
  5. Open scr/index.js to see
      Syntax highlighting
      bracket matching
      Intellisense
      Methods parameter help
      Linting
  6. Peek App Definition: In scr/index.js put the cursor over App
    6.1 Right click and select Peek Definition.
        A Peek window will open showing the App definition from App.js.
  7. Let's update the sample application to "Hello World!"
    7.1 src/index.js
      7.1.1 Comment out
          /*
          import React from 'react';
          import ReactDOM from 'react-dom/client';
          import './index.css';
          import App from './App';
          import reportWebVitals from './reportWebVitals';
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>
          );
          // If you want to start measuring performance in your app, pass a function
          // to log results (for example: reportWebVitals(console.log))
          // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
          reportWebVitals();
          */
      7.1.2 Add
          import React from 'react';
          import ReactDOM from 'react-dom';
          import './index.css';
          import reportWebVitals from './reportWebVitals';
          var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
          ReactDOM.render(element, document.getElementById('root'));
          reportWebVitals();  
  8. Git
    .git was also downloaded from Github.
    - Every change in a file can be seen with the icon at the top right 'open changes'
    - At the left is the icon for the 'Source Control-pending changes' where you can commit the changes in file
  9. Debugging
    - To debug the client side React code, we'll use the built-in JavaScript debugger.
    - Note: This tutorial assumes you have the Edge browser installed. If you want to debug using Chrome,
            replace the launch type with chrome. There is also a debugger for the Firefox browser.
    9.1 Set a breakpoint
        In index.js at line with var element =
    9.2 Configure debugger
        This will create a launch.json file in a new .vscode folder in your project
        which includes a configuration to launch the website.
            ->In 'Run and Debug' select 'create a launch.json file link' and choose 'Choose Web App (Edge)'
                change the port of the url from 8080 to 3000
                chang "type": "pwa-msedge" to "type": "msedge"
    9.3 Ensure that your development server is running (npm start).
        Then press F5 or the green arrow to launch the debugger and open a new browser instance.
    9.4 The source code where the breakpoint is set runs on startup before the debugger was attached,
        so we won't hit the breakpoint until we refresh the web page.
        Refresh the page and you should hit your breakpoint.
    9.5 You can step through your source code (F10), inspect variables such as element,
        and see the call stack of the client side React application.
  10. Linting
    10.1 Install ESLint globally
            > npm install -g eslint
    10.2 Install the ESLint extension by going to the Extensions view and typing 'eslint'.
    10.3 Create an ESLint configuration file, .eslintrc.js.
      10.3.1 Ctrl-Shift-P: ESLint: Create ESLint configuration
            Error
      10.3.1 my-react-app> eslint --init
            Output
                You can also run this command directly using 'npm init @eslint/config'.
                √ How would you like to use ESLint? · problems
                √ What type of modules does your project use? · esm
                √ Which framework does your project use? · react
                √ Does your project use TypeScript? · No / Yes
                √ Where does your code run? · browser
                √ What format do you want your config file to be in? · JavaScript
                Local ESLint installation not found.
                The config that you've selected requires the following dependencies:
                eslint-plugin-react@latest eslint@latest
                √ Would you like to install them now? · No / Yes
                √ Which package manager do you want to use? · npm
                Installing eslint-plugin-react@latest, eslint@latest
                up to date, audited 1446 packages in 5s
                207 packages are looking for funding
                  run `npm fund` for details
                6 high severity vulnerabilities
                To address all issues (including breaking changes), run:
                  npm audit fix --force
                Run `npm audit` for details.
                A config file was generated, but the config file itself may not follow your linting rules.
                Successfully created .eslintrc.js file in C:\Users\41792\Documents\5) More-Code\Nodejs_Apps\myReactApp\my-react-app
    10.4 Add rules in .eslintrc.js, like:
      10.4.1 .eslintrc.js
                "rules": {
                    "no-extra-semi":"error"
                }
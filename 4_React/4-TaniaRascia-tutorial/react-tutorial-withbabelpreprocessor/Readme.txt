Tutorial
  https://www.taniarascia.com/getting-started-with-react/
  https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
  https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project

Folders:
  src: 
    - contains .js files with JSX
    - here is where the deloper writes the code
  project root: 
    - contains .js files generated from src with Babel Preprocessor
    - contains index file with css and react library
    - here is what the webserver sends to the browser
    - do not change these files, do changes in the src folder

Add JSX to a Project 
    Step 1: > npm init -y 
    Step 2: > npm install babel-cli@6 babel-preset-react-app@3
Run JSX Preprocessor 
    Step 3: > npx babel --watch src --out-dir . --presets react-app/prod
    - Don’t wait for it to finish — this command starts an automated watcher for JSX.
    - If you now create a file called src/like_button.js with this JSX starter code, 
      the watcher will create a preprocessed like_button.js with the plain JavaScript code 
      suitable for the browser. When you edit the source file with JSX, the transform will 
      re-run automatically.
    - Copy paste .js files into src folder. For all files in that src folder, step 3
      generates .js files in the project folder with additional code at the beginning.
Run Webserver to avoid Cross-Origin Request Blocked:
    Step 4: > python -m http.server
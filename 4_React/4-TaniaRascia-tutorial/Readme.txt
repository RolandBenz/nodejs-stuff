Git Message
  git commit -m "Tutorial from: https://www.taniarascia.com/getting-started-with-react/ and https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/ and https://www.w3schools.com/js/js_object_constructors.asp and https://docs.github.com/en/pages/quickstart and https://github.com/gitname/react-gh-pages#4-add-a-homepage-property-to-the-packagejson-file"

1. Tutorial (react-tutorial)
    https://www.taniarascia.com/getting-started-with-react/
    https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

Static HTML File
- The method used here of loading JavaScript libraries into a static HTML page and rendering the React
  and Babel on the fly is not very efficient, and is hard to maintain.

Create React App
- Fortunately, Facebook has created Create React App, an environment that comes pre-configured with 
  everything you need to build a React app. It will create a live development server, 
  use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, 
  and use ESLint to test and warn about mistakes in the code.
- downside: this creates over 400 MB of node_module libraries
    > npx create-react-app my-app-name
- Create React App is very good for getting started for beginners 
  as well as large-scale enterprise applications, but it's not perfect for every workflow. 
  You can also create your own Webpack setup for React.
- To set up create-react-app, run the following code in your terminal, 
  one directory up from where you want the project to live.
    > npx create-react-app react-tutorial
- Once that finishes installing, move to the newly created directory and start the project.
    > cd react-tutorial && npm start
- Once you run this command, a new window will popup with your new React app at 
    URL localhost:3000 
- Go ahead and delete all the files out of the /src directory, 
  and create your own boilerplate file without any bloat. Just keep index.css and index.js.

Compontents 
- As a wrap up, let's compare a simple component with a class component.
  - Simple Component
      const SimpleComponent = () => {
        return <div>Example</div>
      }
  - Class Component
      class ClassComponent extends Component {
        render() {
          return <div>Example</div>
        }
      }
  - Note that if the return is contained to one line, it does not need parentheses.

JavaScript Datatypes 
  - https://www.w3schools.com/js/js_object_constructors.asp
    https://stackoverflow.com/questions/21545687/javascript-vs-new-object-performance
    - let x1 = ""; Use string literals "" instead of new String().
    - let x2 = 0; Use number literals 50 instead of new Number().
    - let x3 = false; Use boolean literals true / false instead of new Boolean().
    - const x4 = {}; Use object literals {} instead of new Object().
    - const x5 = []; Use array literals [] instead of new Array().
    - const x6 = /()/ Use pattern literals /()/ instead of new RegExp().
    - const x7 = function(){}; Use function expressions () {} instead of new Function().
    - const x7 = () => {}

API 
  - another tutorial
    https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
  - App Api.js
    - You can switch between the app we created and this test file 
      by just changing the URL in index.js 
        import App from './Api';
    - Wikipedia API
      https://en.wikipedia.org/w/api.php
    - URL Endpoint
      https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*
    - fetch Data 
      https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    
Building and Deploying a React App
  - For production, we're going to want to have static files loading in - none of the source code. 
    We can do this by making a build and deploying it.
  - Now, if you just want to compile all the React code and 
    place it in the root of a directory somewhere, 
    all you need to do is run the following line:
      react-tutorial> npm run build
          Output 
            > react-tutorial@1.0.0 build
            > react-scripts build
            Creating an optimized production build...
            Compiled successfully.
            File sizes after gzip:
              47.02 kB  build\static\js\main.0da6e0c3.js
              3.05 kB   build\static\css\main.4b5987a3.css
            The project was built assuming it is hosted at /react-tutorial/.
            You can control this with the homepage field in your package.json.
            The build folder is ready to be deployed.
            Find out more about deployment here:
              https://cra.link/deployment
  - On localhost the app runs with a double click on the index.html
  - You can also globally install a server and use it to run the app which is in
    some-other-place>build
      some-other-place> npm install -g serve
      some-other-place> serve -s build

Deploying to Github User Pages 
  - We can also take it a step further, and have npm deploy for us. 
  - First, we're going to build to GitHub User Pages.
      https://docs.github.com/en/pages/quickstart
      - In the upper-right corner of any page, use the drop-down menu, and select New repository. 
        https://github.com/new
      - Enter username.github.io as the repository name. 
        - Repository Name: rolandbenz.github.io
        - Click Create Repository
            Output
              Quick setup — if you’ve done this kind of thing before
              ...or create a new repository on the command line
              echo "# rolandbenz.github.io" >> README.md
              git init
              git add README.md
              git commit -m "first commit"
              git branch -M main
              git remote add origin https://github.com/RolandBenz/rolandbenz.github.io.git
              git push -u origin main
              ...or push an existing repository from the command line
        - run the above output in 
            0_GitHubPages-remote> 
                echo "# rolandbenz.github.io" >> README.md
                git init
                git add README.md
                git commit -m "first commit"
                git branch -M main
                git remote add origin https://github.com/RolandBenz/rolandbenz.github.io.git
                git push -u origin main
      - Under your repository name, click Settings. 
        https://github.com/RolandBenz/rolandbenz.github.io
      - In the "Code and automation" section of the sidebar, click Pages.
      - Under "Build and deployment", under "Source", select Deploy from a branch.
        -> already selected 
      - Under "Build and deployment", under "Branch", 
        use the None or Branch drop-down menu and select a publishing source.
        -> already set gh-pages /root
  - Second, move you Code to _GitHubPages-remote
  - Third, we're going to add a homepage field to package.json, 
    that has the URL we want our app to live on.
      "homepage": "https://rolandbenz.github.io",
  - Fourth, add to package.json
      "scripts": {
        // ...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }
  - Fifth, In your project, you'll add gh-pages to the devDependencies.
      0_GitHubPages-remote> npm install --save-dev gh-pages
        Output 
          added 43 packages, and audited 44 packages in 8s
          5 packages are looking for funding
            run `npm fund` for details
          found 0 vulnerabilities
  - Finally, we'll deploy to gh-pages.
      0_GitHubPages-remote> npm run deploy
        Output  
         > my-app@0.1.0 predeploy
        > npm run build
        > my-app@0.1.0 build
        > react-scripts build
        Creating an optimized production build...
        Compiled successfully.
        File sizes after gzip:
          46.6 kB (-8 B)  build\static\js\main.0215976b.js
          1.78 kB         build\static\js\787.28cb0dcd.chunk.js
          541 B           build\static\css\main.073c9b0a.css
        The project was built assuming it is hosted at /.
        You can control this with the homepage field in your package.json.
        The build folder is ready to be deployed.
        You may serve it with a static server:
          npm install -g serve
          serve -s build
        Find out more about deployment here:
          https://cra.link/deployment
        > my-app@0.1.0 deploy
        > gh-pages -d build
        Published
  - Website Code: https://github.com/RolandBenz/rolandbenz.github.io/tree/gh-pages
  - Page: https://rolandbenz.github.io/ 

Deploying to Github Project Pages
  - Tutorial: 
    https://github.com/gitname/react-gh-pages#4-add-a-homepage-property-to-the-packagejson-file
  - 1. Create an empty repository on GitHub
      - For a project site, you can enter any name you want. 
      - For a user site, GitHub requires that the repository's name have the following format: 
        {username}.github.io (e.g. gitname.github.io)
      - I'll enter: react-gh-pages
      - Leave all checkboxes empty.
      - Submit the form.
          echo "# react-gh-pages" >> README.md
          git init
          git add README.md
          git commit -m "first commit"
          git branch -M main
          git remote add origin https://github.com/RolandBenz/react-gh-pages.git
          git push -u origin main
  - 2. Create a React app
      - 0_GitHubProjectPages-remote> npx create-react-app my-app
      - cd my-app
  - 3. Install the gh-pages npm package
      - my-app> npm install gh-pages --save-dev
  - 4. Add a homepage property to the package.json file
      - {
          "name": "my-app",
          "version": "0.1.0",
        + "homepage": "https://rolandbenz.github.io/react-gh-pages",
          "private": true,   
  - 5. Add deployment scripts to the package.json file
      - "scripts": {
        +   "predeploy": "npm run build",
        +   "deploy": "gh-pages -d build",
            "start": "react-scripts start",
            "build": "react-scripts build",
  - 6. Add a "remote" that points to the GitHub repository
      - That command tells Git where I want it to push things 
        whenever I —or the gh-pages npm package acting on my behalf — issue the 
        $ git push command from within this local Git repository.
      - my-app> git remote add origin https://github.com/RolandBenz/react-gh-pages.git
  - 7. Deploy the React app to GitHub Pages
      - That will cause the predeploy and deploy scripts defined in package.json to run.
      - Under the hood, the predeploy script will build a distributable version of the React app 
        and store it in a folder named build. Then, the deploy script will push the contents of 
        that folder to a new commit on the gh-pages branch of the GitHub repository, 
        creating that branch if it doesn't already exist.
      - my-app> npm run deploy
        or
      - my-app> npm run deploy -- -m "Some Message"
  - 8. (Optional) Store the React app's source code on GitHub
      - my-app> git status 
          Output
            On branch master
            Changes not staged for commit:
              (use "git add <file>..." to update what will be committed)
              (use "git restore <file>..." to discard changes in working directory)
                    modified:   package-lock.json
                    modified:   package.json
      - my-app> git add .
          Output
            warning: LF will be replaced by CRLF in package-lock.json.
            The file will have its original line endings in your working directory
            warning: LF will be replaced by CRLF in package.json.
            The file will have its original line endings in your working directory
      - my-app> git commit -m "Configure React app for deployment to GitHub Pages"
          Output
            [master d89ed40] Configure React app for deployment to GitHub Pages
            2 files changed, 334 insertions(+)
      - my-app> git push origin master
          Output
            Enumerating objects: 26, done.
            Counting objects: 100% (26/26), done.
            Delta compression using up to 8 threads
            Compressing objects: 100% (26/26), done.
            Writing objects: 100% (26/26), 305.50 KiB | 8.26 MiB/s, done.
            Total 26 (delta 3), reused 0 (delta 0), pack-reused 0
            remote: Resolving deltas: 100% (3/3), done.
            remote:
            remote: Create a pull request for 'master' on GitHub by visiting:
            remote:      https://github.com/RolandBenz/react-gh-pages/pull/new/master
            remote:
            To https://github.com/RolandBenz/react-gh-pages.git
            * [new branch]      master -> master
  - Website Code: https://github.com/RolandBenz/react-gh-pages/tree/gh-pages
  - Website: https://rolandbenz.github.io/react-gh-pages
  - React App Code: https://github.com/RolandBenz/react-gh-pages/tree/master
  9. Show and switch branches
    - my-app> git branch -a
        Output  
          * master
          remotes/origin/master
    - my-app> git checkout gh-pages
        Output  
          error: pathspec 'gh-pages' did not match any file(s) known to git
  10. Add a new branch with -b flag
    - my-app> git checkout -b my-new-branch


2. Tutorial (connect-to-api-tutorial)
    https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
    https://www.digitalocean.com/community/tutorials/introduction-to-the-dom
    https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

API Website
  https://ghibliapi.herokuapp.com/
  - This API was created to help developers learn how to interact with resources 
    using HTTP requests, which is perfect for us here. 
  - Since an API can be accessed by many different methods - 
    JavaScript, PHP, Ruby, Python and so on - 
    the documentation for most APIs doesn't tend to give specific instructions for how to connect.

Very simple web app with plain JavaScript
  - In this case, the web server is using HTTP requests to communicate 
    to a publicly available URL endpoint containing JSON data.
  - CRUD: the concept of a CRUD app, which stands for Create, Read, Update, Delete. 
  - Any programming language can be used to make a CRUD app with various methods. 
  - A web API uses HTTP requests that correspond to the CRUD verbs.
      Action 	HTTP Method 	Description
      Create 	POST 	        Creates a new resource
      Read 	  GET 	        Retrieves a resource
      Update 	PUT/PATCH 	  Updates an existing resource
      Delete 	DELETE 	      Deletes a resource
  - One API ENDPOINT: https://ghibliapi.herokuapp.com/films
    To get started, let's scroll to the films section. 
    On the right you'll see GET /films. It will show us the URL of our API endpoint, 
      https://ghibliapi.herokuapp.com/films. 
    Clicking on that link will display an array of objects in JSON.
  - In Javascript fetch data from API with XMLHttpRequest
      //Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest()
      //Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
        request.onload = function () {
          //Begin accessing JSON data here
        }
      //Send request
        request.send()
  - Alternatively, you can use the fetch API and async/await.
      function getData() {
        const response = await fetch('https://ghibliapi.herokuapp.com/films')
        const data = await response.json()
      }
  - Now we've received a response from our HTTP request, and we can work with it. 
    However, the response is in JSON, and we need to convert that JSON 
    in to JavaScript objects in order to work with it.
    We're going to use JSON.parse() to parse the response, and create a data variable 
    that contains all the JSON as an array of JavaScript objects. 
    // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      data.forEach(movie => {
        // Log each movie's title
        console.log(movie.title)
      })
  - DISPLAY DATA on website
      In order to display information on the front end of a site, we'll be working with the DOM, 
      which is actually an API itself that allows JavaScript to communicate with HTML.
      https://www.digitalocean.com/community/tutorials/introduction-to-the-dom

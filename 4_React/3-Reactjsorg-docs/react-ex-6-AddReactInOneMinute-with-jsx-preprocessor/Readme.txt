https://reactjs.org/docs/add-react-to-a-website.html

Add JSX to a Project
Adding JSX to a project doesn’t require complicated tools like a bundler or a development server. 
Essentially, adding JSX is a lot like adding a CSS preprocessor. 
The only requirement is to have Node.js installed on your computer.
Go to your project folder in the terminal, and paste these two commands:
(if it fails, here’s a fix: https://gist.github.com/gaearon/246f6380610e262f8a648e3e51cad40d)
    1. add package.json
    	1.1 react-ex-8-AddReactInOneMinute-jsx-preprocessor> npm init -y 
        Output
            Wrote to C:\Users\41792\Documents\5) More-Code\2_Apps_Nodejs\4_React\3-Reactjsorg-docs\
                     react-ex-8-AddReactInOneMinute-jsx-preprocessor\package.json:
            {
            "name": "react-ex-8-addreactinoneminute-jsx-preprocessor",
            "version": "1.0.0",
            "description": "https://reactjs.org/docs/add-react-to-a-website.html",
            "main": "react-ex-8-AddReactInOneMinute-jsx-preprocessor.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "keywords": [],
            "author": "",
            "license": "ISC"
            }
    2. Install babel. This creates 17MB node_modules folder.
			2.1 react-ex-8-AddReactInOneMinute-jsx-preprocessor> npm install babel-cli@6 babel-preset-react-app@3
        Output
            npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
            npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
            npm WARN deprecated chokidar@1.7.0: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
            npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
            npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
            npm WARN deprecated browserslist@2.11.3: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
            npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. 
            Please, upgrade your dependencies to the actual version of core-js.
            added 308 packages, and audited 309 packages in 22s
            3 packages are looking for funding
            run `npm fund` for details
            8 vulnerabilities (2 low, 6 high)
            Some issues need review, and may require choosing
            a different dependency.
            Run `npm audit` for details.

Tip
We’re using npm here only to install the JSX preprocessor; you won’t need it for anything else. 
Both React and the application code can stay as <script> tags with no changes.
Congratulations! You just added a production-ready JSX setup to your project.
Run JSX Preprocessor
		3. Create a folder called src and run this terminal command:
    	3.1 react-ex-8-AddReactInOneMinute-jsx-preprocessor> mkdir src
    4. Run Babel server for the src folder	
			4.1 react-ex-8-AddReactInOneMinute-jsx-preprocessor/src> npx babel --watch src --out-dir . --presets react-app/prod
						Don’t wait for it to finish — this command starts an automated watcher for JSX.
						If you now create a file called src/like_button.js with this JSX starter code, 
						the watcher will create a preprocessed like_button.js with the plain JavaScript 
						code suitable for the browser. 
						When you edit the source file with JSX, the transform will re-run automatically.
						As a bonus, this also lets you use modern JavaScript syntax features like classes 
						without worrying about breaking older browsers. 
						The tool we just used is called Babel, and you can learn more about it from its documentation.
		5. Copy paste react-ex-8-AddReactInOneMinute-jsx-preprocessor.js file into src folder
				This generates a react-ex-8-AddReactInOneMinute-jsx-preprocessor.js in the project folder
				but with additional code at the beginning.
Show Image with Express Server
  App folder: ExpressShowImg
  Tutorial from: https://www.geeksforgeeks.org/how-to-fetch-images-from-node-js-server/
  Server Code from: https://www.geeksforgeeks.org/how-to-fetch-images-from-node-js-server/
  0. Store photos in:
      images/lights.jpg
      public/lights_p.jpg
      public/images/lights_pi.jpg
      static/lights_s.jpg
      static/images/lights_si.jpg
  1. Make html file index.html
    1.1 index.html
          <!DOCTYPE html>
          <html>
          <head>
              <title>Page Title</title>
          </head>
          <body>
              <h1>This is a Heading</h1>
              <p>This is a paragraph.</p>
          </body>
          </html>
  2.  Make a server file appServer2.js
    2.1 appServer2.js
          // Requiring module
          const express = require('express');
          // Creating express object
          const app = express();
          // Defining port number
          const PORT = 3000;
          // Function to serve all static files
          // app.use(path, callback) # mount callback at path
          // url with empty path or with any subpath delivers static files inside public directory.
          app.use(express.static('public'));
          // url with empty path or with any subpath delivers static files inside static directory.
          app.use(express.static('static'));
          // Also express.static() with option = express.static('images') can be used to serve static files.
          // url with path /images_ delivers static files anywhere inside images directory
          app.use('/images_', express.static('images'));
          // url with path /blabla/bla delivers static files anywhere inside images directory
          app.use('/blabla/bla', express.static('images'));
          // Server setup
          app.listen(PORT, () => {
            console.log(`Running server on PORT ${PORT}...`);
          })
  3. Install Express Module
    3.1 Nodejs_Apps\ExpressShowImg> npm install express
          Output
              added 57 packages, and audited 58 packages in 6s
              7 packages are looking for funding
                run `npm fund` for details
              found 0 vulnerabilities
  4. Run Servers in Node Terminal
    4.1 Nodejs_Apps\GettingStarted> node .\appServer2.js
  5. Request image in Browser
      URL naming:
          The most common subdomain is ‘www’ which a general symbol for any resource on the web.
          https://video.google.co.uk:80/videoplay?docid=-7234293487129834&hl=en#00h02m30s
          protocol://subdomain.domain.topleveldomain:port/path?query#fragment
      This app.use(express.static('public')) serves:
          http://localhost:3000/lights_p.jpg
          http://localhost:3000/images/lights_pi.jpg
          http://localhost:3000/index.html
      This app.use(express.static('static')) serves:
          http://localhost:3000/lights_s.jpg
          http://localhost:3000/images/lights_si.jpg
      This app.use('/images_', express.static('images')) serves:
          http://localhost:3000/images_/lights.jpg
      This app.use('/blabla/bla', express.static('images')) serves:
          http://localhost:3000/blabla/bla/lights.jpg

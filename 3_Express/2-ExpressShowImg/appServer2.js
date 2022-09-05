/*
https://www.geeksforgeeks.org/how-to-fetch-images-from-node-js-server/ 
Try out:
  Terminal:
    ExpressShowImg> node .\appServer2.js
  Browser:
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
*/

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
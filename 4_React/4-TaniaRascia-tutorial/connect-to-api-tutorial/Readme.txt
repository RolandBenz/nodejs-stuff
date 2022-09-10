Tutorial
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
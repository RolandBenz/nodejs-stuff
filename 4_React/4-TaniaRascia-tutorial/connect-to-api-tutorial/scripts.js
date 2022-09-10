/*
  Entry Point Element id=root
*/
const app = document.getElementById('root');
/*
  New Dom img element
*/
const logo = document.createElement('img');
logo.src = 'logo.png';
/*
  New Dom div element
*/
const container = document.createElement('div');
container.setAttribute('class', 'container');
/* 
  Append img and div elements to app
*/
app.appendChild(logo);
app.appendChild(container);
/*
  XMLHttpRequest() get request from website: https://ghibliapi.herokuapp.com/films
*/
let request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      //New Dom div element used as card
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      //New Dom h1 element for movie.title
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;
      //New Dom p element for movie.description
      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;
      //Append h1 and p elements to card
      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    /*
      - I'm only doing this as a joke for fun and demonstrative purposes, 
        do not actually use marquee in any sort of real application, or take me seriously here. 
      - marquee is depreciated: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee
    */
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request.send();
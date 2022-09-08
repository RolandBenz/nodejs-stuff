import React, { Component } from "react";

class App extends Component {
  state = {
    data: [],
  };

  /*
		- componentDidMount()
			A React lifecycle method. 
			Lifecycle is the order in which methods are called in React. 
			Mounting refers to an item being inserted into the DOM.
		- When we pull in API data, we want to use componentDidMount, 
			because we want to make sure the component has rendered 
			to the DOM before we bring in the data. 
			In the below snippet, you'll see how we bring in data from the Wikipedia API, 
			and display it on the page
		- about fetch
			https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  */
 	// Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1";

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }

  render() {
    /*
      - ES6 property shorthand to create a variable 'data that contains this.state
    */
    const { data } = this.state;
    /*
			- show data entries with index as list items 
			- return them inside an unordered list
    */
    const result = data.map((entry, index) => {
      console.log(entry);
      return <li key={index}>{entry}</li>;
    });
    return (
      <div className="container">
        <ul>{result}</ul>
      </div>
    );
  }
}

export default App;

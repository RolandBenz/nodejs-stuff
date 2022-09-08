import React, { Component } from "react";

/*
	- Our goal for this form will be to update the state of Form 
		every time a field is changed in the form, 
		and when we submit, all that data will pass to the App state, 
		which will then update the Table.
*/
class Form extends Component {
  /*
		- Class component Form gets a constructor with an initial state with empty properties 
		- Previously, it was necessary to include a constructor() on React class components, 
			but it's not required anymore.
	*/
	constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      job: "",
    };
    this.state = this.initialState;
  }
	/*
		- Function that handels onChange event every time a change is made to an input. 
		- The event will be passed through, 
			and we'll set the state of Form to have the name (key) and value of the inputs. 
	*/
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
	/*
		- Function that handels submit event of the button. 
		- It is the newer version on GitHub
	*/
  onFormSubmit = (event) => {
		/*
			- method preventDefault() prevents something, not clear what. 
		*/
    event.preventDefault();
		/*
			- pass this.state to handleSubmit method of App
				which submits this data and updates the parent state
			- set the state of Form to initial empty state
		*/
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
	/*
		- Function that handels submit event of the button. 
		- It is the older version of the website tutorial
	*/
	submitForm = () => {
		this.props.handleSubmit(this.state)
		this.setState(this.initialState)
	}

  render() {
		/*
      - ES6 property shorthand to create a variables 'name, job' that contains this.state
    */
    const { name, job } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label for="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
				{/*
					- button above: newer version on GitHub, here the function that handles the submit 
						is defined in the form label as onSubmit={this.onFormSubmit}
					- input below: older version in tutorial on website 
				*/}
        <button type="submit">Submit</button>
				<input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;

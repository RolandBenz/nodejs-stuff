var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React, { Component } from "react";

/*
	- Our goal for this form will be to update the state of Form 
		every time a field is changed in the form, 
		and when we submit, all that data will pass to the App state, 
		which will then update the Table.
*/
var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  /*
  - Class component Form gets a constructor with an initial state with empty properties 
  - Previously, it was necessary to include a constructor() on React class components, 
  	but it's not required anymore.
  */
  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.handleChange = function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;


      _this.setState(_defineProperty({}, name, value));
    };

    _this.onFormSubmit = function (event) {
      /*
      	- method preventDefault() prevents something, not clear what. 
      */
      event.preventDefault();
      /*
      	- pass this.state to handleSubmit method of App
      		which submits this data and updates the parent state
      	- set the state of Form to initial empty state
      */
      _this.props.handleSubmit(_this.state);
      _this.setState(_this.initialState);
    };

    _this.submitForm = function () {
      _this.props.handleSubmit(_this.state);
      _this.setState(_this.initialState);
    };

    _this.initialState = {
      name: "",
      job: ""
    };
    _this.state = _this.initialState;
    return _this;
  }
  /*
  	- Function that handels onChange event every time a change is made to an input. 
  	- The event will be passed through, 
  		and we'll set the state of Form to have the name (key) and value of the inputs. 
  */

  /*
  	- Function that handels submit event of the button. 
  	- It is the newer version on GitHub
  */

  /*
  	- Function that handels submit event of the button. 
  	- It is the older version of the website tutorial
  */


  _createClass(Form, [{
    key: "render",
    value: function render() {
      /*
          - ES6 property shorthand to create a variables 'name, job' that contains this.state
        */
      var _state = this.state,
          name = _state.name,
          job = _state.job;


      return React.createElement(
        "form",
        { onSubmit: this.onFormSubmit },
        React.createElement(
          "label",
          { "for": "name" },
          "Name"
        ),
        React.createElement("input", {
          type: "text",
          name: "name",
          id: "name",
          value: name,
          onChange: this.handleChange
        }),
        React.createElement(
          "label",
          { "for": "job" },
          "Job"
        ),
        React.createElement("input", {
          type: "text",
          name: "job",
          id: "job",
          value: job,
          onChange: this.handleChange
        }),
        React.createElement(
          "button",
          { type: "submit" },
          "Submit"
        ),
        React.createElement("br", null),
        React.createElement("input", { type: "button", value: "Submit", onClick: this.submitForm })
      );
    }
  }]);

  return Form;
}(React.Component);

export default Form;
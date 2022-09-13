var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  - We're loading the Component as a property of React, 
    so we no longer need to extend React.Component.
  - Most React apps have many small components, and everything loads into the main App component. 
    Components also often get their own file, e.g. Table.js, Form.js.
*/
//import React, { Component } from "react";
//import Table from "./Table";
//import Form from "./Form";
import Table from "./Table.js";
import Form from "./Form.js";

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      /* 
        - We can also add data to an array of objects, 
          as if we were bringing in a JSON-based API.
      */
      //characters: []
      characters: [{
        name: 'Charlie',
        job: 'Janitor'
      }, {
        name: 'Mac',
        job: 'Bouncer'
      }, {
        name: 'Dee',
        job: 'Aspring actress'
      }, {
        name: 'Dennis',
        job: 'Bartender'
      }]
    }, _this.removeCharacter = function (index) {
      /*
        - ES6 property shorthand to create a variable 'characters' that contains this.state
      */
      var characters = _this.state.characters;
      /*
        - You must use this.setState() to modify an array. 
          Simply applying a new value to this.state.property will not work. 
        - filter does not mutate but rather creates a new array, 
          and is a preferred method for modifying arrays in JavaScript. 
        - This particular method is testing an index vs. all the indices in the array, 
          and returning all but the one that is passed through.
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?retiredLocale=vi
      */

      _this.setState({
        characters: characters.filter(function (character, i) {
          return i !== index;
        })
      });
    }, _this.handleSubmit = function (character) {
      _this.setState({ characters: [].concat(_toConsumableArray(_this.state.characters), [character]) });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /*
  - Previously, it was necessary to include a constructor() on React class components, 
  	but it's not required anymore.
  */
  /* 
    - You can think of state as any data that should be saved and modified 
      without necessarily being added to a database - 
      for example, adding and removing items from a shopping cart before confirming your purchase.
    - state = {} is an Object object
    - The object will contain properties for everything you want to store in the state. 
      For us, it's characters.
    - https://www.w3schools.com/js/js_object_constructors.asp
      https://stackoverflow.com/questions/21545687/javascript-vs-new-object-performance
      - let x1 = ""; Use string literals "" instead of new String().
      - let x2 = 0; Use number literals 50 instead of new Number().
      - let x3 = false; Use boolean literals true / false instead of new Boolean().
      - const x4 = {}; Use object literals {} instead of new Object().
      - const x5 = []; Use array literals [] instead of new Array().
      - const x6 = /()/ Use pattern literals /()/ instead of new RegExp().
      - const x7 = function(){}; Use function expressions () {} instead of new Function().
  */

  /* 
    - Button event handler function which uses index to remove a row from this.state={characters:[]}
  */

  /* 
    - Form event handler function to add a row to this.state={characters:[]}
    - updates the state by taking the existing this.state.characters 
      and adding the new character parameter, using the ES6 spread operator.
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  */


  _createClass(App, [{
    key: "render",
    value: function render() {
      /*
        - ES6 property shorthand to create a variable 'characters' that contains this.state
      */
      var characters = this.state.characters;


      return (
        /*
        - Notice that we use className instead of class. 
        This is our first hint that the code being written here is JavaScript, 
        and not actually HTML.
          - It is JSX, which stands for JavaScript XML.
            With JSX, we can write what looks like HTML,
            and also we can create and use our own XML-like tags. 
          - Using JSX is not mandatory for writing React. 
          - Under the hood, it's running createElement, which takes the tag, 
            object containing the properties, and children of the component 
            and renders the same information.
          - Properties and methods in JSX are camelCase - onclick will become onClick.
          - Self-closing tags must end in a slash - e.g. <img />
          - JavaScript expressions can also be embedded inside JSX using curly braces, 
            including variables, functions, and properties.
              const name = 'Tania'
              const heading = <h1>Hello, {name}</h1>
        */
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "h1",
            null,
            "React Tutorial"
          ),
          React.createElement(
            "p",
            null,
            "Add a character with a name and a job to the table."
          ),
          React.createElement(Table, {
            characterData: characters,
            removeCharacter: this.removeCharacter
          }),
          React.createElement(
            "h3",
            null,
            "Add New"
          ),
          React.createElement(Form, { handleSubmit: this.handleSubmit })
        )
      );
    }
  }]);

  return App;
}(React.Component);

export default App;
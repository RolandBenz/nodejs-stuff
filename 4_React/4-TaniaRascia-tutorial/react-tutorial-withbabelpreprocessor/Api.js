var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React, { Component } from "react";

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
      data: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: "componentDidMount",


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
    value: function componentDidMount() {
      var _this2 = this;

      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1";

      fetch(url).then(function (result) {
        return result.json();
      }).then(function (result) {
        _this2.setState({
          data: result
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      /*
        - ES6 property shorthand to create a variable 'data that contains this.state
      */
      var data = this.state.data;
      /*
      - show data entries with index as list items 
      - return them inside an unordered list
      */

      var result = data.map(function (entry, index) {
        console.log(entry);
        return React.createElement(
          "li",
          { key: index },
          entry
        );
      });
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "ul",
          null,
          result
        )
      );
    }
  }]);

  return App;
}(React.Component);

export default App;
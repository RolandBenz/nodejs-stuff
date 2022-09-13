//import React from "react";

var TableHeader = function TableHeader() {
  return React.createElement(
    "thead",
    null,
    React.createElement(
      "tr",
      null,
      React.createElement(
        "th",
        null,
        "Name"
      ),
      React.createElement(
        "th",
        null,
        "Job"
      ),
      React.createElement(
        "th",
        null,
        "Remove"
      )
    )
  );
};

var TableBody = function TableBody(props) {
  /* 
  - Rows gets the jsx for each row in characterData through map method
  	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  - Row contains name, job. Index is a map internal iterator variable.
  - You should always use keys when making lists in React, as they help identify each list item.
  */
  var rows = props.characterData.map(function (row, index) {
    return React.createElement(
      "tr",
      { key: index },
      React.createElement(
        "td",
        null,
        row.name
      ),
      React.createElement(
        "td",
        null,
        row.job
      ),
      React.createElement(
        "td",
        null,
        React.createElement(
          "button",
          { onClick: function onClick() {
              return props.removeCharacter(index);
            } },
          "Delete"
        )
      )
    );
  });

  return React.createElement(
    "tbody",
    null,
    rows
  );
};

/*
	- Since Table does not have its own state, 
	 	it is best practice to define Table as a simple component, not a class component.
*/
var Table = function Table(props) {
  /*
  - ES6 property shorthand to create the variables characterData, removeCharacters
  	that contains props.
  */
  var characterData = props.characterData,
      removeCharacter = props.removeCharacter;

  return React.createElement(
    "table",
    null,
    React.createElement(TableHeader, null),
    React.createElement(TableBody, {
      characterData: characterData,
      removeCharacter: removeCharacter
    })
  );
};

export default Table;
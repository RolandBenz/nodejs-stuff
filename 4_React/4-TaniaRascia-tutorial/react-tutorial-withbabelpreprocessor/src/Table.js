//import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  /* 
		- Rows gets the jsx for each row in characterData through map method
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
		- Row contains name, job. Index is a map internal iterator variable.
		- You should always use keys when making lists in React, as they help identify each list item.
	*/
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

/*
	- Since Table does not have its own state, 
	 	it is best practice to define Table as a simple component, not a class component.
*/
const Table = (props) => {
  /*
		- ES6 property shorthand to create the variables characterData, removeCharacters
			that contains props.
	*/ 	
  const { characterData, removeCharacter } = props;
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Table;

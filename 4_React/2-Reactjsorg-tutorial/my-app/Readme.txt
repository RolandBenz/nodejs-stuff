Git commit message
  Tutorial from: https://reactjs.org/tutorial/tutorial.html

Remarks
  node_modules folder with this framework is over 400 MB!


React Tutorial
  App folder: Reactjsorg-tutorial
  https://reactjs.org/tutorial/tutorial.html
  React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
  It lets you compose complex UIs from small and isolated pieces of code called “components”.
  1. Create React App
    1.1 Reactjsorg-tutorial> npx create-react-app my-app
  2. Delete all files in the src/ folder of the new project
  3. Add a file named index.css in the src/ folder with this CSS code.
    3.1 src/index.css
          body {
            font: 14px "Century Gothic", Futura, sans-serif;
            margin: 20px;
          }         
          ol, ul {
            padding-left: 30px;
          }
          .board-row:after {
            clear: both;
            content: "";
            display: table;
          }
          .status {
            margin-bottom: 10px;
          }
          .square {
            background: #fff;
            border: 1px solid #999;
            float: left;
            font-size: 24px;
            font-weight: bold;
            line-height: 34px;
            height: 34px;
            margin-right: -1px;
            margin-top: -1px;
            padding: 0;
            text-align: center;
            width: 34px;
          }
          .square:focus {
            outline: none;
          }
          .kbd-navigation .square:focus {
            background: #ddd;
          }
          .game {
            display: flex;
            flex-direction: row;
          }
          .game-info {
            margin-left: 20px;
          }
  4. Add a file named index.js in the src/ folder with this JS code.
    4.1 src/index.js
          class Square extends React.Component {
            render() {
              return (
                <button className="square">
                  {/* TODO */}
                </button>
              );
            }
          }
          class Board extends React.Component {
            renderSquare(i) {
              return <Square />;
            }
            render() {
              const status = 'Next player: X';
              return (
                <div>
                  <div className="status">{status}</div>
                  <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                  </div>
                  <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                  </div>
                  <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                  </div>
                </div>
              );
            }
          }
          class Game extends React.Component {
            render() {
              return (
                <div className="game">
                  <div className="game-board">
                    <Board />
                  </div>
                  <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                  </div>
                </div>
              );
            }
          }
          // ========================================
          const root = ReactDOM.createRoot(document.getElementById("root"));
          root.render(<Game />);
  5. Add these three lines to the top of index.js in the src/ folder:
    5.1 src/index.js
          import React from 'react';
          import ReactDOM from 'react-dom/client';
          import './index.css';
  6. Run App
    6.1 my-app> npm start
  7. Open in the Browser, you should see an empty tic-tac-toe field
    7.1 URL http://localhost:3000
  8. Go throught the tutorial. Finished code with comments:
    8.1 src/index.js
          import React from "react";
          import ReactDOM from "react-dom/client";
          import "./index.css";
          // Toggle: Comment / Uncomment: Alt-Shift-A
          // Installed: Prettier in VScode
          /*classes with just a return statement can be replaced with a function like square*/
          class Square_as_class extends React.Component {
            /*constructor to initialize the state, which is used to remember things*/
            /* constructor(props) {
                super(props);
                this.state = {
                  value: null,
                };
              } 
            */
            /*function*/
            render() {
              return (
                /*  <button className="square" onClick={() => console.log('click')}>
                        {this.props.value}
                    </button> 
                */
                /*  <button
                      className="square"
                      onClick={() => this.setState({value: 'X'})}
                    >
                      {this.state.value}
                    </button> 
                */
                <button className="square" onClick={() => this.props.onClick()}>
                  {this.props.value_}
                </button>
              );
            }
          }
          /*classes like Square_as_class with just a return statement can be replaced with a function*/
          function Square(props_) {
            return (
              <button className="square" onClick={props_.onClick__}>
                {props_.value__}
              </button>
            );
          }
          class Board extends React.Component {
            /*constructor to initialize the state, which is used to remember things*/
            /* constructor(props_) {
              super(props_);
                this.state = {
                squares: Array(9).fill(null),
                xIsNext: true,
              };
            } 
            */
            /*function*/
            /* handleClick_(i) {
              const squares = this.state.squares.slice();
              if (calculateWinner(squares) || squares[i]) {
                return;
              }
              //squares[i] = 'X';
              squares[i] = this.state.xIsNext ? "X" : "O";
              this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext,
              });
            } 
            */
            /*function*/
            renderSquare_(i) {
              //return <Square />;
              /*pass the property value with assiged input i to child component Square*/
              //return <Square value={i} />;
              //return <Square value={this.state.squares[i]} />;
              return (
                <Square
                  /* value_={this.state.squares[i]}
                  onClick={() => this.handleClick_(i)} 
                  */
                  /* value_={this.props_.squares[i]}
                  onClick={() => this.props_.onClick(i)} 
                  */
                  value__={this.props.squares_[i]}
                  onClick__={() => this.props.onClick_(i)}
                />
              );
            }
            /*function*/
            render() {
              //const status = 'Next player: X';
              //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
              /* const winner = calculateWinner(this.state.squares);
              let status;
              if (winner) {
                status = "Winner: " + winner;
              } else {
                status = "Next player: " + (this.state.xIsNext ? "X" : "O");
              } 
              */
              return (
                <div>
                  <div className="board-row">
                    {this.renderSquare_(0)}
                    {this.renderSquare_(1)}
                    {this.renderSquare_(2)}
                  </div>
                  <div className="board-row">
                    {this.renderSquare_(3)}
                    {this.renderSquare_(4)}
                    {this.renderSquare_(5)}
                  </div>
                  <div className="board-row">
                    {this.renderSquare_(6)}
                    {this.renderSquare_(7)}
                    {this.renderSquare_(8)}
                  </div>
                </div>
              );
            }
          }
          class Game extends React.Component {
            /*constructor to initialize the state, which is used to remember things*/
            constructor(props_) {
              super(props_);
              /*property state (magic name, do not change) with two key:value pairs,
              history as list of squares (Array) and xIsNext (boolean)*/
              this.state = {
                history: [{ squares: Array(9).fill(null) }],
                stepNumber: 0,
                xIsNext: true,
              };
            }
            /*function used for (sent to) the Board and eventually for (sent to) the Square(s)*/
            handleClick(i) {
              //const history = this.state.history;
              const history = this.state.history.slice(0, this.state.stepNumber + 1);
              const current = history[history.length - 1];
              /*slice makes a new copy, const squares immutable*/
              const squares = current.squares.slice();
              /*return if a winner or if squares not null*/
              if (calculateWinner(squares) || squares[i]) {
                return;
              }
              /*(this.state.xIsNext ? "X" : "O") meaning: if true then "X" else "O"*/
              squares[i] = this.state.xIsNext ? "X" : "O";
              /*method of React.Component, used to set the this.state property*/
              this.setState({
                /*history db as a list/array of squares, where squares is an Array.
                Unlike the array push() method you might be more familiar with,
                the concat() method doesn’t mutate the original array, so we prefer it.
                */
                history: history.concat([{ squares: squares }]),
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext,
              });
            }
            /*function, used for moves display buttons
            Used to update the state of stepNumber.
            We also set xIsNext to true if the number that we’re changing stepNumber to is even.
            Notice in jumpTo method, we haven’t updated history property of the state.
            That is because state updates are merged or in more simple words
            React will update only the properties mentioned in setState method leaving the remaining state as is.
            */
            jumpTo(step) {
              this.setState({ stepNumber: step, xIsNext: step % 2 === 0 });
            }

            /*function*/
            render() {
              /*https://www.freecodecamp.org/news/understanding-let-const-and-var-keywords/
              With ES6 (EcmaScript 2015), the beginning of the modern era in JavaScript,
              the language got two new keywords to help us declare variables. These are let and const.
              If you do not want a variable declared inside a { } block to be accessed outside of the block,
              you need to declare them using the let or const keywords.
              Variables declared outside of any functions and blocks are global and are said to have Global Scope.
              This means you can access them from any part of the current JavaScript program.
              var: The functional scope level
              let: The block scope level
              const: The block scope level
              */
              const history = this.state.history;
              //const current = history[history.length - 1];
              const current = history[this.state.stepNumber];
              /*used for the moves display and filled with html.
                a simpler map example:
                const numbers = [1, 2, 3];
                const doubled = numbers.map(x => x * 2); // [2, 4, 6]
              */
              const moves = history.map((step, move) => {
                /*description, step variable refers to the current history element value,
                and move refers to the current history element index.
                history is an array (step) of arrays (move), move gets values 0,1..,8 
                */
                const desc = move ? "Go to move #" + move : "Go to game start";
                return (
                  /*It’s strongly recommended that you assign proper keys whenever you build dynamic lists.
                  key is a special and reserved property in React (along with ref, a more advanced feature).
                  In the tic-tac-toe game’s history, each past move has a unique ID associated with it:
                  it’s the sequential number of the move. The moves are never re-ordered, deleted,
                  or inserted in the middle, so it’s safe to use the move index as a key.*/
                  <li key={move}>
                    {" "}
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>{" "}
                  </li>
                );
              });
              /*used for the status display*/
              const winner = calculateWinner(current.squares);
              let status;
              if (winner) {
                status = "Winner: " + winner;
              } else {
                /*(this.state.xIsNext ? "X" : "O") meaning: if true then "X" else "O"*/
                status = "Next player: " + (this.state.xIsNext ? "X" : "O");
              }
              return (
                <div className="game">
                  <div className="game-board">
                    {/* <Board /> */}
                    <Board
                      squares_={current.squares}
                      /*(i) => this.handleClick(i) is sam as: function(i) { this.handleClick(i);
                        meaning Board gets variable onClick which is a whole function
                      */
                      onClick_={(i) => this.handleClick(i)}
                    />
                  </div>
                  <div className="game-info">
                    <div>{/* status */}</div>
                    <div>{status}</div>
                    <ol>{/* TODO */}</ol>
                    <ol>{moves}</ol>
                  </div>
                </div>
              );
            }
          }
          // ========================================
          /*main*/
          const root = ReactDOM.createRoot(document.getElementById("root"));
          root.render(<Game />);
          /*helper function*/
          function calculateWinner(squares) {
            /*all possible winning lines, and their indexes*/
            const lines = [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [0, 3, 6],
              [1, 4, 7],
              [2, 5, 8],
              [0, 4, 8],
              [2, 4, 6],
            ];
            for (let i = 0; i < lines.length; i++) {
              const [a, b, c] = lines[i];
              /*if e.g. sqares[0] not null && squares[0] === squares[1] && squares[0] === squares[2] there is a winner, return winner  squares[0]
              https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
              To avoid type coercion, use the triple-equals operator
              The && and || operators use short-circuit logic, which means whether they will execute their second operand is dependent on the first.*/
              if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
              }
            }
            return null;
          }
          
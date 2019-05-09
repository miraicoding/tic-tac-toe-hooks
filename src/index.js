import React from 'react';
import ReactDOM from 'react-dom';

const Game = () => {
	return (
		<div>
			Game
		</div>
	);
};

/* The JSX `<div>Game</div>` compiles to:

React.createElement("div", null, "Game");

*/

ReactDOM.render(
	<Game />, // component to be rendered
	document.getElementById('root') // target DOM node
);

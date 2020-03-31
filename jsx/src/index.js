// Import React and ReactDom libraries

import React from 'react';
import ReactDom from 'react-dom';

// Create a react component
const App = () => {
	const buttonText = 'Click me !';
	const style = { backgroundColor: 'blue', color: 'white' };
	return (
		<div>
			<label className='label' htmlFor='name'>
				Enter Name:
			</label>
			<input id='name' type='text' />

			<button style={style}>{buttonText}</button>
		</div>
	);
};

// Take the react component and show it on the screen

ReactDom.render(<App />, document.querySelector('#root'));

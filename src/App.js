/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import './app.css';

export default () => {
	const [value, setValue] = useState('');

	const TRAIN = 'train';
	const BUS = 'bus';

	return (
		<div className='container'>
			<button className='container__button' onClick={() => setValue(TRAIN)}>
				🚆
			</button>
			<button className='container__button' onClick={() => setValue(BUS)}>
				🚌
			</button>

			{value === TRAIN ? (
				<div>
					<h3>Here you can display Train content</h3>
					<p>And show whatever content you like</p>
				</div>
			) : value === BUS ? (
				<div>
					<h3>Bus content</h3>
					<p>And the same here</p>
				</div>
			) : (
				<div>
					<h3>This is when no conditional is met</h3>
					<p>No content to show</p>
				</div>
			)}
		</div>
	);
};

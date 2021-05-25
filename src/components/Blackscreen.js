import React from 'react';
import { Link } from 'react-router-dom';
import './Blackscreen.scss';

const Blackscreen = () => {
	return (
		<Link exact to='/'>
			<div className='blackscreen'></div>
		</Link>
	);
};

export default Blackscreen;

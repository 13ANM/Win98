import React from 'react';
import { Link } from 'react-router-dom';
import './Bluescreen.scss';

const Bluescreen = () => {
	return (
		<Link exact to='/'>
			<div className='bluescreen'>
				<h2>Windows</h2>
				<p>
					A fatal exception OE has occured at 0028:C0034B23. The current
					application will be terminated.
				</p>
				<p>
					Press anywhere to go back <span>_</span>
				</p>
			</div>
		</Link>
	);
};

export default Bluescreen;

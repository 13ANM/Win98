import React from 'react';
import Bin from './Bin';
import Browser from './Browser';
import './Desktop.scss';
import Files from './Files';
import MyComputer from './MyComputer';
import Notepad from './Notepad';
import Sidebar from './Sidebar';
import Startbar from './Startbar';
import Minesweeper from './minesweeper/Minesweeper';
import Paint from './Paint';
import Console from './Console';

const Desktop = () => {
	return (
		<div className='desktop'>
			<Console />
			<Paint />
			<Minesweeper />
			<Browser />
			<MyComputer />
			<Notepad />
			<Bin />
			<Files />
			<Sidebar />
			<Startbar />
		</div>
	);
};

export default Desktop;

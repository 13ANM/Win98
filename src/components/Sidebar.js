import React, { useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import fileSearchIco from './icons/fileSearch.png';
import helpBookIco from './icons/helpBook.png';
import consoleIco from './icons/console.png';
import keyIco from './icons/key.png';
import turnOffIco from './icons/turnOff.png';
import displayIco from './icons/display.png';

const Sidebar = () => {
	const sidebarRef = useRef();
	const { start, useOnClickOutside } = useContext(AppContext);
	const [sidebarOpen, setSidebarOpen] = start;

	useOnClickOutside(sidebarRef, () => setSidebarOpen(false));

	return (
		<>
			{sidebarOpen && (
				<div className='sidebar' ref={sidebarRef}>
					<div className='sidebar__logo'>
						<p>
							Windows <span>98</span>
						</p>
					</div>
					<div className='sidebar__options'>
						<Link to='/404' className='sidebar__menuItem'>
							<img src={fileSearchIco} alt='ico' />
							<p>File search</p>
						</Link>
						<Link to='/404' className='sidebar__menuItem'>
							<img src={displayIco} alt='ico' />
							<p>Display</p>
						</Link>
						<Link to='/404' className='sidebar__menuItem'>
							<img src={helpBookIco} alt='ico' />
							<p>Help</p>
						</Link>
						<Link to='/404' className='sidebar__menuItem'>
							<img src={consoleIco} alt='ico' />
							<p>Console Prompt</p>
						</Link>
						<hr />
						<Link to='/off' className='sidebar__menuItem'>
							<img src={keyIco} alt='ico' />
							<p>Log off X...</p>
						</Link>
						<Link to='/off' className='sidebar__menuItem'>
							<img src={turnOffIco} alt='ico' />
							<p>Shut Down...</p>
						</Link>
					</div>
				</div>
			)}
		</>
	);
};

export default Sidebar;

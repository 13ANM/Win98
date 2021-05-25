import React, { useState, useContext, useRef } from 'react';
import './Console.scss';
import consoleIco from './icons/msdos.png';
import { useDrag } from 'react-use-gesture';
import { AppContext } from '../context/AppContext';

const Console = () => {
	const consoleRef = useRef();
	const { console, consoleMin, consoleFocus, useOnClickOutside } =
		useContext(AppContext);
	const [isConsoleOpen, setIsConsoleOpen] = console;
	const [isConsoleMinimized, setIsConsoleMinimized] = consoleMin;
	const [isConsoleFocused, setIsConsoleFocused] = consoleFocus;

	useOnClickOutside(consoleRef, () => setIsConsoleFocused(false));

	const [windowPos, setWindowPos] = useState({ x: 0, y: 0 });

	const bindWindowPos = useDrag((params) => {
		setWindowPos({
			x: params.offset[0],
			y: params.offset[1],
		});
	});
	return (
		<div
			className={`${isConsoleOpen ? 'console' : 'displayNone'} ${
				isConsoleMinimized ? 'displayNone' : 'console'
			} ${isConsoleFocused ? 'console consoleFocus' : 'console'}`}
			style={{ position: 'absolute', top: windowPos.y, left: windowPos.x }}
			ref={consoleRef}
			onClick={() => setIsConsoleFocused(true)}
		>
			<div {...bindWindowPos()} className='window__bar'>
				<img src={consoleIco} alt='ico' />
				<p>MS-DOS</p>
				<div className='window__barOptions'>
					<button
						className='minimize'
						onClick={() => setIsConsoleMinimized(true)}
					>
						-
					</button>
					<button
						style={{ cursor: 'not-allowed' }}
						className='maximize'
						disabled
					>
						❏
					</button>
					<button className='close' onClick={() => setIsConsoleOpen(false)}>
						X
					</button>
				</div>
			</div>
			<div className='console__main'>
				<div className='console__desc'>
					<p>Microsoft(R) Windows 98</p>
					<p>(C) Copyright Microsoft Corp 1981-1999.</p>
				</div>
				<div className='console__input'>
					<p>C:\WINDOWS\</p>
					<textarea type='text' placeholder='_' />
				</div>
			</div>
		</div>
	);
};

export default Console;

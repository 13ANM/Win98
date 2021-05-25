import React, { useState, useEffect, useContext, useRef } from 'react';
import './Startbar.scss';
import { AppContext } from '../context/AppContext';
import speaker from './icons/speaker.png';
import speakerMute from './icons/speakerMute.png';
import microsoft from './icons/microsoft.png';
import notepadIco from './icons/notepad.png';
import binIco from './icons/bin.png';
import computerIco from './icons/computer.png';
import ieIco from './icons/ie.png';
import minesweeperIco from './icons/minesweeper.png';
import paintIco from './icons/paint2.png';
import consoleIco from './icons/msdos.png';

const Startbar = () => {
	const startbarRef = useRef();

	const {
		start,
		notepad,
		notepadMin,
		notepadFocus,
		bin,
		binMin,
		binFocus,
		computer,
		computerMin,
		computerFocus,
		browser,
		browserMin,
		browserFocus,
		minesweeper,
		minesweeperMin,
		minesweeperFocus,
		paint,
		paintMin,
		paintFocus,
		console,
		consoleMin,
		consoleFocus,
	} = useContext(AppContext);

	const [startbarOpen, setStartbarOpen] = start;

	const [isNotepadOpen, setIsNotepadOpen] = notepad;
	const [isNotepadMinimized, setIsNotepadMinimized] = notepadMin;
	const [isNotepadFocused, setIsNotepadFocused] = notepadFocus;

	const [isBinOpen, setIsBinOpen] = bin;
	const [isBinMinimized, setIsBinMinimized] = binMin;
	const [isBinFocused, setIsBinFocused] = binFocus;

	const [isBrowserOpen, setIsBrowserOpen] = browser;
	const [isBrowserMinimized, setIsBrowserMinimized] = browserMin;
	const [isBrowserFocused, setIsBrowserFocused] = browserFocus;

	const [isComputerOpen, setIsComputerOpen] = computer;
	const [isComputerMinimized, setIsComputerMinimized] = computerMin;
	const [isComputerFocused, setIsComputerFocused] = computerFocus;

	const [isMinesweeperOpen, setIsMinesweeperOpen] = minesweeper;
	const [isMinesweeperMinimized, setIsMinesweeperMinimized] = minesweeperMin;
	const [isMinesweeperFocused, setIsMinesweeperFocused] = minesweeperFocus;

	const [isPaintOpen, setIsPaintOpen] = paint;
	const [isPaintMinimized, setIsPaintMinimized] = paintMin;
	const [isPaintFocused, setIsPaintFocused] = paintFocus;

	const [isConsoleOpen, setIsConsoleOpen] = console;
	const [isConsoleMinimized, setIsConsoleMinimized] = consoleMin;
	const [isConsoleFocused, setIsConsoleFocused] = consoleFocus;

	const [time, setTime] = useState(null);
	const [muted, setMuted] = useState(false);

	useEffect(() => {
		setInterval(() => {
			setTime(
				new Date().toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit',
				})
			);
		}, 1000);
	});

	const handleOpenNotepad = () => {
		setIsNotepadMinimized(!isNotepadMinimized);
		setIsNotepadFocused(true);
	};

	const handleOpenBin = () => {
		setIsBinMinimized(!isBinMinimized);
		setIsBinFocused(true);
	};

	const handleOpenComputer = () => {
		setIsComputerMinimized(!isComputerMinimized);
		setIsComputerFocused(true);
	};

	const handleOpenBrowser = () => {
		setIsBrowserMinimized(!isBrowserMinimized);
		setIsBrowserFocused(true);
	};

	const handleOpenMinesweeper = () => {
		setIsMinesweeperMinimized(!isMinesweeperMinimized);
		setIsMinesweeperFocused(true);
	};

	const handleOpenPaint = () => {
		setIsPaintMinimized(!isPaintMinimized);
		setIsPaintFocused(true);
	};
	const handleOpenConsole = () => {
		setIsConsoleMinimized(!isConsoleMinimized);
		setIsConsoleFocused(true);
	};

	return (
		<div className='startbar'>
			<button
				className={
					startbarOpen ? 'startbar__menu startbar__menuFocus' : 'startbar__menu'
				}
				onClick={() => setStartbarOpen(!startbarOpen)}
				ref={startbarRef}
			>
				<div className={startbarOpen && 'dotted'}>
					<img src={microsoft} alt='ico' />
					<p>Start</p>
				</div>
			</button>
			<div className='startbar__space'></div>
			<div className='startbar__tabs'>
				{isComputerOpen && (
					<button
						className={
							isComputerFocused && !isComputerMinimized ? 'tabMin' : 'tab'
						}
						onClick={handleOpenComputer}
					>
						<img src={computerIco} alt='ico' />
						<p>My Computer</p>
					</button>
				)}
				{isNotepadOpen && (
					<button
						className={
							isNotepadFocused && !isNotepadMinimized ? 'tabMin' : 'tab'
						}
						onClick={handleOpenNotepad}
					>
						<img src={notepadIco} alt='ico' />
						<p>Notepad</p>
					</button>
				)}
				{isPaintOpen && (
					<button
						className={isPaintFocused && !isPaintMinimized ? 'tabMin' : 'tab'}
						onClick={handleOpenPaint}
					>
						<img src={paintIco} alt='ico' />
						<p>Paint</p>
					</button>
				)}
				{isBrowserOpen && (
					<button
						className={
							isBrowserFocused && !isBrowserMinimized ? 'tabMin' : 'tab'
						}
						onClick={handleOpenBrowser}
					>
						<img src={ieIco} alt='ico' />
						<p>Internet Explorer</p>
					</button>
				)}
				{isMinesweeperOpen && (
					<button
						className={
							isMinesweeperFocused && !isMinesweeperMinimized ? 'tabMin' : 'tab'
						}
						onClick={handleOpenMinesweeper}
					>
						<img src={minesweeperIco} alt='ico' />
						<p>Minesweeper</p>
					</button>
				)}
				{isConsoleOpen && (
					<button
						className={
							isConsoleFocused && !isConsoleMinimized ? 'tabMin' : 'tab'
						}
						onClick={handleOpenConsole}
					>
						<img src={consoleIco} alt='ico' />
						<p>Console</p>
					</button>
				)}
				{isBinOpen && (
					<button
						className={isBinFocused && !isBinMinimized ? 'tabMin' : 'tab'}
						onClick={handleOpenBin}
					>
						<img src={binIco} alt='ico' />
						<p>Recycle Bin</p>
					</button>
				)}
			</div>
			<div className='startbar__time'>
				<img
					onClick={() => setMuted(!muted)}
					className='startbar__speaker'
					src={muted ? speaker : speakerMute}
					alt='ico'
				/>
				<div className='startbar__timeSpace'></div>
				<p>{time}</p>
			</div>
		</div>
	);
};

export default Startbar;

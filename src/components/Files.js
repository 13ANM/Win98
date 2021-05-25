import React, { useState, useContext } from 'react';
import './Files.scss';
import { useDrag } from 'react-use-gesture';
import computerIco from './icons/computer-2.png';
import paintIco from './icons/paint.png';
import notepadIco from './icons/notepad.png';
import binIco from './icons/bin.png';
import ieIco from './icons/ie.png';
import minesweeperIco from './icons/minesweeper.png';
import consoleIco from './icons/msdos.png';
import { AppContext } from '../context/AppContext';

const Files = () => {
	const {
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

	const [isComputerOpen, setIsComputerOpen] = computer;
	const [isComputerMinimized, setIsComputerMinimized] = computerMin;
	const [isComputerFocused, setIsComputerFocused] = computerFocus;

	const [isNotepadOpen, setIsNotepadOpen] = notepad;
	const [isNotepadMinimized, setIsNotepadMinimized] = notepadMin;
	const [isNotepadFocused, setIsNotepadFocused] = notepadFocus;

	const [isBrowserOpen, setIsBrowserOpen] = browser;
	const [isBrowserMinimized, setIsBrowserMinimized] = browserMin;
	const [isBrowserFocused, setIsBrowserFocused] = browserFocus;

	const [isMinesweeperOpen, setIsMinesweeperOpen] = minesweeper;
	const [isMinesweeperMinimized, setIsMinesweeperMinimized] = minesweeperMin;
	const [isMinesweeperFocused, setIsMinesweeperFocused] = minesweeperFocus;

	const [isBinOpen, setIsBinOpen] = bin;
	const [isBinMinimized, setIsBinMinimized] = binMin;
	const [isBinFocused, setIsBinFocused] = binFocus;

	const [isPaintOpen, setIsPaintOpen] = paint;
	const [isPaintMinimized, setIsPaintMinimized] = paintMin;
	const [isPaintFocused, setIsPaintFocused] = paintFocus;

	const [isConsoleOpen, setIsConsoleOpen] = console;
	const [isConsoleMinimized, setIsConsoleMinimized] = consoleMin;
	const [isConsoleFocused, setIsConsoleFocused] = consoleFocus;

	const [computerPos, setComputerPos] = useState({ x: 0, y: 0 });
	const [notepadPos, setNotepadPos] = useState({ x: 0, y: 0 });
	const [paintPos, setPaintPos] = useState({ x: 0, y: 0 });
	const [browserPos, setBrowserPos] = useState({ x: 0, y: 0 });
	const [minesweeperPos, setMinesweeperPos] = useState({ x: 0, y: 0 });
	const [consolePos, setConsolePos] = useState({ x: 0, y: 0 });

	const bindComputerPos = useDrag((params) => {
		setComputerPos({
			x: params.offset[0],
			y: params.offset[1],
		});
	});
	const bindNotepadPos = useDrag((params) => {
		setNotepadPos({
			x: params.offset[0],
			y: params.offset[1],
		});
	});
	const bindPaintPos = useDrag((params) => {
		setPaintPos({
			x: params.offset[0],
			y: params.offset[1],
		});
	});
	const bindBrowserPos = useDrag((params) => {
		setBrowserPos({
			x: params.offset[0],
			y: params.offset[1],
		});
	});
	const bindMinesweeperPos = useDrag((params) => {
		setMinesweeperPos({
			x: params.offset[0],
			y: params.offset[1],
		});
	});
	const bindConsolePos = useDrag((params) => {
		setConsolePos({
			x: params.offset[0],
			y: params.offset[1],
		});
	});

	const handleOpenComputer = () => {
		setIsComputerMinimized(false);
		setIsComputerOpen(true);
		setIsComputerFocused(true);
	};

	const handleOpenBin = () => {
		setIsBinMinimized(false);
		setIsBinOpen(true);
		setIsBinFocused(true);
	};

	const handleOpenBrowser = () => {
		setIsBrowserMinimized(false);
		setIsBrowserOpen(true);
		setIsBrowserFocused(true);
	};

	const handleOpenNotepad = () => {
		setIsNotepadMinimized(false);
		setIsNotepadOpen(true);
		setIsNotepadFocused(true);
	};

	const handleOpenMinesweeper = () => {
		setIsMinesweeperMinimized(false);
		setIsMinesweeperOpen(true);
		setIsMinesweeperFocused(true);
	};

	const handleOpenPaint = () => {
		setIsPaintMinimized(false);
		setIsPaintOpen(true);
		setIsPaintFocused(true);
	};

	const handleOpenConsole = () => {
		setIsConsoleMinimized(false);
		setIsConsoleOpen(true);
		setIsConsoleFocused(true);
	};

	return (
		<div className='files'>
			<div className='div'>
				<button
					style={{
						position: 'relative',
						top: computerPos.y,
						left: computerPos.x,
					}}
					onDoubleClick={handleOpenComputer}
					className='file'
				>
					<img
						draggable='false'
						{...bindComputerPos()}
						src={computerIco}
						alt='file'
					/>
					<p>My Computer</p>
				</button>
				<button
					style={{
						position: 'relative',
						top: notepadPos.y,
						left: notepadPos.x,
					}}
					onDoubleClick={handleOpenNotepad}
					className='file'
				>
					<img
						draggable='false'
						{...bindNotepadPos()}
						src={notepadIco}
						alt='file'
					/>
					<p>Notepad</p>
				</button>
				<button
					style={{
						position: 'relative',
						top: paintPos.y,
						left: paintPos.x,
					}}
					onDoubleClick={handleOpenPaint}
					className='file'
				>
					<img
						draggable='false'
						{...bindPaintPos()}
						src={paintIco}
						alt='file'
					/>
					<p>Paint</p>
				</button>
				<button
					style={{
						position: 'relative',
						top: browserPos.y,
						left: browserPos.x,
					}}
					onDoubleClick={handleOpenBrowser}
					className='file'
				>
					<img draggable='false' {...bindBrowserPos()} src={ieIco} alt='file' />
					<p>Internet Explorer</p>
				</button>
				<button
					style={{
						position: 'relative',
						top: minesweeperPos.y,
						left: minesweeperPos.x,
					}}
					onDoubleClick={handleOpenMinesweeper}
					className='file'
				>
					<img
						draggable='false'
						{...bindMinesweeperPos()}
						src={minesweeperIco}
						alt='file'
					/>
					<p>Minesweeper</p>
				</button>
				<button
					style={{
						position: 'relative',
						top: consolePos.y,
						left: consolePos.x,
					}}
					onDoubleClick={handleOpenConsole}
					className='file'
				>
					<img
						draggable='false'
						{...bindConsolePos()}
						src={consoleIco}
						alt='file'
					/>
					<p>MS-DOS Prompt</p>
				</button>
			</div>
			<button onDoubleClick={handleOpenBin} className='file binPos'>
				<img draggable='false' src={binIco} alt='file' />
				<p>Recycle Bin</p>
			</button>
		</div>
	);
};

export default Files;

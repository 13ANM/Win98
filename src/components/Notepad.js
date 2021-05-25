import React, { useContext, useState, useRef } from 'react';
import './Notepad.scss';
import notepadIco from './icons/notepad.png';
import { useDrag } from 'react-use-gesture';
import { AppContext } from '../context/AppContext';

const Notepad = () => {
	const notepadRef = useRef();
	const { notepad, notepadMin, notepadFocus, useOnClickOutside } =
		useContext(AppContext);
	const [isNotepadOpen, setIsNotepadOpen] = notepad;
	const [isNotepadMinimized, setIsNotepadMinimized] = notepadMin;
	const [isNotepadMaximized, setIsNotepadMaximized] = useState(false);
	const [isNotepadFocused, setIsNotepadFocused] = notepadFocus;

	useOnClickOutside(notepadRef, () => setIsNotepadFocused(false));

	const [windowPos, setWindowPos] = useState({ x: 0, y: 0 });

	const bindWindowPos = useDrag((params) => {
		setWindowPos({
			x: params.offset[0],
			y: params.offset[1],
		});
	});

	const handleMaximize = () => {
		setIsNotepadMaximized(!isNotepadMaximized);
		setWindowPos({ x: 0, y: 0 });
	};

	return (
		<div
			className={`${isNotepadMinimized ? 'displayNone' : 'notepad'} ${
				isNotepadMaximized ? 'notepad max' : 'notepad'
			} ${isNotepadOpen ? 'notepad' : 'displayNone'} ${
				isNotepadFocused ? 'notepadFocus notepad' : 'notepad'
			}`}
			style={{ position: 'absolute', top: windowPos.y, left: windowPos.x }}
			ref={notepadRef}
			onClick={() => setIsNotepadFocused(true)}
		>
			<div
				{...bindWindowPos()}
				onDoubleClick={handleMaximize}
				className='window__bar'
			>
				<img src={notepadIco} alt='ico' />
				<p>Notepad</p>
				<div className='window__barOptions'>
					<button
						className='minimize'
						onClick={() => setIsNotepadMinimized(true)}
					>
						-
					</button>
					<button className='maximize' onClick={handleMaximize}>
						{isNotepadMaximized ? '❒' : '❏'}
					</button>
					<button className='close' onClick={() => setIsNotepadOpen(false)}>
						X
					</button>
				</div>
			</div>
			<div className='notepad__options'>
				<button>
					<span>F</span>ile
				</button>
				<button>
					<span>E</span>dit
				</button>
				<button>
					<span>S</span>earch
				</button>
				<button>
					<span>H</span>elp
				</button>
			</div>
			<div className='notepad__input'>
				<textarea
					onClick={() => setIsNotepadFocused(true)}
					spellCheck='false'
					type='text'
				/>
			</div>
		</div>
	);
};

export default Notepad;

import React, { useState, useContext, useRef } from 'react';
import './Bin.scss';
import binIco from './icons/bin.png';
import clearBin from './icons/clearBin.png';
import msnIco from './icons/msn.png';
import solitaireIco from './icons/solitaire.png';
import minesweeperIco from './icons/minesweeper.png';
import { useDrag } from 'react-use-gesture';
import { AppContext } from '../context/AppContext';

const Bin = () => {
	const binRef = useRef();
	const { bin, binMin, binFocus, useOnClickOutside } = useContext(AppContext);
	const [isBinOpen, setIsBinOpen] = bin;
	const [isBinMinimized, setIsBinMinimized] = binMin;
	const [isBinFocused, setIsBinFocused] = binFocus;
	const [isBinCleared, setIsBinCleared] = useState(false);

	useOnClickOutside(binRef, () => setIsBinFocused(false));

	const [windowPos, setWindowPos] = useState({ x: 0, y: 0 });

	const bindWindowPos = useDrag((params) => {
		setWindowPos({
			x: params.offset[0],
			y: params.offset[1],
		});
	});

	return (
		<div
			className={`${isBinOpen ? 'bin' : 'displayNone'} ${
				isBinMinimized ? 'displayNone' : 'bin'
			} ${isBinFocused ? 'bin binFocus' : 'bin'}`}
			style={{ position: 'absolute', top: windowPos.y, left: windowPos.x }}
			ref={binRef}
			onClick={() => setIsBinFocused(true)}
		>
			<div {...bindWindowPos()} className='window__bar'>
				<img src={binIco} alt='ico' />
				<p>Recycle Bin</p>
				<div className='window__barOptions'>
					<button className='minimize' onClick={() => setIsBinMinimized(true)}>
						-
					</button>
					<button
						style={{ cursor: 'not-allowed' }}
						className='maximize'
						disabled
					>
						❏
					</button>
					<button className='close' onClick={() => setIsBinOpen(false)}>
						X
					</button>
				</div>
			</div>
			<div className='bin__location'>
				<input disabled type='text' placeholder='C:/desktop/recycle-bin/' />
			</div>
			<div className='bin__options'>
				<button onClick={() => setIsBinCleared(true)}>
					<img src={clearBin} alt='ico' />
					<p>CLEAR BIN</p>
				</button>
			</div>
			<div className={isBinCleared ? 'bin__files clear' : 'bin__files'}>
				<button className='file'>
					<img src={msnIco} alt='file' />
					<p>MSN</p>
				</button>
				<button className='file'>
					<img src={solitaireIco} alt='file' />
					<p>Solitaire</p>
				</button>
				<button className='file'>
					<img src={minesweeperIco} alt='file' />
					<p>Minesweeper</p>
				</button>
			</div>
		</div>
	);
};

export default Bin;

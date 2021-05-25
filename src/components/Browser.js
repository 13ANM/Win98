import React, { useState, useContext, useRef } from 'react';
import './Browser.scss';
import { Link } from 'react-router-dom';
import ieIco from './icons/ie.png';
import siteImg from './site.png';
import { useDrag } from 'react-use-gesture';
import { AppContext } from '../context/AppContext';

const Browser = () => {
	const browserRef = useRef();
	const { browser, browserMin, browserFocus, useOnClickOutside } =
		useContext(AppContext);
	const [isBrowserOpen, setIsBrowserOpen] = browser;
	const [isBrowserMinimized, setIsBrowserMinimized] = browserMin;
	const [isBrowserFocused, setIsBrowserFocused] = browserFocus;

	useOnClickOutside(browserRef, () => setIsBrowserFocused(false));

	const [windowPos, setWindowPos] = useState({ x: 0, y: 0 });

	const bindWindowPos = useDrag((params) => {
		setWindowPos({
			x: params.offset[0],
			y: params.offset[1],
		});
	});

	return (
		<div
			className={`${isBrowserOpen ? 'browser' : 'displayNone'} ${
				isBrowserMinimized ? 'displayNone' : 'browser'
			} ${isBrowserFocused ? 'browser browserFocus' : 'browser'}`}
			style={{ position: 'absolute', top: windowPos.y, left: windowPos.x }}
			ref={browserRef}
			onClick={() => setIsBrowserFocused(true)}
		>
			<div {...bindWindowPos()} className='window__bar'>
				<img src={ieIco} alt='ico' />
				<p>Internet Explorer</p>
				<div className='window__barOptions'>
					<button
						className='minimize'
						onClick={() => setIsBrowserMinimized(true)}
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
					<button className='close' onClick={() => setIsBrowserOpen(false)}>
						X
					</button>
				</div>
			</div>
			<div className='browser__location'>
				<input
					disabled
					type='text'
					placeholder='https://www.andreimocanu.me/'
				/>
			</div>
			<a
				href='https://www.andreimocanu.me'
				target='_blank'
				rel='noreferrer'
				className='browser__content'
			>
				<img src={siteImg} alt='site' />
			</a>
		</div>
	);
};

export default Browser;

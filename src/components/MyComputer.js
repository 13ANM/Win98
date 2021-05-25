import React, { useState, useContext, useRef } from 'react';
import './MyComputer.scss';
import { useDrag } from 'react-use-gesture';
import { AppContext } from '../context/AppContext';
import computerIco from './icons/computer.png';
import { myComputerFiles } from '../static/myComputerFiles';

const MyComputer = () => {
	const computerRef = useRef();
	const { computer, computerMin, computerFocus, useOnClickOutside } =
		useContext(AppContext);
	const [isComputerOpen, setIsComputerOpen] = computer;
	const [isComputerMinimized, setIsComputerMinimized] = computerMin;
	const [isComputerFocused, setIsComputerFocused] = computerFocus;

	useOnClickOutside(computerRef, () => setIsComputerFocused(false));

	const [windowPos, setWindowPos] = useState({ x: 0, y: 0 });

	const bindWindowPos = useDrag((params) => {
		setWindowPos({
			x: params.offset[0],
			y: params.offset[1],
		});
	});

	return (
		<div
			className={`${isComputerOpen ? 'myComputer' : 'displayNone'} ${
				isComputerMinimized ? 'displayNone' : 'myComputer'
			} ${isComputerFocused ? 'myComputer myComputerFocus' : 'myComputer'}`}
			style={{ position: 'fixed', top: windowPos.y, left: windowPos.x }}
			ref={computerRef}
			onClick={() => setIsComputerFocused(true)}
		>
			<div {...bindWindowPos()} className='window__bar'>
				<img src={computerIco} alt='ico' />
				<p>My Computer</p>
				<div className='window__barOptions'>
					<button
						className='minimize'
						onClick={() => setIsComputerMinimized(true)}
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
					<button className='close' onClick={() => setIsComputerOpen(false)}>
						X
					</button>
				</div>
			</div>

			<div className='myComputer__options'>
				<button>
					<span>F</span>ile
				</button>
				<button>
					<span>E</span>dit
				</button>
				<button>
					<span>V</span>iew
				</button>
				<button>
					<span>G</span>o
				</button>
				<button>
					<span>F</span>avorites
				</button>
				<button>
					<span>H</span>elp
				</button>
			</div>

			<div className='myComputer__location'>
				<input disabled type='text' placeholder='/my-computer/' />
			</div>
			<div className='myComputer__files'>
				{myComputerFiles.map((file, index) => {
					const { ico, name } = file;
					return (
						<button key={index} className='file'>
							<img src={ico} alt='ico' />
							<p>{name}</p>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default MyComputer;

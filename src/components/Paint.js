import React, { useEffect, useRef, useState, useContext } from 'react';
import './Paint.scss';
import paintIco from './icons/paint2.png';
import { useDrag } from 'react-use-gesture';
import { AppContext } from '../context/AppContext';

const Paint = () => {
	const paintRef = useRef();
	const { paint, paintMin, paintFocus, useOnClickOutside } =
		useContext(AppContext);
	const [isPaintOpen, setIsPaintOpen] = paint;
	const [isPaintMinimized, setIsPaintMinimized] = paintMin;
	const [isPaintFocused, setIsPaintFocused] = paintFocus;

	useOnClickOutside(paintRef, () => setIsPaintFocused(false));

	const [windowPos, setWindowPos] = useState({ x: 0, y: 0 });

	const bindWindowPos = useDrag((params) => {
		setWindowPos({
			x: params.offset[0],
			y: params.offset[1],
		});
	});

	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = window.innerWidth * 2;
		canvas.height = window.innerHeight * 2;
		canvas.style.width = `${window.innerWidth}px`;
		canvas.style.height = `${window.innerHeight}px`;

		const context = canvas.getContext('2d');
		context.scale(2, 2);
		context.lineCap = 'round';
		context.strokeStyle = 'black';
		context.lineWidth = 5;
		contextRef.current = context;
	}, []);

	const startDrawing = ({ nativeEvent }) => {
		const { offsetX, offsetY } = nativeEvent;
		contextRef.current.beginPath();
		contextRef.current.moveTo(offsetX, offsetY);
		setIsDrawing(true);
	};

	const finishDrawing = () => {
		contextRef.current.closePath();
		setIsDrawing(false);
	};

	const draw = ({ nativeEvent }) => {
		if (!isDrawing) {
			return;
		}
		const { offsetX, offsetY } = nativeEvent;
		contextRef.current.lineTo(offsetX, offsetY);
		contextRef.current.stroke();
	};

	return (
		<div
			className={`${isPaintOpen ? 'paint' : 'displayNone'} ${
				isPaintMinimized ? 'displayNone' : 'paint'
			} ${isPaintFocused ? 'paint paintFocus' : 'paint'}`}
			style={{ position: 'absolute', top: windowPos.y, left: windowPos.x }}
			ref={paintRef}
			onClick={() => setIsPaintFocused(true)}
		>
			<div {...bindWindowPos()} className='window__bar'>
				<img src={paintIco} alt='ico' />
				<p>Paint</p>
				<div className='window__barOptions'>
					<button
						className='minimize'
						onClick={() => setIsPaintMinimized(true)}
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
					<button className='close' onClick={() => setIsPaintOpen(false)}>
						X
					</button>
				</div>
			</div>
			<div className='paint__canvas'>
				<canvas
					onMouseDown={startDrawing}
					onMouseUp={finishDrawing}
					onMouseMove={draw}
					ref={canvasRef}
				></canvas>
			</div>
		</div>
	);
};

export default Paint;

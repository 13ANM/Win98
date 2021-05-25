import React, { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [startbarOpen, setStartbarOpen] = useState(false);

	const [isNotepadOpen, setIsNotepadOpen] = useState(false);
	const [isNotepadMinimized, setIsNotepadMinimized] = useState(false);
	const [isNotepadFocused, setIsNotepadFocused] = useState(true);

	const [isBinOpen, setIsBinOpen] = useState(false);
	const [isBinMinimized, setIsBinMinimized] = useState(false);
	const [isBinFocused, setIsBinFocused] = useState(true);

	const [isBrowserOpen, setIsBrowserOpen] = useState(false);
	const [isBrowserMinimized, setIsBrowserMinimized] = useState(false);
	const [isBrowserFocused, setIsBrowserFocused] = useState(true);

	const [isComputerOpen, setIsComputerOpen] = useState(false);
	const [isComputerMinimized, setIsComputerMinimized] = useState(false);
	const [isComputerFocused, setIsComputerFocused] = useState(true);

	const [isMinesweeperOpen, setIsMinesweeperOpen] = useState(false);
	const [isMinesweeperMinimized, setIsMinesweeperMinimized] = useState(false);
	const [isMinesweeperFocused, setIsMinesweeperFocused] = useState(true);

	const [isPaintOpen, setIsPaintOpen] = useState(false);
	const [isPaintMinimized, setIsPaintMinimized] = useState(false);
	const [isPaintFocused, setIsPaintFocused] = useState(true);

	const [isConsoleOpen, setIsConsoleOpen] = useState(false);
	const [isConsoleMinimized, setIsConsoleMinimized] = useState(false);
	const [isConsoleFocused, setIsConsoleFocused] = useState(true);

	const useOnClickOutside = (ref, handler) => {
		useEffect(() => {
			const listener = (event) => {
				if (!ref.current || ref.current.contains(event.target)) {
					return;
				}
				handler(event);
			};
			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);
			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		}, [ref, handler]);
	};

	return (
		<AppContext.Provider
			value={{
				start: [startbarOpen, setStartbarOpen],
				notepad: [isNotepadOpen, setIsNotepadOpen],
				notepadMin: [isNotepadMinimized, setIsNotepadMinimized],
				notepadFocus: [isNotepadFocused, setIsNotepadFocused],
				bin: [isBinOpen, setIsBinOpen],
				binMin: [isBinMinimized, setIsBinMinimized],
				binFocus: [isBinFocused, setIsBinFocused],
				computer: [isComputerOpen, setIsComputerOpen],
				computerMin: [isComputerMinimized, setIsComputerMinimized],
				computerFocus: [isComputerFocused, setIsComputerFocused],
				browser: [isBrowserOpen, setIsBrowserOpen],
				browserMin: [isBrowserMinimized, setIsBrowserMinimized],
				browserFocus: [isBrowserFocused, setIsBrowserFocused],
				minesweeper: [isMinesweeperOpen, setIsMinesweeperOpen],
				minesweeperMin: [isMinesweeperMinimized, setIsMinesweeperMinimized],
				minesweeperFocus: [isMinesweeperFocused, setIsMinesweeperFocused],
				paint: [isPaintOpen, setIsPaintOpen],
				paintMin: [isPaintMinimized, setIsPaintMinimized],
				paintFocus: [isPaintFocused, setIsPaintFocused],
				console: [isConsoleOpen, setIsConsoleOpen],
				consoleMin: [isConsoleMinimized, setIsConsoleMinimized],
				consoleFocus: [isConsoleFocused, setIsConsoleFocused],
				useOnClickOutside,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorStyled = styled(motion.div)`
	position: fixed;
	inset: 0;
	z-index: 999;
	pointer-events: none;
`;

const OuterCircleStyled = styled(motion.div)`
	width: 20px;
	height: 20px;
	border: 1px solid #fff;
	border-radius: 50%;
`;

const InnerCircleStyled = styled(motion.div)`
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background-color: yellow;
`;

type CursorType =
	| 'default'
	| 'hover-button'
	| 'hover-link-out'
	| 'hover-link-in';

const Cursor = () => {
	const [cursorPosition, setCursorPosition] = useState({ x: 200, y: 200 });
	const [cursorType, setCursurType] = useState<CursorType>('hover-button');

	const handleMouseMove = (event: MouseEvent) => {
		const element = event.target;

		if (element instanceof HTMLElement) {
			switch (element.nodeName) {
				case 'BUTTON':
				case 'A':
					setCursurType('hover-button');
					break;
				default:
					setCursurType('default');
					break;
			}
		}

		setCursorPosition({ x: event.clientX, y: event.clientY });
	};

	const outerCircleVariants = {
		default: {
			x: cursorPosition.x - 10,
			y: cursorPosition.y - 10,
		},
		'hover-button': {
			x: cursorPosition.x - 25,
			y: cursorPosition.y - 25,
			width: '50px',
			height: '50px',
		},
	};

	const innerCircleVariants = {
		default: {
			x: cursorPosition.x - 2.5,
			y: cursorPosition.y - 25,
		},
		'hover-button': {
			x: cursorPosition.x - 4,
			y: cursorPosition.y - 55,
			opacity: 0,
		},
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<CursorStyled>
			<OuterCircleStyled
				variants={outerCircleVariants}
				animate={cursorType}
				transition={{
					duration: 0.03,
				}}

				// animate={{
				// 	x: cursorPosition.x - 10,
				// 	y: cursorPosition.y - 10,
				// 	// fill: 'forwards',
				// 	width: '50px',
				// 	height: '50px',
				// }}
			></OuterCircleStyled>
			<InnerCircleStyled
				variants={innerCircleVariants}
				animate={cursorType}
				transition={{
					duration: 0.15,
				}}
			/>
		</CursorStyled>
	);
};

export default Cursor;

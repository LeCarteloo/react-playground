import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const CircleStyled = styled(motion.div)`
	position: absolute;
	width: 0;
	height: 0;
	inset: 0;
	background-color: blue;
	border-radius: 50%;
	transition-property: width, height;
	transition-duration: 500ms;
	transition-timing-function: ease-in-out;
	transform: translate(-50%, -50%);
	z-index: -1;
`;

const ButtonStyled = styled.button`
	padding: 1rem;
	width: 200px;
	border: none;
	background-color: transparent;
	position: relative;
	border-radius: 50vw;
	overflow: hidden;
	isolation: isolate;
	cursor: pointer;
	outline: none;

	:hover,
	:focus-within {
		> ${CircleStyled} {
			width: 500px;
			height: 500px;
		}
	}
`;

const OutlineStyled = styled.div`
	position: absolute;
	inset: 0;
	border: 1px solid #fff;
	border-radius: 50vw;
	width: calc(100% - 2px);
	height: calc(100% - 2px);
	pointer-events: none;
	z-index: -2;
`;

interface MousePosition {
	x: number;
	y: number;
}

const SecondButton = () => {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: 0,
		y: 0,
	});

	const handleMouseMove = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		if (!(e.target instanceof HTMLButtonElement)) {
			return;
		}

		setMousePosition({
			x: e.pageX - e.target.offsetLeft,
			y: e.pageY - e.target.offsetTop,
		});
	};

	return (
		<ButtonStyled onMouseMove={handleMouseMove}>
			<CircleStyled
				animate={{
					top: `${mousePosition.y}px`,
					left: `${mousePosition.x}px`,
				}}
				transition={{ duration: 0 }}
			/>
			<OutlineStyled />
			START A PROJECT
		</ButtonStyled>
	);
};

export default SecondButton;

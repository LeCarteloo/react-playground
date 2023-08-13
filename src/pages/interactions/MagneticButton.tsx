import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const MagneticButtonStyled = styled(motion.button)`
	width: 150px;
	height: 150px;
	border: none;
	background-color: transparent;
	display: grid;
	place-items: center;

	> div {
		background-color: red;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
`;

const transitionConfig = {
	type: 'spring',
	stiffness: 150,
	damping: 15,
	mass: 0.1,
};

const MagneticButton = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
		const { clientX, clientY } = e;
		const { width, height, left, top } =
			e.currentTarget.getBoundingClientRect();

		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);
		setPosition({ x: middleX, y: middleY });
	};

	const handleMouseLeave = () => {
		setPosition({ x: 0, y: 0 });
	};

	const { x, y } = position;

	return (
		<MagneticButtonStyled
			style={{ position: 'relative' }}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			animate={{ x, y }}
			transition={transitionConfig}
		>
			<div>TestTest</div>
		</MagneticButtonStyled>
	);
};

export default MagneticButton;

import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ArrowButtonStyled = styled(motion.button)`
	position: relative;
	width: 50px;
	height: 50px;
	background-color: #000;
	border: none;
	border-radius: 50%;
	overflow: hidden;
	cursor: pointer;
`;

const ArrowWrapperStyled = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	justify-content: center;
	align-items: center;
`;

const ArrowStyled = styled(BsArrowRight)`
	color: #fff;
	font-size: 25px;
`;

const ArrowButton = () => {
	const [isHovering, setIsHovering] = useState(false);

	console.log(isHovering);

	return (
		<ArrowButtonStyled
			onHoverStart={() => setIsHovering(true)}
			onHoverEnd={() => setIsHovering(false)}
			onFocus={() => setIsHovering(!isHovering)}
		>
			<ArrowWrapperStyled
				key={'first'}
				initial={false}
				animate={{
					left: isHovering ? '50%' : '-100%',
				}}
			>
				<ArrowStyled />
			</ArrowWrapperStyled>
			<ArrowWrapperStyled
				key={'second'}
				initial={false}
				animate={{
					left: isHovering ? '150%' : '50%',
				}}
			>
				<ArrowStyled />
			</ArrowWrapperStyled>
		</ArrowButtonStyled>
	);
};

export default ArrowButton;

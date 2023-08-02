import styled from 'styled-components';
import Image from '../../assets/image.jpg';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

const ScrollWrapper = styled.div`
	height: 500vh;
`;

const CardStyled = styled.div`
	width: 200px;
	height: 300px;
	background-color: red;
	overflow: hidden;
`;

const ImageStyled = styled(motion.img)`
	width: 140%;
	height: 140%;
	object-fit: cover;
	transform: translateY(-15%);
`;

const ScrollShowcase = () => {
	const { scrollY } = useScroll();
	const [scrollPos, setScrollPos] = useState(0);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setScrollPos(latest);
	});

	console.log(scrollPos);

	return (
		<ScrollWrapper>
			<h1>Scroll showcase</h1>
			<CardStyled>
				<ImageStyled
					src={Image}
					alt="Test"
					animate={{
						transform: `translateY(calc(-15% - ${(scrollPos / 20) % 50}px))`,
					}}
				/>
			</CardStyled>
			<br />
			<CardStyled>
				<ImageStyled
					src={Image}
					alt="Test"
					animate={{
						objectPosition: `-${(scrollPos / 20) % 50}px 50%`,
					}}
				/>
			</CardStyled>
		</ScrollWrapper>
	);
};

export default ScrollShowcase;

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface TransitionColumnProps {
	left: string;
	width: string;
}

const TransitionColumnStyled = styled(motion.div)<TransitionColumnProps>`
	position: absolute;
	top: 0;
	${({ left }) =>
		left &&
		css`
			left: ${left};
		`}

	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}
	height: 100vh;
	background-color: white;
	transform: translateY(-50px);
`;

const RectangleTransition = () => {
	const { pathname } = useLocation();

	// Just testing overflow
	useEffect(() => {
		document.body.style.overflowY = 'hidden';
	}, [pathname]);

	return (
		<div style={{ height: '200vh' }}>
			<AnimatePresence mode="wait">
				{[...Array(5)].map((_, index) => (
					<TransitionColumnStyled
						onAnimationComplete={() => {
							if (index === 4) {
								document.body.style.overflowY = 'auto';
							}
						}}
						key={pathname + index}
						width={`${100 / 5}%`}
						left={`${index * (100 / 5)}%`}
						initial={{
							transform: 'translateY(0)',
							display: 'block',
							overflowY: 'hidden',
						}}
						animate={{
							transform: 'translateY(100vh)',
							display: 'block',
							transitionEnd: {
								display: 'none',
							},
						}}
						exit={{
							transform: 'translateY(0)',
							display: 'block',
						}}
						transition={{
							duration: 0.4,
							delay: 0.2 * index,
						}}
					/>
				))}
			</AnimatePresence>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Link to="/">Go to home</Link>
							<Link to="test-route">Change route</Link>
						</>
					}
				/>
				<Route
					path="test-route"
					element={
						<>
							<Link to="/">Go to home</Link>
							<Link to="/rectangle-transition">Go back</Link>
						</>
					}
				/>
			</Routes>
		</div>
	);
};

export default RectangleTransition;

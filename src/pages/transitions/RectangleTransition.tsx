import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface TransitionColumnProps {
	left: string;
}

const TransitionColumnStyled = styled(motion.div)<TransitionColumnProps>`
	position: absolute;
	top: 0;
	${({ left }) =>
		left &&
		css`
			left: ${left};
		`}

	width: 20%;
	height: 100vh;
	background-color: white;
	transform: translateY(-50px);
`;

const RectangleTransition = () => {
	const [columnNumber, setColumnNumber] = useState(5);
	const { pathname } = useLocation();

	return (
		<>
			<input
				type="number"
				onChange={(e) => setColumnNumber(e.target.valueAsNumber)}
			/>
			<AnimatePresence mode="wait">
				{[...Array(columnNumber)].map((_, index) => (
					<TransitionColumnStyled
						key={pathname + index}
						left={`${index * (100 / columnNumber)}%`}
						initial={{ transform: 'translateY(0)' }}
						animate={{ transform: 'translateY(100vh)' }}
						exit={{ transform: 'translateY(0)' }}
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
		</>
	);
};

export default RectangleTransition;

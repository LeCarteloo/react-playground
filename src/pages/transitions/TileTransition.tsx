import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface TileStyledProps {
	top?: string;
}

const TileStyled = styled(motion.div)<TileStyledProps>`
	position: absolute;
	left: 0;
	${({ top }) =>
		top &&
		css`
			top: ${top};
		`}
	width: 100%;
	height: 10%;
	background-color: #fff;
`;

const TileTransition = () => {
	const { pathname } = useLocation();

	return (
		<div>
			<AnimatePresence mode="wait">
				{[...Array(10)].map((_, index) => {
					return (
						<TileStyled
							key={pathname + index}
							top={`${(index * 10).toString()}%`}
							initial={{
								transform: 'translateX(0)',
							}}
							animate={{
								transform: `${
									index % 2 === 0 ? 'translateX(-100vw)' : 'translateX(100vw)'
								}`,
							}}
							exit={{
								transform: 'translateX(0)',
							}}
							transition={{
								duration: 0.4,
								ease: 'easeIn',
								delay: 0.3,
							}}
						/>
					);
				})}
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
							<Link to="/tile-transition">Go back</Link>
						</>
					}
				/>
			</Routes>
		</div>
	);
};

export default TileTransition;

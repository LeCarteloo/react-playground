import { AnimatePresence, motion } from 'framer-motion';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const TransitionWrapperStyled = styled(motion.div)`
	padding: 2em;
	position: absolute;
	inset: 0;
	background-color: #fff;
`;

const ClipPathTransition = () => {
	const { pathname } = useLocation();

	return (
		<AnimatePresence mode="wait">
			<TransitionWrapperStyled
				key={pathname}
				initial={{ clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' }}
				animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
				exit={{ clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' }}
				transition={{ duration: 0.3, ease: 'easeIn' }}
			>
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
								<Link to="/clip-path-transition">Go back</Link>
							</>
						}
					/>
				</Routes>
			</TransitionWrapperStyled>
		</AnimatePresence>
	);
};

export default ClipPathTransition;

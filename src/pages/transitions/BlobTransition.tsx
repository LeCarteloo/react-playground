import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BlobStyled = styled(motion.div)`
	position: absolute;
	top: 50%;
	right: -300%;
	transform: translate(0, -50%);
	width: 300%;
	height: 300%;
	background-color: blue;
	border-radius: 50%;
`;

const BlobTransition = () => {
	const [transitionType, setTransitionType] = useState(1);
	const { pathname } = useLocation();

	useEffect(() => {
		document.body.style.overflowY = 'hidden';
		return () => {
			document.body.style.overflowY = 'visible';
		};
	}, []);

	const ellipseVariants = {
		start: {
			d: 'M1946 973C1946 1510.37 1510.37 1907 973 1907C435.627 1907 0 1510.37 0 973C0 435.627 435.627 0 973 0C1510.37 0 1946 435.627 1946 973Z',
			y: '100%',
		},
		end: {
			d: 'M2079 562.354C2079 1192.15 1568.38 55 938.5 55C308.619 55 -202 1192.15 -202 562.354C-202 -67.4461 308.619 -578 938.5 -578C1568.38 -578 2079 -67.4461 2079 562.354Z',
			y: '-80%',
		},
	};

	const renderTransition = () => {
		switch (transitionType) {
			case 0:
				return (
					<BlobStyled
						key={pathname}
						onAnimationStart={() => (document.body.style.overflowY = 'hidden')}
						onAnimationEnd={() => (document.body.style.overflowY = 'visible')}
						initial={{ right: '-300%' }}
						animate={{
							right: '200%',
							display: 'block',
							transitionEnd: {
								display: 'none',
							},
						}}
						transition={{
							duration: 2,
							ease: 'easeInOut',
						}}
					/>
				);
			case 1:
				return (
					<motion.svg
						key={pathname + transitionType}
						viewBox="0 0 1920 1080"
						style={{
							position: 'absolute',
							inset: 0,
							width: '100%',
							height: '100%',
						}}
						xmlns="http://www.w3.org/2000/svg"
						initial={{
							opacity: 1,
						}}
						animate={{
							display: 'block',
							opacity: 1,
							transitionEnd: {
								display: 'none',
							},
						}}
						transition={{ duration: 1.5, ease: easeInOut }}
					>
						<motion.path
							initial="start"
							animate="end"
							variants={ellipseVariants}
							transition={{ duration: 1.5, ease: easeInOut }}
							fill="blue"
						/>
					</motion.svg>
				);
				break;
		}
	};

	return (
		<div>
			<button onClick={() => setTransitionType(0)}>First type</button>
			<button onClick={() => setTransitionType(1)}>Second type</button>
			<AnimatePresence mode="wait">{renderTransition()}</AnimatePresence>
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
							<Link to="/blob-transition">Go back</Link>
						</>
					}
				/>
			</Routes>
		</div>
	);
};

export default BlobTransition;

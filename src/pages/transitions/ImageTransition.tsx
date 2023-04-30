import styled from 'styled-components';
import Image from '../../assets/image.jpg';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

const WrapperStyled = styled.div`
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const ImageStyled = styled(motion.img)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: calc(50% + 4em);
	height: calc(300px + 4em);
	object-fit: cover;
`;

const ImageTransition = () => {
	const location = useLocation();

	return (
		<div>
			<h1>Seamless image transition</h1>
			<Link to="/">Go back</Link>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route
						path=""
						element={
							<WrapperStyled>
								<Link to="example">
									<ImageStyled
										src={Image}
										alt="Sample Image"
										exit={{
											width: [
												'calc(50% + 4em)',
												'calc(20% + 4em)',
												'calc(100% + 4em)',
											],
											height: [
												'calc(300px + 4em)',
												'calc(300px + 4em)',
												'calc(300px + 8em)',
											],
										}}
										transition={{
											duration: 2,
										}}
									/>
								</Link>
							</WrapperStyled>
						}
					/>
					<Route
						path="example"
						element={
							<WrapperStyled style={{ position: 'relative' }}>
								<Link to="/seamless-image-transition">
									<motion.h1
										style={{
											position: 'absolute',
											zIndex: 2,
											top: '50%',
											left: '50%',
											transform: 'translate(-50%, -50%)',
											color: '#fff',
										}}
										initial={{
											opacity: 0,
										}}
										animate={{
											opacity: 1,
										}}
										transition={{ duration: 1 }}
									>
										TEST IMAGE TITLE
									</motion.h1>
									<ImageStyled
										style={{
											width: 'calc(100% + 4em)',
											height: 'calc(300px + 8em)',
										}}
										src={Image}
										alt="Sample Image"
									/>
								</Link>
							</WrapperStyled>
						}
					/>
				</Routes>
			</AnimatePresence>
		</div>
	);
};

export default ImageTransition;

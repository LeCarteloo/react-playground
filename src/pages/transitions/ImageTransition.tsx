import styled from 'styled-components';
import Image from '../../assets/image.jpg';
import { motion } from 'framer-motion';
import { Link, Route, Routes } from 'react-router-dom';

const WrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ImageStyled = styled(motion.img)`
	width: 500px;
	object-fit: cover;
`;

const ImageTransition = () => {
	return (
		<div>
			<h1>ImageTransition</h1>
			<Routes>
				<Route
					path=""
					element={
						<WrapperStyled>
							<Link to="example">
								<ImageStyled src={Image} alt="Sample Image" />
							</Link>
						</WrapperStyled>
					}
				/>
				<Route
					path="example"
					element={
						<WrapperStyled>
							<motion.h2
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: 1,
								}}
								transition={{
									duration: 0.2,
									delay: 0.4,
								}}
							>
								Name of the Model
							</motion.h2>
							<motion.p
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: 1,
								}}
								transition={{
									duration: 0.2,
									delay: 0.5,
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
								aperiam aspernatur maiores repellendus qui ab quibusdam
								dignissimos expedita voluptatem optio maxime cumque vel natus
								illo, nostrum assumenda, veniam velit dolore?
							</motion.p>
							<ImageStyled
								animate={{
									y: '440px',
									width: '100vw',
									transition: { duration: 0.4, ease: 'easeIn' },
								}}
								src={Image}
								alt="Sample Image"
							/>
						</WrapperStyled>
					}
				/>
			</Routes>
		</div>
	);
};

export default ImageTransition;

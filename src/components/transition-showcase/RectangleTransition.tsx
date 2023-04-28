import { motion } from 'framer-motion';

import styled, { css } from 'styled-components';

interface TransitionColumnProps {
	inset: string;
}

const TransitionColumnStyled = styled(motion.div)<TransitionColumnProps>`
	position: absolute;

	${({ inset }) =>
		inset &&
		css`
			inset: ${inset};
		`}

	width: 33.3%;
	height: 100vh;
	background-color: white;
	transform: translateY(-50px);
`;

const PageTransition = () => {
	return (
		<>
			<TransitionColumnStyled
				inset={'0 0 0 0'}
				initial={{ transform: 'translateY(0)' }}
				animate={{ transform: 'translateY(-100vh)' }}
				exit={{ transform: 'translateY(0)' }}
				transition={{
					duration: 0.4,
				}}
			/>
			<TransitionColumnStyled
				inset={'0 0 0 33.3%'}
				initial={{ transform: 'translateY(0)' }}
				animate={{ transform: 'translateY(-100vh)' }}
				exit={{ transform: 'translateY(0)' }}
				transition={{
					duration: 0.6,
				}}
			/>
			<TransitionColumnStyled
				inset={'0 0 0 66.6%'}
				initial={{ transform: 'translateY(0)' }}
				animate={{ transform: 'translateY(-100vh)' }}
				exit={{ transform: 'translateY(0)' }}
				transition={{
					duration: 0.8,
				}}
			/>
		</>
	);
};

export default PageTransition;

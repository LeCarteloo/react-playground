import { BsPlayFill } from 'react-icons/bs';
import styled from 'styled-components';

const PlayButtonStyled = styled.button`
	border: none;
	background-color: #000;
	border-radius: 50%;
	aspect-ratio: 1/1;
	display: flex;
	justify-items: center;
	align-items: center;
	position: relative;
	isolation: isolate;
	cursor: pointer;

	::after {
		content: '';
		position: absolute;
		inset: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background-color: #000;
		z-index: -1;

		@keyframes pulse {
			0% {
				width: 100%;
				height: 100%;
			}
			20% {
				width: 180%;
				height: 180%;
				opacity: 0;
			}
			100% {
				width: 180%;
				height: 180%;
				opacity: 0;
			}
		}

		animation: 3s pulse infinite ease-in;
	}
`;

const PlayButton = () => {
	return (
		<PlayButtonStyled>
			<BsPlayFill fontSize="40px" />
		</PlayButtonStyled>
	);
};

export default PlayButton;

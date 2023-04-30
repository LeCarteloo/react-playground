import styled from 'styled-components';

const FirstButton = () => {
	const ButtonStyled = styled.button`
		padding: 1rem;
		width: 200px;
		border: 1px solid #fff;
		border-radius: 50vw;
		background-color: transparent;
		cursor: pointer;
		outline: none;

		@keyframes moveText {
			30% {
				transform: translateY(-100%);
			}
			31% {
				opacity: 0;
			}
			50% {
				transform: translateY(100%);
				opacity: 0;
			}
			80% {
				opacity: 1;
			}
			100% {
				transform: translateY(0);
			}
		}

		:hover,
		:focus-within {
			span:nth-child(1) {
				animation: moveText 0.5s ease-in-out;
			}
			span:nth-child(2) {
				animation: moveText 0.53s ease-in-out;
			}
			span:nth-child(3) {
				animation: moveText 0.56s ease-in-out;
			}
		}
	`;

	const WrapperStyled = styled.div`
		display: flex;
		justify-content: center;
		gap: 0.2rem;
		overflow: hidden;
	`;

	return (
		<ButtonStyled>
			<WrapperStyled>
				<span>START</span>
				<span>A</span>
				<span>PROJECT</span>
			</WrapperStyled>
		</ButtonStyled>
	);
};

export default FirstButton;

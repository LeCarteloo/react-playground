import styled from 'styled-components';
import FirstButton from './FirstButton';
import SecondButton from './SecondButton';
import PlayButton from './PlayButton';
import ArrowButton from './ArrowButton';

const PaperStyled = styled.div`
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #181a1b;
	border-radius: 10px;
`;

const InteractionsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 1.5em;

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`;

const InteractionsShowcase = () => {
	const microInteractions = [
		<FirstButton />,
		<SecondButton />,
		<PlayButton />,
		<ArrowButton />,
	];

	return (
		<div>
			<h1>Micro interactions showcase</h1>
			<InteractionsGrid>
				{microInteractions.map((element, index) => (
					<PaperStyled key={index}>{element}</PaperStyled>
				))}
			</InteractionsGrid>
		</div>
	);
};

export default InteractionsShowcase;

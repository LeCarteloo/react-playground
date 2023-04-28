import styled from 'styled-components';
import { Card } from '../components';
import { pages } from '../const/pages.const';

const HomeGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 1.5em;
`;

const HomePage = () => {
	return (
		<section>
			<h1>Home Page</h1>
			<HomeGridStyled>
				{pages.map((page, index) => (
					<Card key={page.id} index={index + 1} {...page} />
				))}
			</HomeGridStyled>
		</section>
	);
};

export default HomePage;

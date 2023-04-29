import styled from 'styled-components';
import { Card } from '../components';
import { pages } from '../const/pages.const';

const HomeGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	gap: 1.5em;

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`;

const HomePage = () => {
	return (
		<section>
			<h1>React playground</h1>
			<p>
				Work in progress, I&apos;m trying to figure the way to organise this app
			</p>
			{pages.map((page) => (
				<section key={page.id}>
					<h2>{page.title}</h2>
					<HomeGridStyled>
						{page.children?.map((children, index) => (
							<Card
								key={children.id}
								index={index + 1}
								color={page.color}
								{...children}
							/>
						))}
					</HomeGridStyled>
				</section>
			))}
		</section>
	);
};

export default HomePage;

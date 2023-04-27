import React from 'react';
import { Card } from '../components';

const HomePage = () => {
	return (
		<section>
			<h1>Home Page</h1>
			<Card
				index={1}
				title={'Framer'}
				description={'Description'}
				link="/smth"
			/>
		</section>
	);
};

export default HomePage;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TransitionShowcase from './pages/TransitionShowcase';

function App() {
	return (
		<main>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/page-transition/*" element={<TransitionShowcase />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;

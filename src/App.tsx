import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
	return (
		<main>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;

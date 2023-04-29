import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RectangleTransition from './pages/transitions/RectangleTransition';
import { AnimatePresence } from 'framer-motion';
import ClipPathTransition from './pages/transitions/ClipPathTransition';
import TileTransition from './pages/transitions/TileTransition';

function App() {
	return (
		<main>
			<Router>
				<AnimatePresence>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/rectangle-transition/*"
							element={<RectangleTransition />}
						/>
						<Route
							path="/clip-path-transition/*"
							element={<ClipPathTransition />}
						/>
						<Route path="/tile-transition/*" element={<TileTransition />} />
					</Routes>
				</AnimatePresence>
			</Router>
		</main>
	);
}

export default App;

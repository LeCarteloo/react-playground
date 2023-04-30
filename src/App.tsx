import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RectangleTransition from './pages/transitions/RectangleTransition';
import { AnimatePresence } from 'framer-motion';
import ClipPathTransition from './pages/transitions/ClipPathTransition';
import TileTransition from './pages/transitions/TileTransition';
import CursorShowcase from './pages/cursors/CursorShowcase';
import ImageTransition from './pages/transitions/ImageTransition';
import InteractionsShowcase from './pages/interactions/InteractionsShowcase';
import SvgAnimationShowcase from './pages/svg-animations/SvgAnimationShowcase';
import BlobTransition from './pages/transitions/BlobTransition';

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
						<Route
							path="/seamless-image-transition/*"
							element={<ImageTransition />}
						/>
						<Route path="/blob-transition/*" element={<BlobTransition />} />
						<Route
							path="/micro-interactions/*"
							element={<InteractionsShowcase />}
						/>
						<Route
							path="/svg-animations/*"
							element={<SvgAnimationShowcase />}
						/>
						<Route path="/custom-cursor" element={<CursorShowcase />} />
					</Routes>
				</AnimatePresence>
			</Router>
		</main>
	);
}

export default App;

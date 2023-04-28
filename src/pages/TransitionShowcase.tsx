import { AnimatePresence } from 'framer-motion';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { RectangleTransition } from '../components';
import { useState } from 'react';

const TransitionShowcase = () => {
	const [transitionType, setTransitionType] = useState<number | undefined>(
		undefined
	);
	const { pathname } = useLocation();

	const renderTransitionType = () => {
		switch (transitionType) {
			case 0:
				return <RectangleTransition key={pathname} />;
			case 1:
				break;
		}
	};

	return (
		<div>
			<h1>Page Transition</h1>
			<div>
				<input
					id="rectangle-transition"
					type="checkbox"
					onChange={() => setTransitionType(0)}
					checked={transitionType === 0}
				/>
				<label htmlFor="rectangle-transition"> Rectangle Transition</label>
			</div>
			<AnimatePresence mode="wait">
				{renderTransitionType()}
				<Routes>
					<Route
						path="/"
						element={<Link to="example">Rectangle transition</Link>}
					/>
					<Route
						path="/example"
						element={<Link to="/page-transition">Go back</Link>}
					/>
				</Routes>
			</AnimatePresence>
		</div>
	);
};

export default TransitionShowcase;

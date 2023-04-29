import { Link } from 'react-router-dom';
import Cursor from './Cursor';
import { createPortal } from 'react-dom';

const CursorShowcase = () => {
	return (
		<div>
			<p>
				Currenly default cursor is visible <i>(it will be hidden later)</i>
			</p>
			<Link to="/">Go back to Home</Link>
			<div>Sample div</div>
			<button type="button">Sample button</button>
			{createPortal(<Cursor />, document.body)}
		</div>
	);
};

export default CursorShowcase;

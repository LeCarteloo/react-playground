import { motion } from 'framer-motion';

const SvgAnimationShowcase = () => {
	const draw = {
		hidden: { pathLength: 0 },
		visible: {
			pathLength: 1,
			transition: { duration: 2, ease: 'easeIn' },
		},
	};

	return (
		<div>
			SvgAnimationShowcase
			<motion.svg
				width="600"
				height="600"
				viewBox="0 0 600 600"
				initial="hidden"
				animate="visible"
			>
				<motion.circle
					cx="100"
					cy="100"
					r="80"
					stroke="#ff0055"
					strokeWidth="30px"
					variants={draw}
					custom={1}
				/>
			</motion.svg>
		</div>
	);
};

export default SvgAnimationShowcase;

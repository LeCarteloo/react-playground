import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface CardStyledProps {
	color: string;
}

export const CardStyled = styled.div<CardStyledProps>`
	position: relative;
	border-radius: 2em;
	padding: 1.5em;
	background-color: #181a1b;
	border: 1px solid #c2c2c247;
	transition: 0.6s ease-in-out;

	background-image: radial-gradient(
		rgba(255, 255, 255, 0.08) 1px,
		transparent 1px
	);
	background-position: 50% 50%;
	background-size: 1rem 1rem;

	:after {
		content: '';
		position: absolute;
		width: 1px;
		height: 60px;
		transition: top, opacity;
		transition-duration: 0.6s;
		top: 80%;
		left: -1px;
		${({ color }) =>
			color &&
			css`
				background: linear-gradient(transparent, ${color}, transparent);
			`}
		opacity: 0;
	}

	:hover {
		background-size: 1.1rem 1.1rem;

		:after {
			top: 20%;
			opacity: 1;
		}

		h3 {
			${({ color }) =>
				color &&
				css`
					color: ${color};
				`}
		}
	}
`;

export const HeadingStyled = styled.h3`
	font-size: 1.5rem;
	transition-duration: 0.6s;
`;

export const LinkStyled = styled(Link)`
	color: white;
	text-decoration: none;
`;

export const CardHeaderStyled = styled.div`
	color: white;
	text-decoration: none;
`;

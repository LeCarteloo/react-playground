import { useState } from 'react';
import styled, { css } from 'styled-components';

interface HamburgerStyled {
	$open: boolean;
}

const HamburgerStyled = styled.button<HamburgerStyled>`
	position: relative;
	background-color: #fff;
	border-radius: 50%;
	padding: 1.8em;
	border: none;
	cursor: pointer;

	span {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		display: block;
		width: 1.4em;
		height: 2px;
		background-color: #000;
		transition: 200ms ease-in-out;
		transform-origin: center;

		:nth-child(1) {
			top: calc(50% + 6px);
		}
		:nth-child(3) {
			top: calc(50% - 6px);
		}
	}

	${({ $open }) =>
		!$open &&
		css`
			:hover,
			:focus-visible {
				span {
					width: 1.15em;
					:nth-child(2) {
						width: 1.9em;
					}
				}
			}
		`}

	${({ $open }) =>
		$open &&
		css`
			span {
				:nth-child(1) {
					rotate: 45deg;
					top: 50%;
				}
				:nth-child(2) {
					scale: 0;
				}
				:nth-child(3) {
					rotate: -45deg;
					top: 50%;
				}
			}

			:hover,
			:focus-visible {
				span {
					background-color: red;
				}
			}
		`}
`;

const Hamburger = () => {
	const [open, setOpen] = useState(false);

	return (
		<HamburgerStyled $open={open} onClick={() => setOpen(!open)}>
			<span></span>
			<span></span>
			<span></span>
		</HamburgerStyled>
	);
};

export default Hamburger;

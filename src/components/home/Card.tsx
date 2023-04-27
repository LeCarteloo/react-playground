import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	index: number;
	title: string;
	description: string;
	link: string;
}

const CardStyled = styled.div`
	border-radius: 2em;
	padding: 1.5em;
	background-color: #181a1b;
	border: 1px solid rgba(194, 194, 194, 0.28);
`;

const LinkStyled = styled(Link)`
	color: white;
	text-decoration: none;
`;

const CardHeaderStyled = styled.div`
	color: white;
	text-decoration: none;
`;

const Card = ({ index, title, description, link, ...props }: CardProps) => {
	return (
		<CardStyled {...props}>
			<LinkStyled to={link}>
				<CardHeaderStyled>{index}</CardHeaderStyled>
				<h2>{title}</h2>
				<p>{description}</p>
			</LinkStyled>
		</CardStyled>
	);
};

export default Card;

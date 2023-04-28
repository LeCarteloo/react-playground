import { HTMLAttributes } from 'react';
import {
	CardStyled,
	LinkStyled,
	CardHeaderStyled,
	HeadingStyled,
} from './CardStyled';

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	index: number;
	title: string;
	description: string;
	link: string;
}

const Card = ({ index, title, description, link, ...props }: CardProps) => {
	return (
		<CardStyled {...props}>
			<LinkStyled to={link}>
				<CardHeaderStyled>{index}</CardHeaderStyled>
				<HeadingStyled>{title}</HeadingStyled>
				<p>{description}</p>
			</LinkStyled>
		</CardStyled>
	);
};

export default Card;

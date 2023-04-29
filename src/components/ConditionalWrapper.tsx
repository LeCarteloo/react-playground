interface ConditionalWrapperProps {
	condition: boolean;
	children: React.ReactNode;
	wrapper: (children: React.ReactNode) => JSX.Element;
}

const ConditionalWrapper = ({
	condition,
	wrapper,
	children,
}: ConditionalWrapperProps) => (condition ? wrapper(children) : children);

export default ConditionalWrapper;

import styled from 'styled-components';

const compose = (...args) => {
	const [baseComponent, ...components] = args;
	return components.reduce(
		(acc, component) =>
			styled(acc)(
				component.componentStyle.rules.filter((rule) => typeof rule === 'string'),
				...component.componentStyle.rules.filter((rule) => typeof rule !== 'string'),
			),
		baseComponent,
	);
};

export default compose;

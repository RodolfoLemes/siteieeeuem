import React from 'react';
import {
	Container,
	Label,
	SelectorContainer,
	Selector,
	SelectorText,
} from './styles';

function FormSelector({ labelText, rowWidth, leftText, rightText }) {
	return (
		<Container rowWidth={rowWidth}>
			<Label>{labelText}</Label>
			<SelectorContainer>
				<Selector type="radio" />
				<SelectorText>{leftText}</SelectorText>
				<Selector type="radio" />
				<SelectorText>{rightText}</SelectorText>
			</SelectorContainer>
		</Container>
	);
}

export default FormSelector;

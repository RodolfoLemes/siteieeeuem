import React from 'react';
import { Container, Label, InputContainer } from './styles';

function FormInput({ labelText, placeholderText, rowWidth }) {
	return (
		<Container rowWidth={rowWidth}>
			<Label>{labelText}</Label>
			<InputContainer placeholder={placeholderText} />
		</Container>
	);
}

export default FormInput;

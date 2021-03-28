import React from 'react';
import { Container, Label, InputContainer } from './styles';

function FormInput({
	labelText,
	placeholderText,
	rowWidth,
	disabled,
	value,
	onChange,
}) {
	return (
		<Container rowWidth={rowWidth}>
			<Label>{labelText}</Label>
			<InputContainer
				placeholder={placeholderText}
				value={value}
				disabled={disabled}
				onChange={e => onChange(e.target.value)}
			/>
		</Container>
	);
}

export default FormInput;

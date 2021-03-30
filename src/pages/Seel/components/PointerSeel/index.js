import React from 'react';

import {
	Container,
	DateText,
	HeaderTitle,
	SubscribeButton,
	StyledLink,
} from './styles';
import ListCards from './components/ListCards';

function PointerSeel({ references }) {
	return (
		<Container>
			<HeaderTitle>E aí, já se inscreveu no evento?</HeaderTitle>

			<ListCards references={references} />

			<DateText>Abertura dia 05/04</DateText>

			<StyledLink>
				<SubscribeButton disabled>Inscrever-se</SubscribeButton>
			</StyledLink>
		</Container>
	);
}

export default PointerSeel;

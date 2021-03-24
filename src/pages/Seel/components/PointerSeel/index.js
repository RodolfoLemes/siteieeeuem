import React from 'react';
import { Container } from './styles';

import { HeaderTitle, SubscribeButton } from './styles';
import ListCards from './components/ListCards';

function PointerSeel() {
	return (
		<Container>
			<HeaderTitle>E aí, já se inscreveu no evento?</HeaderTitle>

			<ListCards />

			<SubscribeButton disabled>Inscrever-se</SubscribeButton>
		</Container>
	);
}

export default PointerSeel;

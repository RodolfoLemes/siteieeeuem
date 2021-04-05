import React from 'react';

import { Container, HeaderTitle, SubscribeButton, StyledLink } from './styles';
import ListCards from './components/ListCards';

function PointerSeel({ references }) {
	return (
		<Container>
			<HeaderTitle>E aí, já se inscreveu no evento?</HeaderTitle>

			<ListCards references={references} />

			<StyledLink to="/seel/subscribe">
				<SubscribeButton>Inscrever-se</SubscribeButton>
			</StyledLink>
		</Container>
	);
}

export default PointerSeel;

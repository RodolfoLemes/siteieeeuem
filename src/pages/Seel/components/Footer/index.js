import React from 'react';

import { Container, StyledText, Developer } from './styles';

function Footer() {
	return (
		<Container>
			<StyledText>
				© 2021 Ramo Estudantil IEEE UEM, desenvolvido por{' '}
				<Developer href="https://github.com/leoarmelin" target="_blank">
					Leonardo Armelin
				</Developer>{' '}
				e{' '}
				<Developer href="https://github.com/rodolfolemes" target="_blank">
					Rodolfo Lemes
				</Developer>
				.
			</StyledText>
		</Container>
	);
}

export default Footer;

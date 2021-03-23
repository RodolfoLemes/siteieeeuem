import React from 'react';
import { Container } from './styles';

import HomeSeel from './components/HomeSeel';
import PointerSeel from './components/PointerSeel';

function Seel() {
	return (
		<Container>
			<HomeSeel />
			<PointerSeel />
		</Container>
	);
}

export default Seel;

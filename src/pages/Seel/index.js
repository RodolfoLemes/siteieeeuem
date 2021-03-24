import React from 'react';
import { Container } from './styles';

import HomeSeel from './components/HomeSeel';
import PointerSeel from './components/PointerSeel';
import Timeline from './components/Timeline';

function Seel() {
	return (
		<Container>
			<HomeSeel />
			<PointerSeel />
			<Timeline />
		</Container>
	);
}

export default Seel;

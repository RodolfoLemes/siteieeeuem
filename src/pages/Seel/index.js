import React from 'react';
import { Container } from './styles';

import HomeSeel from './components/HomeSeel';
import PointerSeel from './components/PointerSeel';
import Timeline from './components/Timeline';
import Panelists from './components/Panelists';

function Seel() {
	return (
		<Container>
			<HomeSeel />
			<PointerSeel />
			<Timeline />
			<Panelists />
		</Container>
	);
}

export default Seel;

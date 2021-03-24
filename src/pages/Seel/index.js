import React, { useRef } from 'react';
import { Container } from './styles';

import HomeSeel from './components/HomeSeel';
import PointerSeel from './components/PointerSeel';
import Timeline from './components/Timeline';
import Panelists from './components/Panelists';

function Seel() {
	const timelineRef = useRef();
	const panelistsRef = useRef();

	return (
		<Container>
			<HomeSeel />
			<PointerSeel
				references={{
					timelineRef,
					panelistsRef,
				}}
			/>
			<Timeline ref={timelineRef} />
			<Panelists ref={panelistsRef} />
		</Container>
	);
}

export default Seel;

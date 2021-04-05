import React, { useRef } from 'react';
import { Container } from './styles';

import HomeSeel from './components/HomeSeel';
import PointerSeel from './components/PointerSeel';
import Partners from './components/Partners';
import Timeline from './components/Timeline';
import Panelists from './components/Panelists';
import Kits from './components/Kits';
import Footer from './components/Footer';

function Seel() {
	const timelineRef = useRef();
	const panelistsRef = useRef();
	const kitsRef = useRef();

	return (
		<Container>
			<HomeSeel />
			<PointerSeel
				references={{
					timelineRef,
					panelistsRef,
					kitsRef,
				}}
			/>
			<Partners />
			<Timeline ref={timelineRef} />
			<Panelists ref={panelistsRef} />
			<Kits ref={kitsRef} />
			<Footer />
		</Container>
	);
}

export default Seel;

import React from 'react';
import { Container } from './styles';

import PanelistsFlatList from './components/PanelistsFlatList';

import panelists from './descriptions';

function Panelist() {
	return (
		<Container>
			<PanelistsFlatList data={panelists} />
		</Container>
	);
}

export default Panelist;

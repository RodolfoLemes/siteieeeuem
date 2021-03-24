import React, { forwardRef } from 'react';
import { Container } from './styles';

import PanelistsFlatList from './components/PanelistsFlatList';

import panelists from './descriptions';

const Panelist = forwardRef((props, ref) => {
	return (
		<Container ref={ref}>
			<PanelistsFlatList data={panelists} />
		</Container>
	);
});

export default Panelist;

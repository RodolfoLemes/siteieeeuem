import React, { forwardRef } from 'react';
import { Container } from './styles';

import PanelistsFlatList from './components/KitsFlatList';

import kits from './descriptions';

const Kits = forwardRef((props, ref) => {
	return (
		<Container ref={ref}>
			<PanelistsFlatList data={kits} />
		</Container>
	);
});

export default Kits;

import React, { forwardRef } from 'react';
import { Container } from './styles';

import KitsFlatList from './components/KitsFlatList';

import kits from './descriptions';

const Kits = forwardRef((props, ref) => {
	return (
		<Container ref={ref}>
			<KitsFlatList data={kits} />
		</Container>
	);
});

export default Kits;

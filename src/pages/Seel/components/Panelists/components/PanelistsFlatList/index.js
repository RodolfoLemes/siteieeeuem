import React from 'react';
import {
	Container,
	ItemContainer,
	PanelistImage,
	PanelistDescription,
} from './styles';

function PanelistsFlatList({ data }) {
	return (
		<Container>
			{data.map((element, key) => (
				<ItemContainer index={key.toString()} setReverse={element.id}>
					<PanelistImage src={element.imagePanelist} />
					<PanelistDescription>{element.description}</PanelistDescription>
				</ItemContainer>
			))}
		</Container>
	);
}

export default PanelistsFlatList;

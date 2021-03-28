import React from 'react';
import { Container, ItemContainer, KitImage, KitDescription } from './styles';

function KitsFlatList({ data }) {
	return (
		<Container>
			{data.map((element, key) => (
				<ItemContainer index={key.toString()} setReverse={element.id}>
					<KitImage src={element.imageKit} />
					<KitDescription>{element.description}</KitDescription>
				</ItemContainer>
			))}
		</Container>
	);
}

export default KitsFlatList;

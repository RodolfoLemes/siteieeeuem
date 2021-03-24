import React from 'react';
import { Container } from './styles';

import TimeLineFlatList from './components/TimeLineFlatList';
import { Monday, Tuesday, Wednesday } from './components/TimeLineFlatList/data';

function Timeline() {
	return (
		<Container>
			<TimeLineFlatList weekDay="Segunda-feira" data={Monday} />

			<TimeLineFlatList weekDay="Terça-feira" data={Tuesday} />

			<TimeLineFlatList weekDay="Quarta-feira" data={Wednesday} />
		</Container>
	);
}

export default Timeline;

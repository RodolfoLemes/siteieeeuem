import React from 'react';
import {
	FlatListContainer,
	WeekDayTitle,
	ItemContainer,
	ItemHour,
	ItemEvent,
} from './styles';

function Timeline({ weekDay, data }) {
	return (
		<FlatListContainer>
			<WeekDayTitle>{weekDay}</WeekDayTitle>

			{data.map((element, index) => (
				<ItemContainer key={index.toString()}>
					<ItemHour>{element.hour}</ItemHour>
					<ItemEvent>{element.panelist}</ItemEvent>
				</ItemContainer>
			))}
		</FlatListContainer>
	);
}

export default Timeline;

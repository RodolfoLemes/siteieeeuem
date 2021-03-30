import React, { useState } from 'react';
import {
	FlatListContainer,
	WeekDayTitle,
	ItemContainer,
	ItemHour,
	ItemEvent,
	ItemDescription,
} from './styles';

function Timeline({ weekDay, data }) {
	const [visible, isVisible] = useState(false);
	return (
		<FlatListContainer>
			<WeekDayTitle onClick={() => isVisible(!visible)}>{weekDay}</WeekDayTitle>

			{data.map((element, index) => (
				<ItemContainer key={index.toString()}>
					<ItemHour>{element.hour}</ItemHour>
					<ItemEvent>{element.panelist}</ItemEvent>
					<ItemDescription itemDisplay={visible}>
						{element.description}
					</ItemDescription>
				</ItemContainer>
			))}
		</FlatListContainer>
	);
}

export default Timeline;

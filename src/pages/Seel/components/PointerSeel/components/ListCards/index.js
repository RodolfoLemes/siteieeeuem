import React from 'react';
import { Container } from './styles';

import { CardContainer, CardIcon, CardText } from './styles';
import kitsIcon from '../../../../../../assets/seel/game-controller-outline.svg';
import peopleIcon from '../../../../../../assets/seel/people-outline.svg';
import calendarIcon from '../../../../../../assets/seel/calendar-outline.svg';

function ListCards({ references }) {
	const { panelistsRef, timelineRef } = references;

	return (
		<Container>
			<CardContainer>
				<CardIcon src={kitsIcon} />
				<CardText>Kits</CardText>
			</CardContainer>

			<CardContainer
				onClick={() =>
					panelistsRef.current.scrollIntoView({ behavior: 'smooth' })
				}
			>
				<CardIcon src={peopleIcon} isPeople={true} />
				<CardText>Palestrantes</CardText>
			</CardContainer>

			<CardContainer
				onClick={() =>
					timelineRef.current.scrollIntoView({ behavior: 'smooth' })
				}
			>
				<CardIcon src={calendarIcon} />
				<CardText>Cronograma</CardText>
			</CardContainer>
		</Container>
	);
}

export default ListCards;

import React from 'react';
import { Container } from './styles';

import { CardContainer, CardIcon, CardText } from './styles';
import kitsIcon from '../../../../../assets/seel/game-controller-outline.svg';
import peopleIcon from '../../../../../assets/seel/people-outline.svg';
import calendarIcon from '../../../../../assets/seel/calendar-outline.svg';

function ListCards() {
	return (
		<Container>
			<CardContainer>
				<CardIcon src={kitsIcon} />
				<CardText>Kits</CardText>
			</CardContainer>

			<CardContainer>
				<CardIcon src={peopleIcon} isPeople={true} />
				<CardText>Palestrantes</CardText>
			</CardContainer>

			<CardContainer>
				<CardIcon src={calendarIcon} />
				<CardText>Cronograma</CardText>
			</CardContainer>
		</Container>
	);
}

export default ListCards;

import React from 'react';
import {
	Container,
	HomeImg,
	HomeContainer,
	ArrowLeft,
	ArrowLeftContainer,
} from './styles';

import Img from '../../../../assets/HomeImg.png';
import arrowLeftIcon from '../../../../assets/arrowLeftSEEL.svg';

function Seel() {
	return (
		<Container>
			<HomeContainer>
				<ArrowLeftContainer>
					<ArrowLeft src={arrowLeftIcon} />
				</ArrowLeftContainer>

				<HomeImg src={Img} />
			</HomeContainer>
		</Container>
	);
}

export default Seel;

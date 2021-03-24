import React from 'react';
import {
	HomeImg,
	HomeContainer,
	ArrowLeft,
	ArrowLeftContainer,
} from './styles';

import Img from '../../../../assets/seel/HomeImg.png';
import arrowLeftIcon from '../../../../assets/seel/arrowLeftSEEL.svg';

function Seel() {
	return (
		<HomeContainer>
			<ArrowLeftContainer>
				<ArrowLeft src={arrowLeftIcon} />
			</ArrowLeftContainer>

			<HomeImg src={Img} />
		</HomeContainer>
	);
}

export default Seel;

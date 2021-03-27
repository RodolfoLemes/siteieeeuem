import React from 'react';
import useWindowDimensions from '../../dimensions';
import {
	HomeImg,
	HomeContainer,
	ArrowLeft,
	ArrowLeftContainer,
} from './styles';

import Img from '../../../../assets/seel/HomeImg.png';
import ImgMobile from '../../../../assets/seel/HomeImgMobile.png';
import arrowLeftIcon from '../../../../assets/seel/arrowLeftSEEL.svg';

function Seel() {
	const { width } = useWindowDimensions();
	return (
		<HomeContainer>
			<ArrowLeftContainer>
				<ArrowLeft src={arrowLeftIcon} />
			</ArrowLeftContainer>

			<HomeImg src={width > 670 ? Img : ImgMobile} />
		</HomeContainer>
	);
}

export default Seel;

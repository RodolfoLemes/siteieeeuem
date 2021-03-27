import React from 'react';
import useWindowDimensions from '../../utils/dimensions';
import {
	HomeImg,
	HomeContainer,
	ArrowLeft,
	ArrowLeftContainer,
} from './styles';

import { Link } from 'react-router-dom';

import Img from '../../../../assets/seel/HomeImg.png';
import ImgMobile from '../../../../assets/seel/HomeImgMobile.png';
import arrowLeftIcon from '../../../../assets/seel/arrowLeftSEEL.svg';

function Seel() {
	const { width } = useWindowDimensions();
	return (
		<HomeContainer>
			<ArrowLeftContainer>
				<Link to="/">
					<ArrowLeft src={arrowLeftIcon} />
				</Link>
			</ArrowLeftContainer>

			<HomeImg src={width > 670 ? Img : ImgMobile} />
		</HomeContainer>
	);
}

export default Seel;

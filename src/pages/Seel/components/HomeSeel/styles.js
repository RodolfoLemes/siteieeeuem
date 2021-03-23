import styled from 'styled-components';
import colors from '../../colors';

export const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	align-items: flex-start;
	justify-content: center;
	background-color: ${colors.background};
`;

export const HomeContainer = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	align-items: center;
	justify-content: center;
`;

export const HomeImg = styled.img`
	height: auto;
	width: 600px;
`;

export const ArrowLeft = styled.img`
	height: auto;
	width: 15px;
	opacity: 0.5;
	transition: all 0.3s ease;
`;

export const ArrowLeftContainer = styled.button`
	position: absolute;
	top: 25px;
	left: 25px;
	padding: 10px 20px;
	background-color: transparent;
	border-width: 0px;
	z-index: 2;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
	}

	&:hover ${ArrowLeft} {
		opacity: 1;
	}
`;

import styled from 'styled-components';

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

	@media (max-width: 670px) {
		width: 360px;
	}
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
		-moz-box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.08);
		-webkit-box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.08);
		box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.08);
	}

	@media (max-width: 670px) {
		top: 10px;
		left: 0px;
	}
`;

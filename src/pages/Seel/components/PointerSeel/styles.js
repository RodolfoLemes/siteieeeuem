import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../colors';

const backgroundButton = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: 100vw;
	align-items: center;
	justify-content: flex-start;
	margin: 40px 0px 80px;
`;

export const HeaderTitle = styled.text`
	font-size: 36px;
	font-family: Poppins;
	color: ${colors.white};

	@media (max-width: 580px) {
		font-size: 24px;
	}

	@media (max-width: 400px) {
		font-size: 20px;
		text-align: center;
		margin: 0px 20px;
	}
`;

export const SubscribeButton = styled.button`
	height: inherit;
	width: inherit;
	display: block;
	outline: none;
	border: none;
	border-radius: 30px;
	font-size: 24px;
	font-weight: 600;
	font-family: Poppins;
	color: ${colors.white};
	background-size: 100% 100%;
	-moz-box-shadow: 0 0 0 7px ${colors.tomato} inset,
		8px 14px 24px rgba(0, 0, 0, 0.25);
	-webkit-box-shadow: 0 0 0 7px ${colors.tomato} inset,
		8px 14px 24px rgba(0, 0, 0, 0.25);
	box-shadow: 0 0 0 7px ${colors.tomato} inset,
		8px 14px 24px rgba(0, 0, 0, 0.25);
	background-color: ${colors.tomato};

	&:hover:enabled {
		background-image: linear-gradient(
			145deg,
			transparent 10%,
			#d25a46 10% 20%,
			transparent 20% 30%,
			#d25a46 30% 40%,
			transparent 40% 50%,
			#d25a46 50% 60%,
			transparent 60% 70%,
			#d25a46 70% 80%,
			transparent 80% 90%,
			#d25a46 90% 100%
		);
		animation: ${backgroundButton} 3s linear infinite;
		cursor: pointer;
	}

	&:disabled {
		opacity: 0.5;
	}

	@media (max-width: 580px) {
		width: 100%;
		font-size: 20px;
	}
`;

export const StyledLink = styled(Link)`
	height: 70px;
	width: 400px;
	border-radius: 30px;
	margin: 15px 0px;
	text-decoration: none;

	@media (max-width: 580px) {
		height: 50px;
		width: 80%;
	}
`;

export const DateText = styled.text`
	font-size: 16px;
	font-family: Poppins;
	margin-top: 80px;
	color: ${colors.white};

	@media (max-width: 800px) {
		margin-top: 40px;
	}
`;

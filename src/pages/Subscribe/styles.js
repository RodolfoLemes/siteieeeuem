import styled, { keyframes } from 'styled-components';
import colors from './colors';

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
	min-height: 100vh;
	height: auto;
	width: 100vw;
	align-items: center;
	justify-content: flex-start;
	background-color: ${colors.background};
`;

export const HeaderTitle = styled.div`
	font-size: 48px;
	font-family: Poppins-regular;
	color: ${colors.white};

	@media (max-width: 580px) {
		margin-top: 20px;
		font-size: 36px;
	}

	@media (max-width: 400px) {
		font-size: 24px;
		text-align: center;
		margin: 20px 20px 0px 20px;
	}
`;

export const FormContainer = styled.div`
	height: auto;
	width: 80vw;
	margin-bottom: 20px;
`;

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: auto;
	width: 100%;

	@media (max-width: 920px) {
		flex-direction: column;
	}
`;

export const FinishButton = styled.button`
	height: 70px;
	width: 400px;
	display: block;
	outline: none;
	border: none;
	border-radius: 30px;
	font-size: 24px;
	font-weight: 600;
	font-family: Poppins;
	color: ${colors.white};
	margin: 40px 0px;
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
		height: 50px;
		width: 80%;
		font-size: 20px;
	}
`;

export const InfoText = styled.text`
	width: 80vw;
	font-size: 18px;
	text-align: justify;
	color: ${colors.white};
`;

export const ColoredText = styled.text`
	color: ${colors.yellow};
`;

export const FormSelectorContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: ${props => `${props.rowWidth}%`};
	margin-top: 20px;
	padding-left: 10px;

	@media (max-width: 920px) {
		width: 100%;
	}
`;

export const FormSelectorLabel = styled.label`
	font-size: 20px;
	font-family: Poppins-regular;
	color: ${colors.white};

	@media (max-width: 520px) {
		font-size: 16px;
	}
`;

export const OptionsContainer = styled.div`
	display: flex;
	height: 50px;
	align-items: center;
`;

export const Option = styled.input``;

export const OptionText = styled.text`
	font-size: 18px;
	font-family: Poppins-regular;
	margin: 0px 20px 0px 10px;
	color: ${colors.white};

	@media (max-width: 520px) {
		font-size: 16px;
	}
`;

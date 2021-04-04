import styled from 'styled-components';
import colors from '../../../../colors';

export const FlatListContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: 100vw;
	align-items: center;
	justify-content: flex-start;
`;

export const WeekDayTitle = styled.button`
	display: flex;
	height: 50px;
	width: 400px;
	border-radius: 35px;
	border: 4px solid ${colors.tomato};
	align-items: center;
	justify-content: center;
	font-size: 20px;
	font-family: Poppins;
	margin: 10px 0px 20px 0px;
	color: ${colors.white};
	background-color: transparent;
	transition: all 0.5s ease;

	@media (max-width: 480px) {
		width: 80%;
	}

	@media (max-width: 370px) {
		font-size: 18px;
	}

	&:hover {
		background-color: ${colors.tomato};
		cursor: pointer;
	}
`;

export const ItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: ${props => (props.itemDisplay ? `30px` : `20px`)};
`;

export const ItemHour = styled.text`
	font-size: 18px;
	font-family: Poppins;
	margin-bottom: 5px;
	color: ${colors.yellow};
`;

export const ItemName = styled.text`
	width: 80vw;
	text-align: center;
	font-size: 16px;
	font-family: Poppins;
	margin-bottom: 5px;
	color: #aaa;
`;

export const ItemEvent = styled.text`
	width: 80vw;
	text-align: center;
	font-size: 18px;
	font-family: Poppins;
	margin-bottom: 10px;
	color: ${colors.white};
`;

export const ItemDescription = styled.text`
	display: ${props => (props.itemDisplay ? `block` : `none`)};
	width: 80vw;
	font-size: 16px;
	font-family: Poppins;
	text-align: center;
	color: ${colors.white};

	@media (max-width: 420px) {
		text-align: justify;
	}
`;

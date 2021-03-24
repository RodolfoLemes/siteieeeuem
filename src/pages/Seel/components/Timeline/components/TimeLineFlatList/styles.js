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

export const WeekDayTitle = styled.div`
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
`;

export const ItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const ItemHour = styled.text`
	font-size: 18px;
	font-family: Poppins;
	color: ${colors.yellow};
`;

export const ItemEvent = styled.text`
	font-size: 18px;
	font-family: Poppins;
	color: ${colors.white};
`;

import styled from 'styled-components';
import colors from '../../colors';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	height: auto;
	width: 100vw;
	align-items: center;
	justify-content: space-evenly;
	box-sizing: border-box;
	padding: 0px 100px;
`;

export const PanelistImage = styled.img`
	display: block;
	max-height: 300px;
	max-width: 250px;
	height: auto;
	width: auto;
`;

export const PanelistDescription = styled.text`
	max-height: 300px;
	width: 40vw;
	color: ${colors.white};
	font-size: 16px;
	font-family: Poppins;
	text-align: justify;
`;

import styled from 'styled-components';
import colors from '../../colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: 100vw;
	align-items: center;
	justify-content: flex-start;
`;

export const HeaderTitle = styled.text`
	font-size: 36px;
	font-family: Poppins;
	color: ${colors.white};
`;

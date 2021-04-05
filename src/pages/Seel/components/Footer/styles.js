import styled from 'styled-components';

import colors from '../../colors';

export const Container = styled.div`
	display: flex;
	height: fit-content;
	width: 100vw;
	padding: 20px 20px;
	text-align: center;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
`;

export const StyledText = styled.p`
	font-size: 16px;
	font-family: Poppins;
	color: ${colors.white};
`;

export const Developer = styled.a`
	font-size: 16px;
	font-family: Poppins;
	color: ${colors.yellow};
	text-decoration: none;

	&:hover {
		cursor: pointer;
	}
`;

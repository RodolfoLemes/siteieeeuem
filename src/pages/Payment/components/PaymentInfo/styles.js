import styled from 'styled-components';
import colors from '../../colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: 100vw;
	align-items: center;
	background-color: ${colors.background};
`;

export const PaymentInfoTitle = styled.text`
	font-size: 36px;
	font-family: Poppins;
	color: ${colors.white};
`;

export const PaymentInfoText = styled.text`
	font-size: 18px;
	font-family: Poppins;
	margin: 10px 0px;
	color: ${colors.white};
`;

export const QRCode = styled.img`
	height: 350px;
	width: 350px;
`;

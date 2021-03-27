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

export const QRCode = styled.img`
	height: 300px;
	width: 300px;
`;

export const PaymentInfoContainer = styled.div`
	display: flex;
	height: 50px;
	width: 80%;
	border-radius: 25px;
	margin: 10px 0px 25px 0px;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	background-color: ${colors.primary};
`;

export const PaymentInfoIcon = styled.img`
	height: 32px;
	width: 32px;
	padding: 0px 30px;
	transform: rotate(135deg);
`;

export const PaymentInfoText = styled.text`
	width: 100%;
	font-size: 18px;
	font-family: Poppins;
	margin: 10px 0px;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 1;
	color: ${colors.white};
`;

export const PaymentInfoCopyTextButton = styled.button`
	height: 50px;
	width: auto;
	padding: 0px 25px;
	border-radius: 25px;
	font-size: 16px;
	color: ${colors.white};
	font-family: Poppins;
	box-sizing: border-box;
	border-width: 0px;
	background-color: ${colors.tomato};
	transition: all 0.5s ease;

	&:hover {
		cursor: pointer;
	}
`;

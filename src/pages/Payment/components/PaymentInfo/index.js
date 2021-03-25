import React from 'react';
import { Container, PaymentInfoTitle, PaymentInfoText, QRCode } from './styles';

function Payment({ title, description, qrcode }) {
	return (
		<Container>
			<PaymentInfoTitle>{title}</PaymentInfoTitle>

			<PaymentInfoText>{description}</PaymentInfoText>

			<QRCode
				src={require('../../../../assets/seel/' + qrcode.toString() + '.png')}
			/>
		</Container>
	);
}

export default Payment;

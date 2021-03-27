import React, { useState } from 'react';
import {
	Container,
	PaymentInfoTitle,
	PaymentInfoText,
	QRCode,
	PaymentInfoContainer,
	PaymentInfoIcon,
	PaymentInfoCopyTextButton,
} from './styles';

import InfoIcon from '../../../../assets/seel/link-outline.svg';

function Payment({ title, description, qrcode }) {
	const [buttonText, setButtonText] = useState('Copiar');
	console.log(buttonText);
	return (
		<Container>
			<PaymentInfoTitle>{title}</PaymentInfoTitle>

			<PaymentInfoContainer>
				<PaymentInfoIcon src={InfoIcon} />
				<PaymentInfoText>{description}</PaymentInfoText>
				<PaymentInfoCopyTextButton
					onClick={() => {
						navigator.clipboard.writeText(description);
						setButtonText('Copiado!');
						setTimeout(() => setButtonText('Copiar'), 2000);
					}}
				>
					{buttonText}
				</PaymentInfoCopyTextButton>
			</PaymentInfoContainer>

			<QRCode
				src={require('../../../../assets/seel/' + qrcode.toString() + '.png')}
			/>
		</Container>
	);
}

export default Payment;

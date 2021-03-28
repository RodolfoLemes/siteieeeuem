import React from 'react';
import {
	Container,
	HeaderTitle,
	InfoText,
	ColoredText,
	BackButton,
	PaymentInfoContainer,
	StyledLink,
} from './styles';

import PaymentInfo from './components/PaymentInfo';

function Payment() {
	return (
		<Container>
			<HeaderTitle>Pagamento</HeaderTitle>

			<InfoText>
				Após efetuar o pagamento, enviar o comprovante via e-mail, junto com seu
				nome completo, para <ColoredText>ivseeluem@gmail.com</ColoredText>.
			</InfoText>

			<PaymentInfoContainer>
				<PaymentInfo title="Pix" description="44998701731" qrcode={'PixQR'} />

				<PaymentInfo
					title="PicPay"
					description="luan.crozatti"
					qrcode={'PicPayQR'}
				/>
			</PaymentInfoContainer>

			<StyledLink to="/seel">
				<BackButton>Voltar para o evento</BackButton>
			</StyledLink>
		</Container>
	);
}

export default Payment;

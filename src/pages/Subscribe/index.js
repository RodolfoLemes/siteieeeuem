import React from 'react';
import {
	Container,
	HeaderTitle,
	FormContainer,
	RowContainer,
	FinishButton,
	InfoText,
	ColoredText,
} from './styles';

import FormInput from './components/FormInput';
import FormSelector from './components/FormSelector';

function Subscribe() {
	return (
		<Container>
			<HeaderTitle>Inscrição</HeaderTitle>

			<FormContainer>
				<RowContainer>
					<FormInput
						labelText="Nome"
						placeholderText="Nome completo"
						rowWidth={48}
					/>
					<FormInput
						labelText="Endereço"
						placeholderText="Rua, número"
						rowWidth={48}
					/>
				</RowContainer>

				<RowContainer>
					<FormInput
						labelText="Instituição de ensino"
						placeholderText="Ex: Universidade Estadual de Maringá"
						rowWidth={48}
					/>
					<FormInput
						labelText="Cidade"
						placeholderText="Ex: Maringá"
						rowWidth={48}
					/>
				</RowContainer>

				<RowContainer>
					<FormInput
						labelText="CEP"
						placeholderText="XXXXX-XXX"
						rowWidth={31}
					/>
					<FormInput
						labelText="Telefone"
						placeholderText="(XX) X XXXX-XXXX"
						rowWidth={31}
					/>
					<FormInput
						labelText="CPF"
						placeholderText="XXX.XXX.XXX-XX"
						rowWidth={31}
					/>
				</RowContainer>

				<RowContainer>
					<FormInput
						labelText="RG"
						placeholderText="XX.XXX.XXX-X"
						rowWidth={31}
					/>
					<FormInput
						labelText="E-mail"
						placeholderText="seuemail@dominio.com"
						rowWidth={65}
					/>
				</RowContainer>

				<RowContainer>
					<FormSelector
						labelText="Possui membresia?"
						rowWidth={31}
						leftText="Sim"
						rightText="Não"
					/>
					<FormInput
						labelText="Membresia"
						placeholderText="XXXXXXXX"
						rowWidth={31}
					/>
					<FormSelector
						labelText="Escolha o produto"
						rowWidth={31}
						leftText="Evento"
						rightText="Evento + kit"
					/>
				</RowContainer>
			</FormContainer>

			<InfoText>
				Ao finalizar a inscrição, você será redirecionado para a página de
				pagamento. As principais formas incluem <ColoredText>Pix</ColoredText> e{' '}
				<ColoredText>PicPay</ColoredText>, caso você queira pagar de outra
				forma, entrar em contato com <ColoredText>(44) 9 9930-5411</ColoredText>
				.
			</InfoText>

			<FinishButton>Finalizar inscrição</FinishButton>
		</Container>
	);
}

export default Subscribe;

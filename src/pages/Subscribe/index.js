import React, { useState } from 'react';
import {
	Container,
	HeaderTitle,
	FormContainer,
	RowContainer,
	FinishButton,
	InfoText,
	ColoredText,
	FormSelectorContainer,
	FormSelectorLabel,
	OptionsContainer,
	Option,
	OptionText,
} from './styles';

import FormInput from './components/FormInput';

function Subscribe() {
	const [nameInput, setNameInput] = useState(null);
	const [addressInput, setAddressInput] = useState(null);
	const [institutionInput, setInstitutionInput] = useState(null);
	const [cityInput, setCityInput] = useState(null);
	const [cepInput, setCepInput] = useState(null);
	const [phoneInput, setPhoneInput] = useState(null);
	const [cpfInput, setCpfInput] = useState(null);
	const [rgInput, setRgInput] = useState(null);
	const [emailInput, setEmailInput] = useState(null);
	const [membershipSelector, setMembershipSelector] = useState(null);
	const [membershipInput, setMembershipInput] = useState(null);
	const [productSelector, setProductSelector] = useState(null);
	return (
		<Container>
			<HeaderTitle>Inscrição</HeaderTitle>

			<FormContainer>
				<RowContainer>
					<FormInput
						labelText="Nome"
						placeholderText="Nome completo"
						rowWidth={48}
						onchange={() => setNameInput(nameInput)}
					/>
					<FormInput
						labelText="Endereço"
						placeholderText="Rua, número"
						rowWidth={48}
						onchange={() => setAddressInput(addressInput)}
					/>
				</RowContainer>

				<RowContainer>
					<FormInput
						labelText="Instituição de ensino"
						placeholderText="Ex: Universidade Estadual de Maringá"
						rowWidth={48}
						onchange={() => setInstitutionInput(institutionInput)}
					/>
					<FormInput
						labelText="Cidade"
						placeholderText="Ex: Maringá"
						rowWidth={48}
						onchange={() => setCityInput(cityInput)}
					/>
				</RowContainer>

				<RowContainer>
					<FormInput
						labelText="CEP"
						placeholderText="XXXXX-XXX"
						type="number"
						rowWidth={31}
						onchange={() => setCepInput(cepInput)}
					/>
					<FormInput
						labelText="Telefone"
						placeholderText="(XX) X XXXX-XXXX"
						type="tel"
						rowWidth={31}
						onchange={() => setPhoneInput(phoneInput)}
					/>
					<FormInput
						labelText="CPF"
						placeholderText="XXX.XXX.XXX-XX"
						type="number"
						rowWidth={31}
						onchange={() => setCpfInput(cpfInput)}
					/>
				</RowContainer>

				<RowContainer>
					<FormInput
						labelText="RG"
						placeholderText="XX.XXX.XXX-X"
						type="number"
						rowWidth={31}
						onchange={() => setRgInput(rgInput)}
					/>
					<FormInput
						labelText="E-mail"
						placeholderText="seuemail@dominio.com"
						type="email"
						rowWidth={65}
						onchange={() => setEmailInput(emailInput)}
					/>
				</RowContainer>

				<RowContainer>
					<FormSelectorContainer rowWidth={31}>
						<FormSelectorLabel>Possui membresia?</FormSelectorLabel>
						<OptionsContainer>
							<Option
								type="radio"
								checked={membershipSelector}
								onClick={() => setMembershipSelector(true)}
							/>
							<OptionText>Sim</OptionText>
							<Option
								type="radio"
								checked={!membershipSelector}
								onClick={() => setMembershipSelector(false)}
							/>
							<OptionText>Não</OptionText>
						</OptionsContainer>
					</FormSelectorContainer>

					<FormInput
						labelText="Membresia"
						placeholderText="XXXXXXXX"
						type="number"
						rowWidth={31}
						onchange={() => setMembershipInput(membershipInput)}
					/>

					<FormSelectorContainer rowWidth={31}>
						<FormSelectorLabel>Escolha o produto</FormSelectorLabel>
						<OptionsContainer>
							<Option
								type="radio"
								checked={productSelector}
								onClick={() => setProductSelector(true)}
							/>
							<OptionText>Evento</OptionText>
							<Option
								type="radio"
								checked={!productSelector}
								onClick={() => setProductSelector(false)}
							/>
							<OptionText>Evento + kit</OptionText>
						</OptionsContainer>
					</FormSelectorContainer>
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

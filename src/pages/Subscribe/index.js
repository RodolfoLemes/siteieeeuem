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
	const [name, setName] = useState(null);
	const [address, setAddress] = useState(null);
	const [university, setUniversity] = useState(null);
	const [city, setCity] = useState(null);
	const [cep, setCep] = useState(null);
	const [phone, setPhone] = useState(null);
	const [cpf, setCpf] = useState(null);
	const [rg, setRg] = useState(null);
	const [email, setEmail] = useState(null);
	const [membershipSelector, setMembershipSelector] = useState(null);
	const [membership, setMembership] = useState(null);
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
						onchange={() => setName(name)}
					/>
					<FormInput
						labelText="Endereço"
						placeholderText="Rua, número"
						rowWidth={48}
						onchange={() => setAddress(address)}
					/>
				</RowContainer>

				<RowContainer>
					<FormInput
						labelText="Instituição de ensino"
						placeholderText="Ex: Universidade Estadual de Maringá"
						rowWidth={48}
						onchange={() => setUniversity(university)}
					/>
					<FormInput
						labelText="Cidade"
						placeholderText="Ex: Maringá"
						rowWidth={48}
						onchange={() => setCity(city)}
					/>
				</RowContainer>

				<RowContainer>
					<FormInput
						labelText="CEP"
						placeholderText="XXXXX-XXX"
						type="number"
						rowWidth={31}
						onchange={() => setCep(cep)}
					/>
					<FormInput
						labelText="Telefone"
						placeholderText="(XX) X XXXX-XXXX"
						type="tel"
						rowWidth={31}
						onchange={() => setPhone(phone)}
					/>
					<FormInput
						labelText="CPF"
						placeholderText="XXX.XXX.XXX-XX"
						type="number"
						rowWidth={31}
						onchange={() => setCpf(cpf)}
					/>
				</RowContainer>

				<RowContainer>
					<FormInput
						labelText="RG"
						placeholderText="XX.XXX.XXX-X"
						type="number"
						rowWidth={31}
						onchange={() => setRg(rg)}
					/>
					<FormInput
						labelText="E-mail"
						placeholderText="seuemail@dominio.com"
						type="email"
						rowWidth={65}
						onchange={() => setEmail(email)}
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
						onchange={() => setMembership(membership)}
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

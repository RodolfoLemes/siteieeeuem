import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
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
	ErrorText,
} from './styles';

import SeelProviders from '../../providers/SeelProviders';
import FormInput from './components/FormInput';
import colors from '../../colors';

function Subscribe() {
	const history = useHistory();

	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [university, setUniversity] = useState('');
	const [city, setCity] = useState('');
	const [cep, setCep] = useState('');
	const [phone, setPhone] = useState('');
	const [cpf, setCpf] = useState('');
	const [rg, setRg] = useState('');
	const [email, setEmail] = useState('');
	const [membershipSelector, setMembershipSelector] = useState(false);
	const [membership, setMembership] = useState('');
	const [productSelector, setProductSelector] = useState(true);

	const [clickable, setClickable] = useState(false);
	const [loading, isLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(
		function openSubscriber() {
			if (
				name.length > 1 &&
				address.length > 1 &&
				university.length > 1 &&
				city.length > 1 &&
				cep.length > 1 &&
				phone.length > 1 &&
				cpf.length > 1 &&
				rg.length > 1 &&
				email.length > 1
			) {
				setClickable(true);
			} else {
				setClickable(false);
			}
		},
		[name, address, university, city, cep, phone, cpf, rg, email],
	);

	async function handleSubscriber(e) {
		e.preventDefault();
		setClickable(false);
		isLoading(true);
		try {
			await SeelProviders.subscriber({
				name,
				address,
				university,
				city,
				cep,
				phone,
				cpf,
				rg,
				email,
				membership,
				productSelector,
			});

			isLoading(false);
			history.push('/seel/payment');
		} catch (err) {
			if (err.response.data.message === 'celebrate request validation failed') {
				setError(err.response.data.validation.body.message);
			} else {
				setError(err.response.data.message);
			}
			setClickable(true);
			isLoading(false);
		}
	}

	return (
		<Container>
			<HeaderTitle>Inscrição</HeaderTitle>

			<FormContainer>
				<RowContainer>
					<FormInput
						labelText="Nome"
						placeholderText="Nome completo"
						rowWidth={48}
						value={name}
						onChange={setName}
					/>
					<FormInput
						labelText="Endereço"
						placeholderText="Rua, número"
						rowWidth={48}
						value={address}
						onChange={setAddress}
					/>
				</RowContainer>

				<RowContainer>
					<FormInput
						labelText="Instituição de ensino"
						placeholderText="Ex: Universidade Estadual de Maringá"
						rowWidth={48}
						value={university}
						onChange={setUniversity}
					/>
					<FormInput
						labelText="Cidade"
						placeholderText="Ex: Maringá"
						rowWidth={48}
						value={city}
						onChange={setCity}
					/>
				</RowContainer>

				<RowContainer>
					<FormInput
						labelText="CEP"
						placeholderText="XXXXX-XXX"
						type="number"
						rowWidth={31}
						value={cep}
						onChange={setCep}
					/>
					<FormInput
						labelText="Telefone"
						placeholderText="(XX) X XXXX-XXXX"
						type="tel"
						rowWidth={31}
						value={phone}
						onChange={setPhone}
					/>
					<FormInput
						labelText="CPF"
						placeholderText="XXX.XXX.XXX-XX"
						type="number"
						rowWidth={31}
						value={cpf}
						onChange={setCpf}
					/>
				</RowContainer>

				<RowContainer>
					<FormInput
						labelText="RG"
						placeholderText="XX.XXX.XXX-X"
						type="number"
						rowWidth={31}
						value={rg}
						onChange={setRg}
					/>
					<FormInput
						labelText="E-mail"
						placeholderText="seuemail@dominio.com"
						type="email"
						rowWidth={65}
						value={email}
						onChange={setEmail}
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
						disabled={!membershipSelector}
						value={membership}
						onChange={setMembership}
					/>

					<FormSelectorContainer rowWidth={31}>
						<FormSelectorLabel>Escolha o produto</FormSelectorLabel>
						<OptionsContainer>
							<Option
								type="radio"
								checked={productSelector}
								onClick={() => setProductSelector(true)}
							/>
							<OptionText>Evento - R$25,00</OptionText>
							<Option
								type="radio"
								checked={!productSelector}
								onClick={() => setProductSelector(false)}
							/>
							<OptionText>Evento + kit - R$50,00</OptionText>
						</OptionsContainer>
					</FormSelectorContainer>
				</RowContainer>

				<RowContainer>
					<FormSelectorContainer rowWidth={31}>
						<FormSelectorLabel>Escolha um dos cursos</FormSelectorLabel>
						<OptionsContainer>
							<Option
								type="radio"
								checked={productSelector}
								onClick={() => setProductSelector(true)}
							/>
							<OptionText>curso 1</OptionText>
							<Option
								type="radio"
								checked={!productSelector}
								onClick={() => setProductSelector(false)}
							/>
							<OptionText>curso 2</OptionText>
						</OptionsContainer>
					</FormSelectorContainer>

					<FormSelectorContainer rowWidth={31}>
						<FormSelectorLabel>Escolha um dos cursos</FormSelectorLabel>
						<OptionsContainer>
							<Option
								type="radio"
								checked={productSelector}
								onClick={() => setProductSelector(true)}
							/>
							<OptionText>curso 1</OptionText>
							<Option
								type="radio"
								checked={!productSelector}
								onClick={() => setProductSelector(false)}
							/>
							<OptionText>curso 2</OptionText>
						</OptionsContainer>
					</FormSelectorContainer>

					<FormSelectorContainer rowWidth={31}>
						<FormSelectorLabel>Escolha um dos cursos</FormSelectorLabel>
						<OptionsContainer>
							<Option
								type="radio"
								checked={productSelector}
								onClick={() => setProductSelector(true)}
							/>
							<OptionText>curso 1</OptionText>
							<Option
								type="radio"
								checked={!productSelector}
								onClick={() => setProductSelector(false)}
							/>
							<OptionText>curso 2</OptionText>
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

			{error && <ErrorText>{error}</ErrorText>}

			<FinishButton
				onClick={handleSubscriber}
				disabled={!clickable}
				propVisible={loading}
			>
				Finalizar inscrição
			</FinishButton>

			<Loader
				type="ThreeDots"
				color={colors.white}
				height={60}
				width={60}
				visible={loading}
			/>
		</Container>
	);
}

export default Subscribe;

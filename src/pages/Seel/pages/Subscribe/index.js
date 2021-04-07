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
	OptionContainer,
	Option,
	OptionText,
	ErrorText,
} from './styles';

import Footer from '../../components/Footer';
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
	const [membership, setMembership] = useState(undefined);
	const [productSelector, setProductSelector] = useState(true);
	const [courseOne, setCourseOne] = useState(false);
	const [courseTwo, setCourseTwo] = useState(false);
	const [courseThree, setCourseThree] = useState(false);

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

		// Adicionar os nomes dos cursos reais aqui
		const courses = [];
		courses.push(
			courseOne
				? 'Introdução ao Data Science com aplicações'
				: 'Design de PCB + STM32',
		);
		courses.push(
			courseTwo
				? 'Sistemas fotovoltaicos'
				: 'Como inserir meu produto no mercado?',
		);
		courses.push(
			courseThree ? 'Sistemas de Controle usando Julia' : 'Empreendedorismo',
		);

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
				courses,
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
							<OptionContainer>
								<Option
									type="radio"
									checked={membershipSelector}
									onClick={() => setMembershipSelector(true)}
								/>
								<OptionText>Sim</OptionText>
							</OptionContainer>
							<OptionContainer>
								<Option
									type="radio"
									checked={!membershipSelector}
									onClick={() => setMembershipSelector(false)}
								/>
								<OptionText>Não</OptionText>
							</OptionContainer>
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
							<OptionContainer>
								<Option
									type="radio"
									checked={productSelector}
									onClick={() => setProductSelector(true)}
								/>
								<OptionText>Evento - R$25,00</OptionText>
							</OptionContainer>
							<OptionContainer>
								<Option
									type="radio"
									checked={!productSelector}
									onClick={() => setProductSelector(false)}
								/>
								<OptionText>Evento + kit - R$50,00</OptionText>
							</OptionContainer>
						</OptionsContainer>
					</FormSelectorContainer>
				</RowContainer>

				<RowContainer>
					<FormSelectorContainer rowWidth={31}>
						<FormSelectorLabel>Escolha um dos cursos</FormSelectorLabel>
						<OptionsContainer>
							<OptionContainer>
								<Option
									type="radio"
									checked={courseOne}
									onClick={() => setCourseOne(true)}
								/>
								<OptionText>
									Introdução ao Data Science com aplicações
								</OptionText>
							</OptionContainer>
							<OptionContainer>
								<Option
									type="radio"
									checked={!courseOne}
									onClick={() => setCourseOne(false)}
								/>
								<OptionText>Design de PCB + STM32</OptionText>
							</OptionContainer>
						</OptionsContainer>
					</FormSelectorContainer>

					<FormSelectorContainer rowWidth={31}>
						<FormSelectorLabel>Escolha um dos cursos</FormSelectorLabel>
						<OptionsContainer>
							<OptionContainer>
								<Option
									type="radio"
									checked={courseTwo}
									onClick={() => setCourseTwo(true)}
								/>
								<OptionText>Sistemas fotovoltaicos</OptionText>
							</OptionContainer>
							<OptionContainer>
								<Option
									type="radio"
									checked={!courseTwo}
									onClick={() => setCourseTwo(false)}
								/>
								<OptionText>Como inserir meu produto no mercado?</OptionText>
							</OptionContainer>
						</OptionsContainer>
					</FormSelectorContainer>

					<FormSelectorContainer rowWidth={31}>
						<FormSelectorLabel>Escolha um dos cursos</FormSelectorLabel>
						<OptionsContainer>
							<OptionContainer>
								<Option
									type="radio"
									checked={courseThree}
									onClick={() => setCourseThree(true)}
								/>
								<OptionText>Sistemas de Controle usando Julia</OptionText>
							</OptionContainer>
							<OptionContainer>
								<Option
									type="radio"
									checked={!courseThree}
									onClick={() => setCourseThree(false)}
								/>
								<OptionText>Empreendedorismo</OptionText>
							</OptionContainer>
						</OptionsContainer>
					</FormSelectorContainer>
				</RowContainer>
			</FormContainer>

			<InfoText>
				Ao finalizar a inscrição, você será redirecionado para a página de
				pagamento. As principais formas incluem <ColoredText>Pix</ColoredText> e{' '}
				<ColoredText>PicPay</ColoredText>, caso você queira pagar de outra
				forma, entrar em contato com{' '}
				<ColoredText>Lucas Força: (44) 9 9930-5411</ColoredText>.
			</InfoText>

			<InfoText>
				* Para pessoas fora de Maringá - PR,{' '}
				<ColoredText>o envio e pagamento do frete</ColoredText> serão combinados
				via contado com <ColoredText>Lucas Bento: (44) 9 9128-4128</ColoredText>
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

			<Footer />
		</Container>
	);
}

export default Subscribe;

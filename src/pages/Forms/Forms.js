import React, { useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import ReCAPTCHA from 'react-google-recaptcha';

import api from '../../utils/api';
import { Courses } from '../../constants/constants';
import Header from '../../components/Header/Header';
import './Forms.css';

function isEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

function Forms() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [select, setSelect] = useState('');
	const [other, setOther] = useState('');
	const [loading, isLoading] = useState(false);
	const [captcha, isCaptcha] = useState(false);

	const otherRef = useRef();
	const history = useHistory();
	const { course } = useParams();

	const Course = Courses.find(element => element.route === course);

	if (!Course) return null;
	if (!Course.clickable) return null;
	if (Course.dates[0].getTime() - Date.now() < 0) return null;

	async function handleSubmit() {
		if (name != '' && email != '' && select != '') {
			if (!isEmail(email)) {
				alert('Insira um email válido');
				return;
			}
			if (!captcha) {
				alert('Você é um robô!?');
				return;
			}
			isLoading(true);
			const response = await api.post('course/create', {
				name,
				email,
				select: select === 'outro' ? other : select,
				courseName: Course.title,
			});
			isLoading(false);
			if (response.data) {
				alert(
					'Inscrição concluida! Um e-mail de confirmação foi enviado com sucesso.',
				);
				history.push('');
			} else {
				alert('Algo deu errado. Socorro!');
				return;
			}
		} else {
			alert('Cadastre todos os campos para prosseguir!');
			return;
		}
	}

	async function sendCaptcha(e) {
		const response = await api.post('api/reCaptcha', {
			response: e,
		});

		if (response.data.success) {
			isCaptcha(true);
		}
	}

	return (
		<div className="Forms">
			<Header />
			<div className="pageForms">
				{loading ? (
					<div className="dotLoaderView">
						<DotLoader
							margin={10}
							size={200}
							color={'#344ea9'}
							loading={true}
						/>
					</div>
				) : (
					<form className="formsCourse">
						<text className="formsTitle">{'Curso de ' + Course.title}</text>

						<div
							dangerouslySetInnerHTML={{ __html: Course.description || null }}
						/>

						<text className="formsDescription">
							{Course.route === 'energia'
								? 'Preencha esse formulário para se inscrever na mesa redonda :D'
								: 'Preencha esse formulário para se inscrever no nosso curso. :D'}
							<br />
							{Course.dates.map((element, index) => {
								return (
									<React.Fragment>
										{/* {element.getTimezoneOffset() == 180 
                        ? `${index + 1}° - ${element.getDate()}/${element.getMonth() + 1} as ${element.getHours()}:${element.getMinutes() < 10 ? '0' + element.getMinutes() : element.getMinutes()}h`
                        : `${index + 1}° - ${element.getDate()}/${element.getMonth() + 1} as ${}`
                      } */}
										{`${index + 1}° - ${element.getDate()}/${
											element.getMonth() + 1
										} as ${element.toLocaleTimeString(
											'pt-BR',
										)}, no horario de brasília.`}
										<br />
									</React.Fragment>
								);
							})}
							Qualquer dúvida, entre em contato conosco: ieeeuem@gmail.com.
						</text>

						<label className="formsName">
							<text className="formsNameTitle">Nome:</text>
							<input
								type="text"
								className="formsNameText"
								placeholder="Nome completo"
								value={name}
								onChange={name => setName(name.target.value)}
							/>
						</label>

						<label className="formsName">
							<text className="formsNameTitle">Email:</text>
							<input
								type="text"
								className="formsNameText"
								placeholder="Principal e-mail"
								value={email}
								onChange={email => setEmail(email.target.value)}
							/>
						</label>

						<label className="formsRadio">
							<text className="formsRadioTitle">Onde ouviu falar de nós?</text>
							<label className="formsRadioLabel">
								<input
									type="radio"
									className="formsRadioLabelInput"
									value="membro"
									checked={select === 'membro'}
									onChange={select => setSelect(select.target.value)}
								/>
								Sou membro IEEE UEM
							</label>
							<label className="formsRadioLabel">
								<input
									type="radio"
									className="formsRadioLabelInput"
									value="colaborador"
									checked={select === 'colaborador'}
									onChange={select => setSelect(select.target.value)}
								/>
								Sou colaborador IEEE UEM
							</label>
							<label className="formsRadioLabel">
								<input
									type="radio"
									className="formsRadioLabelInput"
									value="instagram"
									checked={select === 'instagram'}
									onChange={select => setSelect(select.target.value)}
								/>
								Instagram IEEE UEM
							</label>
							<label className="formsRadioLabel">
								<input
									type="radio"
									className="formsRadioLabelInput"
									value="amigo"
									checked={select === 'amigo'}
									onChange={select => setSelect(select.target.value)}
								/>
								Recomendação de amigo
							</label>
							<label className="formsRadioLabel">
								<input
									type="radio"
									className="formsRadioLabelInput"
									value="outro"
									checked={select === 'outro'}
									onChange={select => {
										setSelect(select.target.value);
										otherRef.current.focus();
									}}
								/>
								<input
									type="text"
									ref={otherRef}
									className="formsRadioLabelOther"
									readOnly={select !== 'outro'}
									value={other}
									onChange={other => setOther(other.target.value)}
									placeholder="Outro..."
								/>
							</label>
						</label>

						<label className="formsCaptcha">
							<ReCAPTCHA
								sitekey="6LeOI6sZAAAAANKo_cspe6_Sgdgd28mQgwjwZGk5"
								onChange={sendCaptcha}
							/>
						</label>

						<div className="formsSubmit">
							<input
								type="button"
								className="formsSubmitBtn"
								value="Enviar"
								onClick={handleSubmit}
							/>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}

export default Forms;

import React, { useState, useContext } from 'react'
import Iframe from 'react-iframe'
import { Instagram, Facebook } from '@material-ui/icons';

import './Footer.css'
import transporter from '../../utils/mailer'
import DimensionContext from '../../context/dimension'
import { urlMap } from '../../constants/urls'

const ieeeUemEmail = ''

function isEmail(email) {
	var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function Footer(props) {
	const { width, height } = useContext(DimensionContext)

	if(props.blogPage) {
		var { blogPage } = props
	} else {
		blogPage = false
	}

	const [email, setEmail] = useState('')
	const [msg, setMsg] = useState('')

	async function sendEmail() {
		if(email !== '' && msg !== '') {
			if(isEmail(email)) {
				let info = await transporter.sendMail({
					from: email, // sender address
					to: ieeeUemEmail, // list of receivers
					subject: "CONTATO", // Subject line
					text: msg, // plain text body
				})

				if(info) {
					console.log("TORBA")
				}
			}
		}
	}
	
	return (
		<footer id='footer' className='pageFooter' style={{ backgroundColor:'#292E56' }}>
			<div className='contactTopView' style={{ width: blogPage ? width*0.9 : width, marginRight: blogPage ? width*0.2 : 0  }}>
				<p className='contactTitle' style={{ fontSize: height/17 }}>CONTATO</p>
			</div>
			<div className='contactBottomView' style={{ width: blogPage ? width*0.9 : width, marginRight: blogPage ? width*0.2 : 0 }}>
				<div className='contactBottomLeftView'>
					<div className='contactSubtitleView'>
						<p className='contactSubtitleText'>FALE CONOSCO</p>
					</div>
					<textarea 
						className='contactEmailInput'
						placeholder='Digite seu e-mail'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					></textarea>
					<textarea 
						className='contactMessageInput'
						placeholder='Nos envie uma mensagem!'
						value={msg}
						onChange={(event) => setMsg(event.target.value)}
					></textarea>
					<button 
						className='contactSendButton'
						onClick={sendEmail}>Enviar</button>
				</div>
				<div className='contactBottomRightView'>
					<div className='corner-wrapper'>
						<Iframe
							src={urlMap}
							frameborder="0"
							style={{ border: 0 }}
							allowfullscreen="" 
							aria-hidden="false" 
							tabindex="0"
							width='100%'
							height='100%'>
						</Iframe>
					</div>
					<p className='contactBottomRightText' style={{ marginTop: '2%' }}>Universidade Estadual de Maringá</p>
					<p className='contactBottomRightText'>Avenida Colombo, 5970</p>
					<p className='contactBottomRightText'>ieeeuem@gmail.com</p>
					<div className='socialMediaFooter'>
						<a className='socialMediaFooterIcon' target="_blank" href='https://www.instagram.com/ieeeuem/'>
							<Instagram style={{ height: height/25, width: height/25, color: '#F1F4FD' }}/>
						</a>
						<a className='socialMediaFooterIcon' target="_blank" href='https://pt-br.facebook.com/ieeeuem/'>
							<Facebook style={{ height: height/25, width: height/25, color: '#F1F4FD' }}/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
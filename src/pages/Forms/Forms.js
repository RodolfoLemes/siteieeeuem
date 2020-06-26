import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { DotLoader } from 'react-spinners'

import api from '../../utils/api'
import { Courses } from '../../constants/constants'
import Header from '../../components/Header/Header'
import './Forms.css'

function isEmail(email) {
	var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function Forms() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [select, setSelect] = useState('')
  const [other, setOther] = useState('')
  const [loading, isLoading] = useState(false)

  const history = useHistory()
  const { course } = useParams()

  const Course = Courses.find(element => element.route === course)

  if(!Course) {
    return null
  }

  async function handleSubmit() {
    if(name != '' && email != '' && select != '') {
      if(!isEmail(email)) {
        alert('Insira um email válido')
        return
      }
      isLoading(true)
      const response = await api.post('course/create', {
        name,
        email,
        select: select === 'outro' ? other : select,
        courseName: Course.title
      })
      isLoading(false)
      if(response.data) {
        alert('Inscrição concluida! Um e-mail de confirmação foi enviado com sucesso.')
        history.push("")
      } else {
        alert('Algo deu errado. Socorro!')
        return
      }
    } else {
      alert('Cadastre todos os campos para prosseguir!')
      return
    }
  }



  return (
    <div className='Forms'>
      <Header />
      <div className='pageForms'>
        { loading
          ? (<DotLoader
              margin={10}
              size={200}
              color={"#344ea9"}
              loading={true}
            />)
          : (
            <form className='formsCourse'>
              <text className='formsTitle'>{'Curso de ' + Course.title }</text>

              <text className='formsDescription'>
                Preencha esse formulário para se inscrever no nosso curso. :D
                <br/>
                {Course.dates.map((element, index) => {
                  return (
                    <React.Fragment>
                      {`${index + 1}° - ${element.getDate()}/${element.getMonth() + 1} as ${element.getHours()}:${element.getMinutes() < 10 ? '0' + element.getMinutes() : element.getMinutes()}h`}
                      <br/>
                    </React.Fragment>
                    )
                })}
                Qualquer dúvida, entre em contato conosco: ieeeuem@gmail.com.
              </text>
              
              <label className='formsName'>
                <text className='formsNameTitle'>Nome:</text>
                <input type='text' className='formsNameText' placeholder='Nome completo' value={name} onChange={name => setName(name.target.value)}/>
              </label>

              <label className='formsName'>
                <text className='formsNameTitle'>Email:</text>
                <input type='text' className='formsNameText' placeholder='Principal e-mail' value={email} onChange={email => setEmail(email.target.value)}/>
              </label>

              <label className='formsRadio'>
                <text className='formsRadioTitle'>Onde ouviu falar de nós?</text>
                <label className='formsRadioLabel'>
                  <input type='radio' className='formsRadioLabelInput' value="membro" checked={select === 'membro'} onChange={select => setSelect(select.target.value)}/>
                  Sou membro IEEE UEM
                </label>
                <label className='formsRadioLabel'>
                  <input type='radio' className='formsRadioLabelInput' value="colaborador" checked={select === 'colaborador'} onChange={select => setSelect(select.target.value)}/>
                  Sou colaborador IEEE UEM
                </label>
                <label className='formsRadioLabel'>
                  <input type='radio' className='formsRadioLabelInput' value="instagram" checked={select === 'instagram'} onChange={select => setSelect(select.target.value)}/>
                  Instagram IEEE UEM
                </label>
                <label className='formsRadioLabel'>
                  <input type='radio' className='formsRadioLabelInput' value="amigo" checked={select === 'amigo'} onChange={select => setSelect(select.target.value)}/>
                  Recomendação de amigo
                </label>
                <label className='formsRadioLabel'>
                  <input type='radio' className='formsRadioLabelInput' value='outro' checked={select === 'outro'} onChange={select => setSelect(select.target.value)}/>
                  <input type='text' className='formsRadioLabelOther' readOnly={select !== 'outro'} value={other} onChange={other => setOther(other.target.value)} placeholder='Outro...'/>
                </label>
                
              </label>
              <div className='formsSubmit'>
                <input type='button' className='formsSubmitBtn' value='Enviar' onClick={handleSubmit} />
              </div>
            </form>
          ) }
      </div>
    </div>
  )
}

export default Forms
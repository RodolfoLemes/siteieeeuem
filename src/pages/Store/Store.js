import React, { useContext, useState, useRef, useEffect } from 'react'
import  Lottie  from  'lottie-web-react'

import './Store.css';
import api from '../../utils/api'
import ExpansiveCards from '../../components/ExpansiveCards/ExpansiveCards'
import DimensionContext from '../../context/dimension'
import Header from '../../components/Header/Header'
import { Courses } from '../../constants/constants'

const renderer = 'svg'
let watchAnimationData = require('../../assets/maintenceAnm.json')
const  rendererSettings = {
  preserveAspectRatio:  'xMinYMin slice',
}

function Store() {

  const { width, height } = useContext(DimensionContext)

  const refCourses = useRef()

  const [expandCourse, isExpandCourse] = useState(false)
  const [playingState] = useState('play')
  const [autoplay] = useState(false)
  const [loop] = useState(true)
  //const [path] = useState('https://assets2.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json')
  const [animationData] = useState(watchAnimationData)
  const [speed] = useState(1)
  const [direction] = useState(1)

  return (
    <div className='Store'>
      <Header />
      <div className='pageStore'>
        {/* <p className='maintenceText'>EM MANUTENÇÃO</p>
        <div className='animation'>
          <Lottie
            options={{
              renderer: renderer,
              loop: loop,
              autoplay: autoplay,
              //path:  path,
              animationData: animationData,
              rendererSettings: rendererSettings
            }}
            playingState={playingState}
            speed={speed}
            direction={direction}
          />
        </div> */}
        <ExpansiveCards
          ref={refCourses}
          nameItens='CURSOS'
          itens={Courses}
          expand={expandCourse}
          onClick={() => {refCourses.current.scrollIntoView({behavior: 'instant'}); isExpandCourse(!expandCourse)}}
          itensPerLine={width > 768 ? 3 : 2}
          itensWithoutExpansive={6}
          clickable={true}
        />
      </div>


    </div>
  );
}

export default Store
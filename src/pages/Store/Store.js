import React, { useContext, useEffect, useState } from 'react'
import './Store.css';
import  Lottie  from  'lottie-web-react'

import DimensionContext from '../../context/dimension'
import Header from '../../components/Header/Header'

const renderer = 'svg'
let watchAnimationData = require('../../assets/maintenceAnm.json')
const  rendererSettings = {
preserveAspectRatio:  'xMinYMin slice',
}

function Store() {

  const { width, height } = useContext(DimensionContext)

  const [playingState, setPlayingState] = useState('play')
  const [autoplay, setAutoplay] = useState(false)
  const [loop, setLoop] = useState(true)
  const [path, setPath] = useState('https://assets2.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json')
  const [animationData, setAnimationData] = useState(watchAnimationData)
  const [speed, setSpeed] = useState(1)
  const [direction, setDirection] = useState(1)

  return (
    <div className='Store'>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', height: height*7/8, width: width, justifyContent: 'center', backgroundColor: '#aaa' }}>
        <div id='animation' style={{ height:height*0.3, width: width*0.4, marginTop: height*0.1 }}>
          <Lottie
            options={{
            renderer:  renderer,
            loop:  loop,
            autoplay:  autoplay,
            //path:  path,
            animationData:  animationData,
            rendererSettings:  rendererSettings
            }}
            playingState={playingState}
            speed={speed}
            direction={direction}
          />
        </div>
        <p className='maintenceText'>EM MANUTENÇÃO</p>
      </div>


    </div>
  );
}

export default Store
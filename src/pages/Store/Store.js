import React, { useContext, useState } from 'react'
import  Lottie  from  'lottie-web-react'

import './Store.css';
import DimensionContext from '../../context/dimension'
import Header from '../../components/Header/Header'

const renderer = 'svg'
let watchAnimationData = require('../../assets/maintenceAnm.json')
const  rendererSettings = {
  preserveAspectRatio:  'xMinYMin slice',
}

function Store() {

  const { width, height } = useContext(DimensionContext)

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
      <div style={{ display: 'flex', flexDirection: 'column', height: height*7/8, width: width, justifyContent: 'center', backgroundColor: '#aaa' }}>
        <div id='animation' style={{ height:height*0.3, width: width*0.4, marginTop: height*0.1 }}>
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
        </div>
        <p className='maintenceText'>EM MANUTENÇÃO</p>
      </div>


    </div>
  );
}

export default Store
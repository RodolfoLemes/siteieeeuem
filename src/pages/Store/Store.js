import React, { useEffect, useState } from 'react'
import './Store.css';
import  Lottie  from  'lottie-web-react'
import Header from '../../components/Header/Header'

const renderer = 'svg'
let watchAnimationData = require('../../assets/maintenceAnm.json')
const  rendererSettings = {
preserveAspectRatio:  'xMinYMin slice',
}

function Store() {

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
      <div id='animation' style={{ height:500, width: 500 }}>
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
      
    </div>
  );
}

export default Store
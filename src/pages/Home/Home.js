import React, { useContext, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Iframe from 'react-iframe'

// Solução inicial para ter projetos e feitos na pagina home
import { Dones, Projects, projectsNumber, membersNumber } from '../../constants/constants'
import Header from '../../components/Header/Header'
import DimensionContext from '../../context/dimension'
import './Home.css'

import IEEEdesc from '../../assets/Group_70.svg'
import logoPAH from '../../assets/LOGO_PAH.png'
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'

function Home() {
  const { width, height } = useContext(DimensionContext)

  const [expand, isExpand] = useState(false)

  function sliceDones() {
    const slicedDones = []

    let cont = 0
    let buffer = {}
    Dones.map((element, index) => {
      if(cont === 0) {
        buffer.title1 = element.title
        buffer.description1 = element.description
        cont++
        if(index + 1 === Dones.length) {
          slicedDones.push(buffer)
        }
      } else {
        buffer.title2 = element.title
        buffer.description2 = element.description
        slicedDones.push(buffer)
        buffer = {}
        cont = 0
      }

      return true
    })

    return slicedDones
  }

  function arrowCarrousel(next, clickHander) {
    const arrowStyles = {
      position: 'absolute',
      zIndex: 2,
      top: height/4,
      width: height/15,
      height: width/12,
      cursor: 'pointer',
    };

    const leftRight = next ? { right : 15 } : { left: 15 } 
    return (
      <input
        className='arrows'
        type="image" 
        src={next ? arrowRight : arrowLeft}
        alt='setas' 
        style={{ ...arrowStyles, ...leftRight }}
        onClick={clickHander}
      />
    )
  }

  const newDones = sliceDones()
  
  return (
    <div className='container' style={{ height: 3.5*height, width: width }}>
      <Header />

      <div className='page' style={{ height: height*(7/8) , width: width }}>
        <div className='bigCard' style={{ height: height/1.5, width: width/2 }}>
          <img src={IEEEdesc} alt="ieeedesc" style={{ height: height/1.8, width: width/2.2 }}/>
        </div>
        <div className='smallCardsView' style={{ height: height/1.5, width: height/3, marginLeft: height*(2/21) }}>
          <div className='smallCard' style={{ height: height/3.5, width: height/3.5, marginBottom: height*(2/21) }}>
            <p className='smallCardText' style={{ fontSize: width/80 }}>Projetos em</p>
            <p className='smallCardText' style={{ fontSize: width/80 }}>andamento</p>
            <p className='smallCardText' style={{ fontSize: width/30, marginTop:height/30 }}>{ projectsNumber }</p>
          </div>
          <div className='smallCard' style={{ height: height/3.5, width: height/3.5 }}>
            <p className='smallCardText' style={{ fontSize: width/80 }}>Membros</p>
            <p className='smallCardText' style={{ fontSize: width/30, marginTop:height/30 }}>{ membersNumber }</p>
          </div>
        </div>
      </div>
      
      <div className='pageProject' style={{ height: height*(7/8) , width: width, backgroundColor:'#292E56' }}>
        <div className='projectTopView' style={{ height: height/12, width: width }}>
          <p className='doneTitle' style={{ fontSize: height/17 }}>FEITOS</p>
        </div>
        <Carousel
          width={width*0.9}
          height={height*(7/8)}
          showStatus={false} 
          showThumbs={false}
          showArrows={false}
          renderArrowNext={(clickHander) => arrowCarrousel(true, clickHander)}
          renderArrowPrev={(clickHander) => arrowCarrousel(false, clickHander)}
        >
          { newDones.map(element => (
              <div className='carouselSlideView'>
                <div 
                  className='blackCard' 
                  style={{ height: height/1.7, width: width/4, marginLeft: width/20, marginRight: width/20, backgroundColor: '#292E56' }}
                >
                  <h1 className='blackCardTitle'>{element.title1}</h1>
                  <p className='blackCardText'>{element.description1}</p>
                </div>
                <div 
                  className='blackCard'
                  style={{ height: height/1.7, width: width/4, marginLeft: width/20, marginRight: width/20, backgroundColor: '#292E56' }}
                >
                  <h1 className='blackCardTitle'>{element.title2}</h1>
                  <p className='blackCardText'>{element.description2}</p>
                </div>
              </div>
            )) 
          }
        </Carousel>
        {/* <img src={arrowLeft} alt="leftArrow" style={{ height: height/6, width: width/5 }}/>
        <div className='blackCard' style={{ height: height/1.5, width: width/4, marginLeft: width/20, marginRight: width/20, backgroundColor: '#292E56' }}>
        </div>
        <div className='blackCard' style={{ height: height/1.5, width: width/4, marginLeft: width/20, marginRight: width/20, backgroundColor: '#292E56' }}>
        </div>
        <img src={arrowRight} alt="rightArrow" style={{ height: height/6, width: width/5 }}/> */}
      </div>
      
      <div className='pageProject' style={{ height: height*(7/8) , width: width }}>
        <div className='projectTopView' style={{ height: height/10, width: width }}>
          <p className='projectTitle' style={{ fontSize: height/17 }}>PROJETOS</p>
        </div>
        <div className='projectBottomView' style={{ height: height*(6/8), width: width }}>
          { Projects.map((element, index) => {
            if(!expand) {
              if(index <= 5) {
                return (<React.Fragment>
                        <div className='smallCard' style={{ height: height/3.5, width: height/3.5, margin: height/21 }}>
                          <p className='smallCardText' style={{ fontSize: width/80, marginBottom: height/80 }}>{element.title}</p>
                          <img className='projectImg' alt={element.title + 'logo'}src={logoPAH}/>
                        </div>
                        { (index + 1) % 3 == 0 
                          ? (<div className='break'></div>)
                          : (null)
                        }
                      </React.Fragment>)
              }
            } else {
              return (<React.Fragment>
                        <div className='smallCard' style={{ height: height/3.5, width: height/3.5, margin: height/21 }}>
                          <p className='smallCardText' style={{ fontSize: width/80, marginBottom: height/80 }}>{element.title}</p>
                          <img className='projectImg' alt={element.title + 'logo'}src={logoPAH}/>
                        </div>
                        { (index + 1) % 3 == 0 
                          ? (<div className='break'></div>)
                          : (null)
                        }
                      </React.Fragment>)
            }
          })}
          { !expand ? (<input type='button' onClick={() => isExpand(true)} />) : (null) }
          </div>
          <div></div>
      </div>
      
      <div className='page' style={{ height: height*(7/8) , width: width, backgroundColor:'#292E56' }}>
        <div className='projectTopView' style={{ height: height/12, width: width }}>
          <p className='doneTitle' style={{ fontSize: height/17 }}>CONTATO</p>
        </div>
        <div style={{ height: height*(6/8), width: width, backgroundColor: '#aaa' }}>
          
        </div>
        <Iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5178.181616037239!2d-51.940431957759465!3d-23.405310627994336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd132b414a555%3A0x70df0f705ab5b5ab!2sUEM%20Bloco%20D67!5e0!3m2!1spt-BR!2sbr!4v1590444587401!5m2!1spt-BR!2sbr"
          frameborder="0"
          style={{ border:0 }}
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0"
          width="640" 
          height="480">
        </Iframe>
      </div>

    </div>
  );
}

export default Home
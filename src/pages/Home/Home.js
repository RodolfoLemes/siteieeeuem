import React, { useContext, useState, useRef } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Iframe from 'react-iframe'

import { Dones, Projects, projectsNumber, membersNumber } from '../../constants/constants'
import { urlMap } from '../../constants/urls'
import Header from '../../components/Header/Header'
import DimensionContext from '../../context/dimension'
import './Home.css'

import IEEEdesc from '../../assets/Group_70.svg'
import logoPAH from '../../assets/LOGO_PAH.png'
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'

function Home() {
  const { width, height } = useContext(DimensionContext)

  const refProjects = useRef()
  const refMembers = useRef()

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
  console.log(height*(7/8)+Math.ceil(Projects.length/3)*height/3)
  console.log(height*(7/8))
  return (
    <div className='container' style={{ width: width }}>
      <Header />

      <div className='page' style={{ height: height*(7/8) , width: width }}>
        <div className='bigCard' style={{ height: height/1.5, width: width/2 }}>
          <img src={IEEEdesc} alt="ieeedesc" style={{ height: height/1.8, width: width/2.2 }}/>
        </div>
        <div className='smallCardsView' style={{ height: height/1.5, width: height/3, marginLeft: height*(2/21) }}>
          <button className='btn' onClick={() => refProjects.current.scrollIntoView({behavior: 'smooth'})}>
            <div className='smallCard' style={{ height: height/3.5, width: height/3.5, marginBottom: height*(2/21) }}>
              <p className='smallCardText' style={{ fontSize: width/80 }}>Projetos em</p>
              <p className='smallCardText' style={{ fontSize: width/80 }}>andamento</p>
              <p className='smallCardText' style={{ fontSize: width/30, marginTop:height/30 }}>{ projectsNumber }</p>
            </div>
          </button>
          <button className='btn' onClick={() => refMembers.current.scrollIntoView({behavior: 'smooth'})}>
            <div className='smallCard' style={{ height: height/3.5, width: height/3.5 }}>
              <p className='smallCardText' style={{ fontSize: width/80 }}>Membros</p>
              <p className='smallCardText' style={{ fontSize: width/30, marginTop:height/30 }}>{ membersNumber }</p>
            </div>
          </button>
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
          { newDones.map((element, index) => (
              <div key={index} className='carouselSlideView'>
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
      </div>
      
      <div ref={refProjects} className='pageProject' style={{ height: expand ? height*(7/8)+Math.ceil((Projects.length-6)/3)*height*8/21 : height*(7/8), width: width }}>
        <div className='projectTopView' style={{ height: height/10, width: width }}>
          <p className='projectTitle' style={{ fontSize: height/17 }}>PROJETOS</p>
        </div>
        <div className='projectBottomView' style={{ height: expand ? height*(6/8)+Math.ceil((Projects.length-6)/3)*height*8/21 : height*(6/8), width: width }}>
          { Projects.map((element, index) => {
            if(!expand) {
              if(index <= 5) {
                return (<React.Fragment key={index}>
                          <div className='smallCard' style={{ height: height/3.5, width: height/3.5, margin: height/21 }}>
                            <p className='smallCardText' style={{ fontSize: width/80, marginBottom: height/80 }}>{element.title}</p>
                            <img className='projectImg' alt={element.title + 'logo'} src={element.img}/>
                          </div>
                          { (index + 1) % 3 === 0 
                            ? (<div className='break'></div>)
                            : (null)
                          }
                        </React.Fragment>)
              } else {
                return (null)
              }
            } else {
              return (<React.Fragment key={index}>
                        <div className='smallCard' style={{ height: height/3.5, width: height/3.5, margin: height/21 }}>
                          <p className='smallCardText' style={{ fontSize: width/80, marginBottom: height/80 }}>{element.title}</p>
                          <img className='projectImg' alt={element.title + 'logo'} src={element.img}/>
                        </div>
                        { (index + 1) % 3 === 0 
                          ? (<div className='break'></div>)
                          : (null)
                        }
                      </React.Fragment>)
            }
          })}
        </div>
      </div>
      
      <div>
        <button style={{ height: 50, width: 100 }} onClick={() => isExpand(!expand)} value="clica em mim" />
      </div>

      {/* <div ref={refMembers}>
        <p>Div dos membros</p>
      </div>
 */}
      <footer style={{ height: height*(7/8) , width: width, backgroundColor:'#292E56' }}>
        <div className='projectTopView' style={{ height: height/12, width: width }}>
          <p className='doneTitle' style={{ fontSize: height/17 }}>CONTATO</p>
        </div>
        <div style={{ height: height*(6/8), width: width, backgroundColor: '#aaa' }}>
        <Iframe 
          src={urlMap}
          frameborder="0"
          style={{ border:0 }}
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0"
          width="640" 
          height="480">
        </Iframe>
        </div>
      </footer>

    </div>
  );
}

export default Home
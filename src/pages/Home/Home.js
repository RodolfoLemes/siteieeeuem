import React, { useContext, useState, useRef } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Chapters, Dones, Projects, projectsNumber, membersNumber } from '../../constants/constants'
import Header from '../../components/Header/Header'
import ExpansiveCards from '../../components/ExpansiveCards/ExpansiveCards'
import Footer from '../../components/Footer/Footer'
import DimensionContext from '../../context/dimension'
import './Home.css'

import IEEEdesc from '../../assets/Group_70.svg'
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'

function Home() {
  const { width, height } = useContext(DimensionContext)

  const refProjects = useRef()
  const refMembers = useRef()

  const [expandProject, isExpandProject] = useState(false)
  const [expandMember, isExpandMember] = useState(false)

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
	
	function sliceChapters() {
    const slicedChapters = []

    let cont = 0
    let buffer = {}
    Chapters.map((element, index) => {
      if(cont === 0) {
        buffer.title1 = element.title
        buffer.description1 = element.description
        cont++
        if(index + 1 === Dones.length) {
          slicedChapters.push(buffer)
        }
      } else {
        buffer.title2 = element.title
        buffer.description2 = element.description
        slicedChapters.push(buffer)
        buffer = {}
        cont = 0
      }

      return true
    })

    return slicedChapters
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
	const newChapters = sliceChapters()
  
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
      
      <ExpansiveCards
        ref={refProjects} 
        nameItens='PROJETOS'
        itens={Projects}
        expand={expandProject}
        onClick={() => {refProjects.current.scrollIntoView({behavior: 'instant'}); isExpandProject(!expandProject)}}
        itensPerLine={3}
        itensWithoutExpansive={6}
      />

			<div className='pageProject' style={{ height: height*(7/8) , width: width, backgroundColor:'#292E56' }}>
        <div className='projectTopView' style={{ height: height/12, width: width }}>
          <p className='doneTitle' style={{ fontSize: height/17 }}>ÁREAS DE ATUAÇÃO</p>
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
          { newChapters.map((element, index) => (
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

      <ExpansiveCards 
        ref={refMembers} 
        nameItens='MEMBROS'
        itens={Projects}
        expand={expandMember}
        onClick={() => {refMembers.current.scrollIntoView({behavior: 'instant'}); isExpandMember(!expandMember)}}
        itensPerLine={3}
        itensWithoutExpansive={5}
      />

      <Footer />
    </div>
  );
}

export default Home
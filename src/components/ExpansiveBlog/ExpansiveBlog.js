import React, { useContext, useState, useRef, forwardRef } from 'react'
import { Link } from 'react-router-dom'

import DimensionContext from '../../context/dimension'
import ArrowBottom from '../../assets/arrowBottom.svg'
import ArrowTop from '../../assets/arrowTop.svg'
import './ExpansiveBlog.css'

const backgroundColor = {
  IEEE: "#344EA9",
  CS: "#FFC34E",
  RAS: "#FF647C",
  PES: "#45EA36",
  BIOENG: "#2D3142"
}

function ExpansiveBlog(props, ref) {
  const { width, height } = useContext(DimensionContext)

  const refDiv = useRef()
  
  const [expand, isExpand] = useState(false)

  const { itens, itensPerLine, itensWithoutExpansive, nameItens } = props

  const heightComponents = {
		page: () => {
			return expand 
				? height*(7/8) + Math.ceil((itens.length-itensWithoutExpansive)/itensPerLine)*height*(8/21) + height/14
				: height*(7/8) + height/14
		},

		bottomView: () => {
			return expand 
			? height*(6/8) + Math.ceil((itens.length-itensWithoutExpansive)/itensPerLine)*height*(8/21)
			: height*(6/8)
		}
	}

  function expansiveClick() {
    refDiv.current.scrollIntoView({behavior: 'instant'}); 
    isExpand(!expand)
    if(props.onClick) props.onClick()
  }

  return (
    <div ref={refDiv} className='blogPageItem' style={{ height: heightComponents.page(), backgroundColor: backgroundColor[nameItens] }}>
        <div ref={ref} className='blogItemTopView'>
          <p className='blogItemTitle'>{ nameItens }</p>
        </div>
        <div className='blogItemBottomView' style={{ height: heightComponents.bottomView()}}>
        { itens.map((element, index) => {
            if(!expand) {
              if(index < itensWithoutExpansive) {
                  return (<React.Fragment key={index}>
                          <div className='blogSmallCard' style={{ height: height/3.5, margin: height/21, backgroundColor: '#f1f4fd', justifyContent: 'flex-start' }}>
                              <div style={{ height: '30%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p className='blogSmallCardText' style={{ fontSize: width/80, marginBottom: height/80 }}>{ element.title }</p>
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'row', height: '50%', width: '100%', justifyContent:'center', alignItems: 'center' }}>
                                <div style={{ height: '100%', width: '55%', marginRight: '5%' }}>
                                  <p style={{ height: '100%', width: '100%', wordWrap: 'break-word', textAlign: 'justify' }}>{ element.description }</p>
                                </div>
                                <img className='itemImg' alt={element.title + 'logo'} src={ element.img } style={{ height: height/6.5, width: height/6.5, borderRadius: 30 }}/>
                              </div>
                          </div>
                          { (index + 1) % itensPerLine === 0 
                            ? (<div className='break'></div>)    
                            : (null)
                          }
                          </React.Fragment>)
              } else {
                  return (null)
              }
            } else {
              return (<React.Fragment key={index}>
                          <div className='smallCard' style={{ height: height/3.5, width: width/3, margin: height/21, backgroundColor: '#f1f4fd', justifyContent: 'flex-start' }}>
                              <div style={{ height: '30%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p className='smallCardText' style={{ fontSize: width/80, marginBottom: height/80 }}>{ element.title }</p>
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'row', height: '50%', width: '100%', justifyContent:'center', alignItems: 'center' }}>
                                <div style={{ height: '100%', width: '55%', marginRight: '5%' }}>
                                  <p style={{ height: '100%', width: '100%', wordWrap: 'break-word', textAlign: 'justify' }}>{ element.description }</p>
                                </div>
                                <img className='itemImg' alt={element.title + 'logo'} src={ element.img } style={{ height: height/6.5, width: height/6.5, borderRadius: 30 }}/>
                              </div>
                          </div>
                          { (index + 1) % itensPerLine === 0 
                            ? (<div className='break'></div>)
                            : (null)
                          }
                      </React.Fragment>)
            }
        })}
        </div>
        <div className='buttonViewBlog'>
          <input
            type="image" 
            src={expand ? ArrowTop : ArrowBottom}
            alt='arrows'
            style={{ height: height/14, width: width/12, cursor: 'pointer' }}
            onClick={expansiveClick}
          />
        </div>
      </div>
  )
}

export default forwardRef(ExpansiveBlog)
import React, { useContext, forwardRef } from 'react'

import './ExpansiveCards.css'
import DimensionContext from '../../context/dimension'
import ArrowBottom from '../../assets/arrowBottom.svg'
import ArrowTop from '../../assets/arrowTop.svg'

function ExpansiveCards(props, ref) {
	const { width, height } = useContext(DimensionContext)

	const { itens, itensPerLine, itensWithoutExpansive, nameItens } = props
	const { expand } = props

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

	return (
		<div ref={ref} className='pageItem' style={{ height: heightComponents.page(), width: width, marginTop: 20, marginBottom: 20 }}>
			<div className='itemTopView' style={{ height: height/10, width: width }}>
				<p className='itemTitle' style={{ fontSize: height/17 }}>{ nameItens }</p>
			</div>
			<div className='itemBottomView' style={{ height: heightComponents.bottomView(), width: width }}>
			{ itens.map((element, index) => {
					if(!expand) {
						if(index < itensWithoutExpansive) {
								return (<React.Fragment key={index}>
												<div className='smallCard' style={{ height: height/3.5, width: height/3.5, margin: height/21 }}>
													<p className='smallCardText' style={{ fontSize: width/80, marginBottom: height/80 }}>{ element.title }</p>
													<img className='itemImg' alt={element.title + 'logo'} src={ element.img }/>
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
												<div className='smallCard' style={{ height: height/3.5, width: height/3.5, margin: height/21 }}>
													<p className='smallCardText' style={{ fontSize: width/80, marginBottom: height/80 }}>{ element.title }</p>
													<img className='itemImg' alt={element.title + 'logo'} src={ element.img }/>
												</div>
												{ (index + 1) % itensPerLine === 0 
													? (<div className='break'></div>)
													: (null)
												}
										</React.Fragment>)
					}
			})}
			</div>
			<div className='buttonView'>
				<input
					type="image" 
					src={expand ? ArrowTop : ArrowBottom}
					alt='arrows'
					style={{ height: height/14, width: width/12, cursor: 'pointer' }}
					onClick={props.onClick}
				/>
			</div>
		</div>
	)
}

export default forwardRef(ExpansiveCards) 
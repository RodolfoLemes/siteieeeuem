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
				? height + Math.ceil((itens.length-itensWithoutExpansive)/itensPerLine)*(width*0.15+height*0.06)
				: height
		},

		bottomView: () => {
			return expand 
			? height*0.75 + Math.ceil((itens.length-itensWithoutExpansive)/itensPerLine)*(width*0.15+height*0.06)
			: height*0.75
		},

		pageCellphone: () => {
			return expand 
				? height + Math.ceil((itens.length-itensWithoutExpansive)/itensPerLine)*(width*0.3+height*0.06)
				: height
		},

		bottomViewCellphone: () => {
			return expand 
			? height*0.75 + Math.ceil((itens.length-itensWithoutExpansive)/itensPerLine)*(width*0.3+height*0.06)
			: height*0.75
		},
	}

	return (
		<div ref={ref} className='pageItem' style={{ height: width > 768 ? heightComponents.page() : heightComponents.pageCellphone() }}>
			<div className='itemTopView'>
				<p className='itemTitle'>{ nameItens }</p>
			</div>
			<div className='itemBottomView' style={{ height: width > 768 ? heightComponents.bottomView() : heightComponents.bottomViewCellphone() }}>
			{ itens.map((element, index) => {
					if(!expand) {
						if(index < itensWithoutExpansive) {
								return (<React.Fragment key={index}>
												<div className='smallCardExpansive'>
													<p className='smallCardTextExpansive'>{ element.title || element.name }</p>
													<img className='itemImgExpansive' alt={element.title + 'logo'} src={ element.img }/>
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
												<div className='smallCardExpansive'>
													<p className='smallCardTextExpansive'>{ element.title || element.name }</p>
													<img className='itemImgExpansive' alt={element.title + 'logo'} src={ element.img }/>
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
					onClick={props.onClick}
					className='arrowButtonExpansive'
				/>
			</div>
		</div>
	)
}

export default forwardRef(ExpansiveCards) 
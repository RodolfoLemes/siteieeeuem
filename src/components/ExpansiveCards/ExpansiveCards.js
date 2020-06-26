import React, { forwardRef } from 'react'

import './ExpansiveCards.css'
import ArrowBottom from '../../assets/arrowBottom.svg'
import ArrowTop from '../../assets/arrowTop.svg'

function ExpansiveCards(props, ref) {

	const { itens, itensPerLine, itensWithoutExpansive, nameItens, clickable } = props
	const { expand } = props

	return (
		<div ref={ref} className='pageItem'>
			<div className='itemTopView'>
				<p className='itemTitle'>{ nameItens }</p>
			</div>
			<div className='itemBottomView'>
			{ itens.map((element, index) => {
				if(!clickable){
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
				} else {
					if(!expand) {
						if(index < itensWithoutExpansive) {
							return (<React.Fragment key={index}>
												<a className='cardBtn' target="_blank" href={ element.link }>
													<div className='smallCardExpansive'>
														<p className='smallCardTextExpansive'>{ element.title || element.name }</p>
														<img className='itemImgExpansive' alt={element.title + 'logo'} src={ element.img }/>
													</div>
												</a>
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
											<a className='cardBtn' target="_blank" href={ element.link }>
												<div className='smallCardExpansive'>
													<p className='smallCardTextExpansive'>{ element.title || element.name }</p>
													<img className='itemImgExpansive' alt={element.title + 'logo'} src={ element.img }/>
												</div>
											</a>
												{ (index + 1) % itensPerLine === 0 
													? (<div className='break'></div>)
													: (null)
												}
										</React.Fragment>)
					}
				}
			})}
			</div>
			<div className='buttonView' style={{ display: itens.length < 7 ? 'none' : 'flex' }}>
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
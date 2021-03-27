import React from 'react';
import {
	Container,
	SectionTitle,
	PartnersContainer,
	PartnerLogo,
} from './styles';

function PartnerSection({ title, data }) {
	return (
		<Container>
			<SectionTitle>{title}</SectionTitle>
			<PartnersContainer>
				{data.map((element, key) => (
					<PartnerLogo
						index={key.toString()}
						src={require('../../../../../../assets/seel/' +
							element.logo +
							'.png')}
					/>
				))}
			</PartnersContainer>
		</Container>
	);
}

export default PartnerSection;

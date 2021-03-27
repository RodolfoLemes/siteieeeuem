import React from 'react';
import { Container, HeaderTitle } from './styles';

import PartnerSection from './components/PartnerSection';
import { sponsors, support, realization } from './data';

function Partners() {
	return (
		<Container>
			<HeaderTitle>Olha só quem fez o evento ser possível</HeaderTitle>

			<PartnerSection title="Patrocinadores" data={sponsors} />

			<PartnerSection title="Apoio" data={support} />

			<PartnerSection title="Realização" data={realization} />
		</Container>
	);
}

export default Partners;

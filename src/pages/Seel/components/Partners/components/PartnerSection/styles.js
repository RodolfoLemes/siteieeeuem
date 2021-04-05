import styled from 'styled-components';
import colors from '../../../../colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: 80vw;
	margin: 20px 0px 40px;
	align-items: flex-start;
	justify-content: space-evenly;

	@media (max-width: 600px) {
		align-items: center;
		margin: 20px 0px;
	}
`;

export const SectionTitle = styled.text`
	font-size: 24px;
	color: ${colors.white};
	font-family: Poppins;
	margin: 20px 0px 20px 20px;

	@media (max-width: 600px) {
		font-size: 20px;
		margin: 20px 0px;
	}
`;

export const PartnersContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: auto;
	width: 100%;
	justify-content: flex-start;

	@media (max-width: 600px) {
		justify-content: center;
	}
`;

export const PartnerLogo = styled.img`
	max-height: 120px;
	max-width: 240px;
	height: auto;
	width: auto;
	object-fit: contain;
	margin: 20px 40px;

	@media (max-width: 600px) {
		height: 100px;
		width: 100px;
		margin: 20px 20px;
	}

	@media (max-width: 350px) {
		height: 90px;
		width: 90px;
		margin: 20px 10px;
	}
`;

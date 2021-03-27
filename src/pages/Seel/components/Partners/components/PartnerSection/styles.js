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
`;

export const SectionTitle = styled.text`
	font-size: 24px;
	color: ${colors.white};
	font-family: Poppins;
	margin: 20px 0px 20px 20px;
`;

export const PartnersContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: auto;
	width: 100%;
	justify-content: flex-start;
`;

export const PartnerLogo = styled.img`
	margin: 20px 40px;
`;

import styled from 'styled-components';
import colors from '../../../../colors';

export const Container = styled.div`
	height: auto;
	width: 100vw;
	margin: 50px 0px;
`;

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: ${props =>
		props.setReverse % 2 === 0 ? `row-reverse` : `row`};
	height: auto;
	width: 100vw;
	margin: 20px 0px;
	align-items: center;
	justify-content: space-evenly;
	box-sizing: border-box;
	padding: 0px 100px;

	@media (max-width: 1250px) {
		flex-direction: column;
	}
`;

export const PanelistImage = styled.img`
	display: block;
	max-height: 300px;
	max-width: 250px;
	height: auto;
	width: auto;

	@media (max-width: 1250px) {
		margin-bottom: 20px;
	}
`;

export const PanelistDescription = styled.text`
	max-height: 300px;
	width: 40vw;
	color: ${colors.white};
	font-size: 16px;
	font-family: Poppins;
	text-align: justify;

	@media (max-width: 1250px) {
		max-height: 500px;
		width: 60vw;
		margin-bottom: 20px;
	}

	@media (max-width: 510px) {
		width: 80vw;
	}
`;

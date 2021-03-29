import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../../../colors';

export const Container = styled.div`
	display: flex;
	height: auto;
	width: 100vw;
	align-items: flex-start;
	justify-content: center;
	margin-top: 80px;

	@media (max-width: 800px) {
		margin-top: 40px;
		flex-direction: column;
		align-items: center;
	}
`;

export const CardContainer = styled.button`
	display: flex;
	flex-direction: column;
	height: 250px;
	width: 200px;
	margin: 0px 30px;
	border-width: 0px;
	border-radius: 30px;
	-moz-box-shadow: 8px 14px 24px rgba(0, 0, 0, 0.25);
	-webkit-box-shadow: 8px 14px 24px rgba(0, 0, 0, 0.25);
	box-shadow: 8px 14px 24px rgba(0, 0, 0, 0.25);
	justify-content: space-evenly;
	align-items: center;
	background-color: ${colors.primary};
	transition: all 0.5s ease;

	&:hover {
		transform: translateY(5px);
		-moz-box-shadow: 3px 9px 24px rgba(0, 0, 0, 0.25);
		-webkit-box-shadow: 3px 9px 24px rgba(0, 0, 0, 0.25);
		box-shadow: 3px 9px 24px rgba(0, 0, 0, 0.25);
		cursor: pointer;
	}

	@media (max-width: 800px) {
		height: 200px;
		margin-bottom: 40px;
	}

	@media (max-width: 400px) {
		height: 160px;
		width: 160px;
	}
`;

export const CardIcon = styled.img`
	height: 140px;
	width: 60%;
	width: ${props => (props.isPeople ? `80%` : `60%`)};

	@media (max-width: 800px) {
		height: 100px;
	}

	@media (max-width: 400px) {
		height: 80px;
	}
`;

export const CardText = styled.text`
	font-size: 22px;
	font-weight: 500;
	font-family: Poppins;
	color: ${colors.white};

	@media (max-width: 800px) {
		display: none;
	}
`;

export const StyledLink = styled(Link)`
	display: flex;
	flex-direction: column;
	height: 250px;
	width: 200px;
	margin: 0px 30px;
	border-width: 0px;
	border-radius: 30px;
	-moz-box-shadow: 8px 14px 24px rgba(0, 0, 0, 0.25);
	-webkit-box-shadow: 8px 14px 24px rgba(0, 0, 0, 0.25);
	box-shadow: 8px 14px 24px rgba(0, 0, 0, 0.25);
	justify-content: space-evenly;
	align-items: center;
	background-color: ${colors.primary};
	transition: all 0.5s ease;

	&:hover {
		transform: translateY(5px);
		-moz-box-shadow: 3px 9px 24px rgba(0, 0, 0, 0.25);
		-webkit-box-shadow: 3px 9px 24px rgba(0, 0, 0, 0.25);
		box-shadow: 3px 9px 24px rgba(0, 0, 0, 0.25);
		cursor: pointer;
	}

	@media (max-width: 800px) {
		height: 200px;
		margin-bottom: 40px;
	}

	@media (max-width: 400px) {
		height: 160px;
		width: 160px;
	}
`;

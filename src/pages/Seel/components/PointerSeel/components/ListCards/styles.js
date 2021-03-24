import styled from 'styled-components';
import colors from '../../../../colors';

export const Container = styled.div`
	display: flex;
	height: auto;
	width: 100vw;
	align-items: flex-start;
	justify-content: center;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 250px;
	width: 200px;
	margin: 0px 30px;
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
`;

export const CardIcon = styled.img`
	height: 140px;
	width: 60%;
	width: ${props => (props.isPeople ? `80%` : `60%`)};
`;

export const CardText = styled.text`
	font-size: 22px;
	font-weight: 500;
	font-family: Poppins;
	color: ${colors.white};
`;

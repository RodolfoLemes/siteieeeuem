import styled from 'styled-components';
import colors from '../../colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: ${props => `${props.rowWidth}%`};
	margin-top: 20px;
`;

export const Label = styled.text`
	font-size: 20px;
	font-family: Poppins-regular;
	margin-left: 10px;
	color: ${colors.white};
`;

export const InputContainer = styled.input`
	height: 50px;
	width: 100%;
	border-radius: 25px;
	border-width: 0px;
	padding-left: 20px;
	font-size: 16px;
	font-family: Poppins-regular;
	transition: all 0.3s ease;
`;

import styled from 'styled-components';
import colors from '../../colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: ${props => `${props.rowWidth}%`};
	margin-top: 20px;
	padding-left: 10px;
`;

export const Label = styled.label`
	font-size: 20px;
	font-family: Poppins-regular;
	color: ${colors.white};
`;

export const SelectorContainer = styled.div`
	display: flex;
	height: 50px;
	align-items: center;
`;

export const Selector = styled.input``;

export const SelectorText = styled.text`
	font-size: 18px;
	font-family: Poppins-regular;
	margin: 0px 20px 0px 10px;
	color: ${colors.white};
`;

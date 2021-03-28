import styled from 'styled-components';
import colors from '../../colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: ${props => `${props.rowWidth}%`};
	margin-top: 20px;

	@media (max-width: 920px) {
		width: 100%;
	}
`;

export const Label = styled.text`
	font-size: 20px;
	font-family: Poppins-regular;
	margin-left: 10px;
	color: ${colors.white};

	@media (max-width: 520px) {
		font-size: 16px;
	}
`;

export const InputContainer = styled.input`
	height: 50px;
	width: 100%;
	border-radius: 25px;
	border-width: 0px;
	text-overflow: ellipsis;
	padding: 0px 20px;
	box-sizing: border-box;
	font-size: 16px;
	font-family: Poppins-regular;
	transition: all 0.3s ease;
`;

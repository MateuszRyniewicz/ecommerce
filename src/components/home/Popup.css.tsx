import styled from 'styled-components';

export const StyledPopup = styled.div`
	width: 350px;
	height: 300px;
	padding: 10px;
	background-color: #57c015;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -85%);
	display: flex;
	justify-content: space-around;
	flex-direction: column;
`;

export const StyledButton = styled.button`
	background-color: red;
	text-align: center;
	padding: 10px;
`;

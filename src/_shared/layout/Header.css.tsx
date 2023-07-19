import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding: 10px;
	display: flex;
	justify-content: space-around;
	height: 70px;
`;

export const StyledNav = styled.nav`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledBoxLogoAndMenu = styled.div`
	padding: 10px;
	display: flex;
	gap: 40px;
`;

export const StyledBoxImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
`;

export const StyledLogo = styled.p`
	font-size: 25px;
	color: #000;
	font-weight: 700;
`;

export const StyledLogoCircle = styled.div`
	background-color: red;
	width: 20px;
	height: 20px;
	border-radius: 50%;
`;

export const StyledListMenu = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const StyledMenuItem = styled(Link)`
	border-bottom: 1px solid transparent;
	opacity: 1;
	transition: border-bottom 0.3s ease, opacity 0.3s;

	&:hover {
		border-bottom: 0.5px solid black;
		opacity: 0.7;
	}
`;

export const StyledBoxUserMenu = styled.div`
	font-size: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	cursor: pointer;
`;

export const StyledBoxIconCart = styled.div`
	padding: 10px;
	position: relative;
	cursor: pointer;
`;

export const StyledBoxCounter = styled.div`
	position: absolute;
	bottom: 5px;
	left: 20px;
	background-color: red;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledCounter = styled.p`
	font-size: 12px;
`;

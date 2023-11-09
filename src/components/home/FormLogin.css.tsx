import styled from 'styled-components';
import { maxContanier } from '../../styles/theme';
import { StyledBtnCard } from '../home/ProductCard.css';

export const StyledSection = styled.section`
	max-width: ${maxContanier};
	margin: 0 auto;
	border: 1px solid #ddd;
	padding: 50px;
`;

export const StyledHeaderText = styled.h3`
	font-size: 32px;
	text-align: center;
	margin-bottom: 20px;
`;

export const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const StyledInput = styled.input`
	width: 100%;
	border: 1px solid #ddd;
	padding: 10px 20px;
	outline: none;
	font-size: 14px;
`;

export const StyledFormBoxError = styled.div`
	color: red;
	text-align: center;
	padding: 10px;
	font-size: 10px;
`;

// export const StyledFormButton = styled.button`
// 	width: 50%;
// 	border: none;
// 	padding: 10px 0;
// 	background-color: #111;
// 	color: #fff;
// 	text-transform: uppercase;
// 	letter-spacing: 0.5px;
// 	font-size: 12px;

// 	&:hover ${StyledBtnCard} {
// 		bottom: 0;
// 	}
// `;

export const StyledBtnCard1 = styled.div`
	width: 90%;
	height: 30px;
	background-color: #333;
	font-weight: 500;
	font-size: 12px;
	border: 1px solid #000;
	
	transition: 0.4s;
`;

export const StyledProdcutCard = styled.div`
	border: 1px solid #ddd;
	width: 200px;
	padding: 5px;

	&:hover ${StyledBtnCard} {
		bottom: 0;
	}
`;

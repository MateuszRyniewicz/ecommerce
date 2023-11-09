import styled from 'styled-components';
import { maxContanier } from '../../styles/theme';

export const StyledSection = styled.section`
	max-width: ${maxContanier};
	margin: 0 auto;
	border: 10px solid black;
`;

export const StyledProdcutCardContanier = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 50px 20px;
	border: 3px solid blue;
	margin-bottom: 50px;
`;

export const StyledProductsHeader = styled.div`
	border: 1px solid red;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const StyledHeaderMainText = styled.p`
	font-size: 24px;
	border: 1px solid red;
	text-align: center;
	margin-bottom: 10px;
`;

export const StyledHeaderMainTextBold = styled.span`
	font-weight: 700;
	margin-left: 10px;
`;

export const StyledListCategoriesTrendy = styled.ul`
	border: 1px solid red;
	display: flex;
	justify-content: center;
	gap: 20px;
	cursor: pointer;
`;

export const StyledCategoryTrendy = styled.li`
	font-size: 14px;
	font-weight: 500;
	color: #999;
	transition: color 0.3s, border-bottom 0.3s;
	border-bottom: none;

	&:hover {
		color: #222;
		border-bottom: 2px solid #222;
	}
`;

import styled from 'styled-components';
import { maxContanier } from '../../styles/theme';

export const StyledProdcutCardContanier = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 50px 20px;
`;

export const StyledSection = styled.section`
	max-width: ${maxContanier};
	margin: 0 auto;
`;

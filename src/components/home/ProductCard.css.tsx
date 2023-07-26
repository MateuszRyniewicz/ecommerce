import styled from 'styled-components';

export const StyledBoxCategoryLike = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const StyledBoxRate = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const StyledBoxImg = styled.div`
	height: 300px;
	padding: 15px;
	position: relative;
	overflow: hidden;
`;

export const StyledImgCard = styled.img`
	object-fit: contain;
`;

export const StyledBtnCard = styled.button`
	width: 90%;
	height: 30px;
	background-color: #fff;
	font-weight: 500;
	font-size: 12px;
	border: 1px solid #000;
	position: absolute;
	bottom: -50px;
	left: 50%;
	translate: -50% 0;
	transition: 0.4s;
`;

export const StyledProdcutCard = styled.div`
	border: 1px solid red;

	&:hover ${StyledBtnCard} {
		bottom: 0;
	}
`;

export const StyledBoxTextColor = styled.p`
	color: #888;
	font-size: 10px;
`;

export const StyledBoxText = styled.p`
	color: #000;
	font-size: 10px;
	padding: 0 3px;
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
	height: 300px;
	width: 100%;
	background-color: #9994;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const StyledFooterBoxColumns = styled.div`
	width: 80%;
	height: 85%;
	padding: 5px;
	display: flex;
	justify-content: center;
`;
export const StyledFooterBoxColumn = styled.div`
	margin-top: 20px;
	width: 110px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
export const StyledFooterBoxColumnBig = styled.div`
	width: 200px;
	margin-top: 20px;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 2px;
`;

export const StyledFooterBoxAddress = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 5px;
	margin-bottom: 15px;
`;

export const StyledFooterTextAddress = styled.p`
	font-size: 8px;
	font-weight: 500;
`;

export const StyledFooterBoxContact = styled.div`
	width: 100%;
	padding: 5px 0;
	margin-bottom: 18px;
`;

export const StyledFooterTextContact = styled.p`
	padding: 2px 0;
	font-size: 8px;
	font-weight: 700;
`;

export const StyledFooterBoxIcons = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: flex-start;
	gap: 18px;
`;
export const StyledFooterBoxIcon = styled.div`
	font-size: 9px;
`;

export const StyledFooterBoxColumnHeaderText = styled.div`
	width: 100%;
	font-weight: 700;
	padding: 10px;
	text-align: left;
`;

export const StyledFooterHeaderText = styled.p`
	font-size: 10px;
`;

export const StyledFooterBox = styled.div`
	border-top: 1px solid #999;
	padding: 25px 0;
	width: 70%;
	height: 10%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledFooterBoxData = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledFooterTextData = styled.p`
	font-size: 8px;
	font-weight: 500;
	color: #777;
`;

export const StyledFooterBoxDetails = styled.div`
	font-size: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
`;

export const StyledFooterMenuListColumn = styled.ul`
	width: 100%;
	height: 55%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`;
export const StyledFooterMenuListItemColumn = styled(Link)`
	width: 100px;
	text-align: left;
	padding-left: 5px;
	font-size: 8px;
	font-weight: 500;
	margin-top: 15px;
`;

export const StyledFooterTextBoxColumn = styled.div`
	margin: 10px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: 2.5px;
`;

export const StyledFooterText = styled.div`
	font-size: 9px;
`;

export const StyledFooterBoxInputDetails = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 12px;
`;

export const StyledFooterButtonInput = styled.button`
	width: 20%;
	border: none;
	border-radius: 0px 3px 3px 0;
	background-color: #fff;
	height: 30px;
	padding: 5px;
	font-size: 8px;
	font-weight: 500;
`;

export const StyledFooterInput = styled.input`
	width: 80%;
	height: 30px;
	outline: none;
	border: none;
	border-radius: 3px 0 0 3px;
	padding: 6px;
	font-size: 10px;
	color: #000;

	&::placeholder {
		color: #000;
	}
`;

export const StyledFooterBoxTextBelowInput = styled.div`
	width: 100%;
	text-align: left;
	padding: 5px 0;
`;

export const StyledFooterTextBolow = styled.p`
	font-size: 10px;
	font-weight: 500;
`;

export const StyledFooterBoxIconsCorporation = styled.div`
	width: 100%;
	padding: 0 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledFooterBoxIconCorporation = styled.div`
	font-size: 14px;
	margin-top: 8px;
`;

export const StyledBoxImageFooter = styled.div`
	width: 100%;
	margin-bottom: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 5px;
`;

export const StyledFooterSelect = styled.select`
	border: none;
	background-color: transparent;
	color: #000;
	font-size: 10px;
`;

export const StyledFooterTextColor = styled.p`
	color: #999;
`;

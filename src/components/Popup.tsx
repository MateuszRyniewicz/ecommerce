import React, { FC } from 'react';
import { StyledButton, StyledPopup } from './home/Popup.css';
import { StyledHeaderText } from './home/FormLogin.css';
import { useNavigate } from 'react-router-dom';

interface PopupProps {
	text: string;
}
const Popup: FC<PopupProps> = ({text}) => {
	const navigate = useNavigate();
	return (
		<StyledPopup>
			<StyledHeaderText>{text}</StyledHeaderText>
			<StyledButton onClick={() => navigate('/dashboard')}>
				Dashboard
			</StyledButton>
		</StyledPopup>
	);
};

export default Popup;

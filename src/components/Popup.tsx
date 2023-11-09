import React, { FC } from 'react';
import { StyledButton, StyledPopup } from './home/Popup.css';
import { StyledHeaderText } from './home/FormLogin.css';
import { useNavigate } from 'react-router-dom';
const Popup: FC = () => {
	const navigate = useNavigate();
	return (
		<StyledPopup>
			<StyledHeaderText>Login Success</StyledHeaderText>
			<StyledButton onClick={() => navigate('/dashboard')}>
				Dashboard
			</StyledButton>
		</StyledPopup>
	);
};

export default Popup;

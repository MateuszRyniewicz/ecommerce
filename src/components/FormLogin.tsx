import React, { FC, useEffect, useState } from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { User } from '../types/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, loginUser } from '../store/AuthSlice';
import { RootState } from '../store';

import {
	StyledSection,
	StyledHeaderText,
	StyledForm,
	StyledInput,
	StyledFormBoxError,
} from './home/FormLogin.css';
import Popup from './Popup';

const validationSchema = () =>
	Yup.object().shape({
		email: Yup.string().required('e-mail is required').email('incorrect email'),
		password: Yup.string()
			.required('required password')
			.min(5, 'password must have more then 5 characters')
			.max(16, 'up to 16 characters'),
	});

const FormLogin: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const response = useSelector((state: RootState) => state.user.response);
	console.log(response);

	const initialValues = { email: '', password: '' };

	const submitForm = (values: Partial<User>) => {
		dispatch(getUser(values));
		dispatch(loginUser(values));
	};

	useEffect(() => {
		if (response?.success) {
			setIsOpen(true);
		}
		// if (response?.success) navigate('/dashboard');
	}, [response?.success]);

	return (
		<StyledSection>
			{isOpen && <Popup />}
			<StyledHeaderText>LOGIN ACCOUNT</StyledHeaderText>
			<Formik<Partial<User>>
				initialValues={initialValues}
				onSubmit={submitForm}
				validationSchema={validationSchema}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<StyledForm onSubmit={handleSubmit}>
						<StyledInput
							type='email'
							name='email'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						<StyledFormBoxError style={{ color: 'red', textAlign: 'center' }}>
							{errors.email && touched.email && errors.email}
						</StyledFormBoxError>
						<StyledInput
							type='password'
							name='password'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						<StyledFormBoxError>
							{errors.password && touched.password && errors.password}
						</StyledFormBoxError>
						<button type='submit'>Submit</button>
					</StyledForm>
				)}
			</Formik>
		</StyledSection>
	);
};

export default FormLogin;

import React, { FC, useEffect } from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { User } from '../types/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, registerUser } from '../store/AuthSlice';
import { RootState } from '../store';

const FormRegister: FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const response = useSelector((state: RootState) => state.user.response);
	const initialValues = {
		email: '',
		password: '',
		name: '',
	};

	const submitForm = (values:  Partial<User>) => {
		dispatch(registerUser(values));
		dispatch(getUser(values));
	};

	useEffect(() => {
		if (response?.success) navigate('/dashboard');
	}, [response?.success]);

	return (
		<Formik initialValues={initialValues} onSubmit={submitForm}>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
			}) => (
				<form onSubmit={handleSubmit}>
					<input
						type='email'
						name='email'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
					/>
					{errors.email && touched.email && errors.email}
					<input
						type='password'
						name='password'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
					/>
					{errors.password && touched.password && errors.password}
					<input
						name='name'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
					/>
					{errors.name && touched.name && errors.name}

					<button type='submit'>Submit</button>
				</form>
			)}
		</Formik>
	);
};

export default FormRegister;

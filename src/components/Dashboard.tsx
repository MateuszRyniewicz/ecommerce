import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getUser } from '../store/AuthSlice';

const Dashboard: FC = () => {
	const user = useSelector((state: RootState) => state.user.user);

	console.log(user);

	useEffect(() => {}, [user]);
	return <div>{user?.name}</div>;
};

export default Dashboard;

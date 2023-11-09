import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
// import { getUser } from '../store/AuthSlice';

const Dashboard: FC = () => {
	const user = useSelector((state: RootState) => state.user.user);

	console.log(user);

	useEffect(() => {}, [user]);
	return (
		<div>
			<p>{user?.email}</p>
			{/* <p>
				{Array.isArray(user?.cart) &&
					user?.cart.map((item) => (
						<div key={item.id}>
							<p>{item.title}</p>
						
						</div>
					))}
			</p> */}
		</div>
	);
};

export default Dashboard;

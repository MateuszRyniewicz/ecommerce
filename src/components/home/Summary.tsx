import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useParams } from 'react-router-dom';

const Summary = () => {
	const user = useSelector((state: RootState) => state.user.user);
	const { totalPrice } = useParams();

	return (
		<>
			<div>
				<p>{user?.name}</p>
				<p>{user?.email}</p>
				<p>Total Price: {totalPrice}</p>
			</div>
			<div>
				{Array.isArray(user?.cart) ? (
					<div>
						{user?.cart.map((item) => (
							<div>
								<p>{item.title}</p>
								<p>{item.category}</p>
								<p>{item.price}</p>
							</div>
						))}
					</div>
				) : (
					'nie ma produktów w koszyku, coś poszło nie tak'
				)}
			</div>
		</>
	);
};

export default Summary;

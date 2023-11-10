import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
const Basket = () => {
	const user = useSelector((state: RootState) => state.user.user);
	const response = useSelector((state: RootState) => state.user.response);
	console.log('basket', user?.cart);

	const navigate = useNavigate();

	const calculateTotalPrice = () => {
		if (Array.isArray(user?.cart)) {
			return user?.cart.reduce((total, item) => total + item.price, 0);
		}
		return 0;
	};

	return (
		<div>
			<p>
				{user ? (
					Array.isArray(user?.cart) ? (
						user?.cart.map((item) => <p key={item.id}>{item.price}</p>)
					) : (
						<span>koszyk jest pusty</span>
					)
				) : (
					'zaloguj sie by dodać do koszyka'
				)}
			</p>
			<p>
				{calculateTotalPrice() ? (
					<span>
						{user && Array.isArray(user?.cart) ? (
							calculateTotalPrice() ? (
								<button
									onClick={() => navigate(`/summary/${calculateTotalPrice()}`)}>
									przejdz do podsumowania
								</button>
							) : (
								''
							)
						) : (
							''
						)}
					</span>
				) : (
					''
				)}
			</p>
		</div>
	);
};

export default Basket;

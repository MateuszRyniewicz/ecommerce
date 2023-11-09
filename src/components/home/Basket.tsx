import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
const Basket = () => {
	const user = useSelector((state: RootState) => state.user.user);
	const response = useSelector((state: RootState) => state.user.response);
	console.log('basket', user?.cart);
	console.log('response:', response);

	const calculateTotalPrice = () => {
		if (Array.isArray(user?.cart)) {
			return user?.cart.reduce((total, item) => total + item.price, 0);
		}
		return 0;
	};

	return (
		<div>
			<p>
				{response?.success ? (
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
						{response?.success && Array.isArray(user?.cart)
							? calculateTotalPrice()
							: ''}
					</span>
				) : (
					'0'
				)}
			</p>
		</div>
	);
};

export default Basket;

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductCard from './ProductCard';

const FavoriteItems = () => {
	const user = useSelector((state: RootState) => state.user.user);
	return (
		<div>
			{user ? (
				Array.isArray(user?.favorite) ? (
					user?.favorite.map((product, index) => (
						<ProductCard key={index} product={product} />
					))
				) : (
					<span>lista ulubionych jest pusta</span>
				)
			) : (
				'zaloguj sie by dodać do ulubionych'
			)}
		</div>
	);
};

export default FavoriteItems;

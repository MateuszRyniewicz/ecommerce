import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const FavoriteItems = () => {
	const user = useSelector((state: RootState) => state.user.user);
	return (
		<div>
			<div>
				{user ? (
					<p>
						{Array.isArray(user.favorite)
							? user.favorite.map((item) => <p key={item.id}>{item.title}</p>)
							: 'zaloguj sie aby dodac do ulubionych'}
					</p>
				) : (
					<p>dodaj do ulubionych</p>
				)}
			</div>
		</div>
	);
};

export default FavoriteItems;

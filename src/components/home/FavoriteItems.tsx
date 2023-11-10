import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const FavoriteItems = () => {
	const user = useSelector((state: RootState) => state.user.user);
	return (
		<div>
			<p>
				{user ? (
					Array.isArray(user?.favorite) ? (
						user?.favorite.map((item) => <p key={item.id}>{item.title}</p>)
					) : (
						<span>lista ulubionych jest pusta</span>
					)
				) : (
					'zaloguj sie by dodać do ulubionych'
				)}
			</p>
		</div>
	);
};

export default FavoriteItems;

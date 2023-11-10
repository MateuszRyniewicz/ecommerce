import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';
import { Message } from '../types/message';
import { v4 as uuidv4 } from 'uuid';
import { Product } from '../types/product';

export interface UserState {
	usersList: User[];
	user: User | null;
	response: Message | null;
}

const initialState: UserState = {
	usersList: [
		{
			id: '5505f7ea-2fc1-11ee-be56-0242ac120002',
			email: 'ryniuss@o2.pl',
			password: '12345678',
			cart: [],
			favorite: [],
		},
		{
			id: '5505fb64-2fc1-11ee-be56-0242ac120002',
			email: '111@o2.pl',
			password: '12345678',
			cart: [],
			favorite: [],
		},
	],

	user: null,
	response: { message: '', success: false },
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action: PayloadAction<Partial<User>>) => {
			const currentUser = state.usersList?.find(
				(user) => user.email === action.payload.email
			);

			if (!currentUser) {
				state.response = {
					success: false,
					message: 'we do not have your email sorry, go to register',
				};
			} else if (
				currentUser &&
				currentUser.password !== action.payload.password
			) {
				state.response = { success: false, message: 'password is not correct' };
			} else {
				state.response = { success: true, message: 'success!' };
				state.user = currentUser;
			}
		},

		registerUser: (state, action: PayloadAction<Partial<User>>) => {
			const userRegister = state.usersList?.find(
				(user) => user.email === action.payload.email!
			);
			if (userRegister) {
				state.response = { success: false, message: 'user already exists' };
				return;
			} else {
				let users = state.usersList?.map((user) => user);
				const newUser: User = {
					email: action.payload.email!,
					password: action.payload.password!,
					cart: [],
					favorite: [],
					id: uuidv4(),
				};
				state.response = { success: true, message: 'added new user' };

				state.usersList = [...users, newUser];
				state.user = newUser;

				return;
			}
		},

		getUser: (state, action: PayloadAction<Partial<User>>) => {
			state.user =
				state.usersList?.find((user) =>
					user.email === action.payload.email
						? { id: user.id, email: user.email, name: user.name }
						: null
				) || null;
		},

		addProductToCart: (state, action: PayloadAction<Product>) => {
			let loggedUserCart = Array.isArray(state.user?.cart)
				? state.user?.cart
				: [];
			loggedUserCart?.find(
				(product: any) => product.id === Number(action.payload.id)
			)
				? (loggedUserCart = loggedUserCart.map((product) =>
						product.id === Number(action.payload.id)
							? { ...product, amount: product.amount + action.payload.amount }
							: product
				  ))
				: loggedUserCart?.push(action.payload);

			state.usersList = state.usersList.map((user) =>
				user.id === state.user?.id ? { ...user, cart: loggedUserCart! } : user
			);
		},

		addProductToFavorite: (state, action: PayloadAction<Product>) => {
			let loggedUserFavorite = Array.isArray(state.user?.favorite)
				? state.user?.favorite
				: [];
			loggedUserFavorite?.find(
				(product: any) => product.id === Number(action.payload.id)
			)
				? (loggedUserFavorite = loggedUserFavorite.map((product) =>
						product.id === Number(action.payload.id)
							? { ...product, amount: product.amount + action.payload.amount }
							: product
				  ))
				: loggedUserFavorite?.push(action.payload);

			state.usersList = state.usersList.map((user) =>
				user.id === state.user?.id
					? { ...user, favorite: loggedUserFavorite! }
					: user
			);
		},
	},
});

export const {
	loginUser,
	registerUser,
	getUser,
	addProductToCart,
	addProductToFavorite,
} = userSlice.actions;

export default userSlice.reducer;

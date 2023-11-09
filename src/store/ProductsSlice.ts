import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Product, ProductsState } from '../types/product';

const initialState: ProductsState = {
	products: [],
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<Omit<Product, 'amount'>[]>) => {
			state.products = action.payload.map((product) => ({
				...product,
				amount: 50,
			}));
		},
	},
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

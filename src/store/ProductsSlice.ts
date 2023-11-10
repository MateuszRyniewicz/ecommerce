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

		filterProducts: (state, action: PayloadAction<string>) => {
			state.products = state.products.filter(
				(product) =>
					product.title
						.toLocaleLowerCase()
						.includes(action.payload.toLowerCase()) ||
					product.category.includes(action.payload.toLowerCase()) ||
					product.description.includes(action.payload.toLowerCase())
			);
		},
	},
});

export const { setProducts, filterProducts } = productsSlice.actions;

export default productsSlice.reducer;

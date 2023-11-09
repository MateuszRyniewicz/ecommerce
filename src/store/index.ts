import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import productsReducer from './ProductsSlice';
export const store = configureStore({
	reducer: { user: authReducer, products: productsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

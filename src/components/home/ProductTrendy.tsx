import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from './ProductCard';
import axios from 'axios';

import {
	StyledProdcutCardContanier,
	StyledSection,
	StyledProductsHeader,
	StyledHeaderMainText,
	StyledHeaderMainTextBold,
	StyledListCategoriesTrendy,
	StyledCategoryTrendy,
} from './ProductTrendy.css';
import { setProducts } from '../../store/ProductsSlice';
import { RootState } from '../../store';

const categoriesTrendy = [
	{ name: 'All' },
	{ name: 'NEWARRIVALS' },
	{ name: 'BESTSELLER' },
	{ name: 'TOP RATING' },
];

const ProductTrendy = () => {
	const [limit, setLimit] = useState<string>('');
	const dispatch = useDispatch();

	const { products } = useSelector((state: RootState) => state.products);
	// const { user } = useSelector((state: RootState) => state.user);

	useEffect(() => {
		const getApi = async () => {
			try {
				const response = await axios.get(
					'https://fakestoreapi.com/products?limit=5'
				);
				dispatch(setProducts(response.data));
			} catch (e) {
				console.log('test');
			}
		};

		getApi();
	}, []);

	useEffect(() => {
		const getApi = async () => {
			try {
				const response = await axios.get(
					`https://fakestoreapi.com/products${
						limit ? '?limit=' + limit : '?limit=4'
					}`
				);

				dispatch(setProducts(response.data));
			} catch (error) {
				console.log('test');
			}
		};
		getApi();
	}, [limit]);

	return (
		<StyledSection>
			<StyledProductsHeader>
				<StyledHeaderMainText>
					Our Trendy
					<StyledHeaderMainTextBold>Products</StyledHeaderMainTextBold>
				</StyledHeaderMainText>
				<StyledListCategoriesTrendy>
					{categoriesTrendy.map((category, index) => (
						<StyledCategoryTrendy key={index}>
							{category.name}
						</StyledCategoryTrendy>
					))}
				</StyledListCategoriesTrendy>
			</StyledProductsHeader>

			<StyledProdcutCardContanier>
				{!products.length ? (
					<h4>Loading...</h4>
				) : (
					products
						.filter((product) => product.amount)
						.map((product, index) => {
							return <ProductCard key={index} product={product} />;
						})
				)}
			</StyledProdcutCardContanier>
			<div>
				<p>amount of</p>
				<select
					className='select-pagination'
					onChange={(e) => setLimit(e.target.value)}>
					<option value={''}>Selection</option>
					<option value={5}>5</option>
					<option value={10}>10</option>
					<option value={15}>15</option>
					<option value={20}>20</option>
				</select>
			</div>
		</StyledSection>
	);
};

export default ProductTrendy;

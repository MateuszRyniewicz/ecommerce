import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

import { StyledProdcutCardContanier, StyledSection } from './ProductTrendy.css';

const categoriesTrendy = [
	{ name: 'All' },
	{ name: 'NEWARRIVALS' },
	{ name: 'BESTSELLER' },
	{ name: 'TOP RATING' },
];

const ProductTrendy = () => {
	const [productsList, setProdcutsList] = useState([]);

	useEffect(() => {
		const getApi = async () => {
			try {
				const response = await axios.get('https://fakestoreapi.com/products');
				setProdcutsList(response.data);
			} catch (e) {}
		};
		getApi();
	}, []);

	return (
		<StyledSection>
			<div>Our Trendy Product</div>
			<ul>
				{categoriesTrendy.map((category, index) => (
					<li key={index}>{category.name}</li>
				))}
			</ul>
			<StyledProdcutCardContanier>
				{productsList.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</StyledProdcutCardContanier>
		</StyledSection>
	);
};

export default ProductTrendy;

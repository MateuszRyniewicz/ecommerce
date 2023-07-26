import React, { FC } from 'react';
import { Product } from '../../types/product';
import {
	StyledProdcutCard,
	StyledBoxCategoryLike,
	StyledBoxRate,
	StyledBoxImg,
	StyledImgCard,
	StyledBtnCard,
	StyledBoxTextColor,
	StyledBoxText,
} from './ProductCard.css';

interface ProdcutCard {
	product: Product;
}

const ProductCard: FC<ProdcutCard> = ({ product }) => {
	return (
		<StyledProdcutCard>
			<StyledBoxImg>
				<StyledImgCard src={product.image} alt={product.title} />
				<StyledBtnCard>Add to Cart</StyledBtnCard>
			</StyledBoxImg>
			<div>
				<StyledBoxCategoryLike>
					<StyledBoxTextColor>{product.category}</StyledBoxTextColor>
					<p>serce</p>
				</StyledBoxCategoryLike>
				<StyledBoxText>{product.title}</StyledBoxText>
				<StyledBoxText>{product.price}</StyledBoxText>
				<StyledBoxRate>
					<p>
						{[...Array(Number(product.rating.rate.toFixed()))].map(
							(item, i) => (
								<span key={i}>*</span>
							)
						)}
					</p>
					<StyledBoxText>{product.rating.count}</StyledBoxText>
				</StyledBoxRate>
			</div>
		</StyledProdcutCard>
	);
};

export default ProductCard;

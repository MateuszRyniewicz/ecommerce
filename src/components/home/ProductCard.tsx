import React, { FC } from 'react';
import { Product } from '../../types/product';
import { AiOutlineHeart } from 'react-icons/ai';
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
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductToCart } from '../../store/AuthSlice';

interface ProdcutCard {
	product: Product;
}

const ProductCard: FC<ProdcutCard> = ({ product }) => {
	//console.log('wartosci produktu', product);
	const dispatch = useDispatch();
	const naviagte = useNavigate();
	return (
		<StyledProdcutCard>
			<StyledBoxImg>
				<StyledImgCard src={product.image} alt={product.title} />
				<StyledBtnCard
					onClick={() => {
						dispatch(addProductToCart(product));

						naviagte('/basket');
					}}>
					Add to Cart
				</StyledBtnCard>
			</StyledBoxImg>
			<div>
				<StyledBoxCategoryLike>
					<StyledBoxTextColor>{product.category}</StyledBoxTextColor>
					<p>
						<AiOutlineHeart />
					</p>
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

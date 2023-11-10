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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductToCart, addProductToFavorite } from '../../store/AuthSlice';
import { RootState } from '../../store';

interface ProdcutCard {
	product: Product;
}

const ProductCard: FC<ProdcutCard> = ({ product }) => {
	const user = useSelector((state: RootState) => state.user.user);
	console.log(user);
	const dispatch = useDispatch();
	const naviagate = useNavigate();
	return (
		<StyledProdcutCard>
			<StyledBoxImg>
				<StyledImgCard src={product.image} alt={product.title} />
				{/* <StyledBtnCard
					onClick={() => {
						dispatch(addProductToCart(product));

						naviagate('/basket');
					}}>
					Add to Cart
				</StyledBtnCard> */}
			</StyledBoxImg>
			<div>
				<StyledBoxCategoryLike>
					<StyledBoxTextColor>{product.category}</StyledBoxTextColor>
					<div onClick={() => dispatch(addProductToCart(product))}>
						<AiOutlineHeart
							onClick={() => dispatch(addProductToFavorite(product))}
						/>
					</div>
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

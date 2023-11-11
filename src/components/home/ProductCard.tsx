import React, { FC, useEffect, useState } from 'react';
import { Product } from '../../types/product';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
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
	const [isFavorite, setIsFavorite] = useState<Boolean>(false);
	const user = useSelector((state: RootState) => state.user.user);
	//	console.log(user);
	const dispatch = useDispatch();
	const naviagate = useNavigate();

	// useEffect(() => {
	// 	if (Array.isArray(user?.favorite) > 0) {
	// 		setIsFavorite(true);
	// 	}
	// }, []);
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
					<div>
						{isFavorite ? (
							<AiFillHeart
								style={{ color: 'blue' }}
								onClick={() => dispatch(addProductToFavorite(product))}
							/>
						) : (
							<AiOutlineHeart
								onClick={() => {
									dispatch(addProductToFavorite(product));
									setIsFavorite(true);
								}}
							/>
						)}
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

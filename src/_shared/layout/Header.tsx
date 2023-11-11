import React, { FC, useEffect, useState } from 'react';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, setProducts } from '../../store/ProductsSlice';

import {
	AiOutlineSearch,
	AiOutlineUserDelete,
	AiOutlineHeart,
	AiFillHeart,
} from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { BsFillBagFill } from 'react-icons/bs';
import {
	StyledBoxIconCart,
	StyledBoxImage,
	StyledBoxUserMenu,
	StyledBoxCounter,
	StyledListMenu,
	StyledCounter,
	StyledLogo,
	StyledLogoCircle,
	StyledHeader,
	StyledNav,
	StyledBoxLogoAndMenu,
	StyledMenuItem,
	StyledBoxSearch,
	StyledInputSearch,
} from './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../../types/product';
import Popup from '../../components/Popup';

const menuItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Shop', path: '/shop' },
	{ name: 'Collection', path: '/collection' },
	{ name: 'Journal', path: '/journal' },
	{ name: 'Lookbook', path: '/lookbook' },
	{ name: 'Pages', path: '/pages' },
];

const Header: FC = () => {
	const [input, setInput] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
	const [isFavorite, setIsFavorite] = useState<boolean>(false);

	const { products } = useSelector((state: RootState) => state.products);
	const [originaList, setOriginalList] = useState<Product[]>(products);
	const user = useSelector((state: RootState) => state.user.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const text = 'test';

	useEffect(() => {
		if (originaList.length === 0) {
			setOriginalList(products);
		}
		if (input) {
			dispatch(filterProducts(input));
		} else {
			dispatch(setProducts(originaList));
		}
		if (user && Array.isArray(user?.favorite) && user?.favorite.length > 0) {
			setIsFavorite(true);
		}
	}, [input, user?.favorite]);

	return (
		<StyledHeader>
			<StyledNav>
				<StyledBoxLogoAndMenu>
					<StyledBoxImage>
						<StyledLogo>UOM</StyledLogo>
						<StyledLogoCircle />
					</StyledBoxImage>
					<StyledListMenu>
						{menuItems.map((item, index) => (
							<li key={index}>
								<StyledMenuItem to={item.path}>{item.name}</StyledMenuItem>
							</li>
						))}
					</StyledListMenu>
				</StyledBoxLogoAndMenu>

				<StyledBoxUserMenu>
					<StyledBoxSearch>
						<AiOutlineSearch onClick={() => setIsOpen(!isOpen)} />
						{isOpen && (
							<StyledInputSearch
								onChange={(e: any) => setInput(e.target.value)}
							/>
						)}
					</StyledBoxSearch>
					<Link to={'/login'}>
						<AiOutlineUserDelete />
					</Link>
					<div>
						{isFavorite ? (
							<AiFillHeart onClick={() => navigate('favoriteItems')} />
						) : (
							<AiOutlineHeart onClick={() => navigate('favoriteItems')} />
						)}
					</div>

					<StyledBoxIconCart onClick={() => navigate('/basket')}>
						<BsFillBagFill />
						<StyledBoxCounter>
							<StyledCounter>
								{user === null ? (
									0
								) : Array.isArray(user.cart) ? (
									<p> {user.cart.length}</p>
								) : (
									0
								)}
							</StyledCounter>
						</StyledBoxCounter>
					</StyledBoxIconCart>
					<FaBars />
				</StyledBoxUserMenu>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;

import React, { FC } from 'react';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import {
	AiOutlineSearch,
	AiOutlineUserDelete,
	AiOutlineHeart,
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
} from './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const menuItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Shop', path: '/shop' },
	{ name: 'Collection', path: '/collection' },
	{ name: 'Journal', path: '/journal' },
	{ name: 'Lookbook', path: '/lookbook' },
	{ name: 'Pages', path: '/pages' },
];

const Header: FC = () => {
	const user = useSelector((state: RootState) => state.user.user);
	// console.log('header', user);

	const navigate = useNavigate();
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
					<AiOutlineSearch />
					<Link to={'/login'}>
						<AiOutlineUserDelete />
					</Link>
					<AiOutlineHeart />

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

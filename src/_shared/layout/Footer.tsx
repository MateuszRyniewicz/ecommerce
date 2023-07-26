import React from 'react';
import {
	StyledFooter,
	StyledFooterBox,
	StyledFooterBoxAddress,
	StyledFooterBoxColumns,
	StyledFooterBoxColumn,
	StyledFooterBoxColumnBig,
	StyledFooterBoxContact,
	StyledFooterTextAddress,
	StyledFooterTextContact,
	StyledFooterBoxIcons,
	StyledFooterBoxIcon,
	StyledFooterBoxColumnHeaderText,
	StyledFooterMenuListColumn,
	StyledFooterMenuListItemColumn,
	StyledFooterHeaderText,
	StyledFooterBoxData,
	StyledFooterTextData,
	StyledFooterBoxDetails,
	StyledFooterText,
	StyledFooterTextBoxColumn,
	StyledFooterBoxInputDetails,
	StyledFooterButtonInput,
	StyledFooterInput,
	StyledFooterBoxTextBelowInput,
	StyledFooterTextBolow,
	StyledFooterBoxIconsCorporation,
	StyledFooterBoxIconCorporation,
	StyledBoxImageFooter,
	StyledFooterSelect,
	StyledFooterTextColor,
} from './Footer.css';

import {
	ImFacebook,
	ImTwitter,
	ImInstagram,
	ImYoutube,
	ImPinterest,
} from 'react-icons/im';

import {
	FaCcDiscover,
	FaCcMastercard,
	FaCcPaypal,
	FaCcVisa,
	FaMusic,
} from 'react-icons/fa';
import { StyledLogo, StyledLogoCircle } from './Header.css';

const Footer = () => {
	const columnCompanyNameItems = [
		{ name: 'About Us', path: '/' },
		{ name: 'Careers', path: '/' },
		{ name: 'Affiliates', path: '/' },
		{ name: 'Blog', path: '/' },
		{ name: 'Contact', path: '' },
	];

	const columnShopNameItems = [
		{ name: 'New Arrivals', path: '/' },
		{ name: 'Accessories', path: '/' },
		{ name: 'Men', path: '/' },
		{ name: 'Women', path: '/' },
		{ name: 'Shop All', path: '/' },
	];
	const columnHelpNameItems = [
		{ name: 'Customer Service', path: '/' },
		{ name: 'My Account', path: '/' },
		{ name: 'Find a store', path: '/' },
		{ name: 'Legal & Privacy', path: '/' },
		{ name: 'Contact', path: '/' },
		{ name: 'Gift Card', path: '/' },
	];

	return (
		<StyledFooter>
			<StyledFooterBoxColumns>
				<StyledFooterBoxColumnBig>
					<StyledBoxImageFooter>
						<StyledLogo>UOM</StyledLogo>
						<StyledLogoCircle />
					</StyledBoxImageFooter>
					<StyledFooterBoxAddress>
						<StyledFooterTextAddress>
							1418 River Driver, Suite 35 Cottonhall, CA 9622
						</StyledFooterTextAddress>
						<StyledFooterTextAddress>United States</StyledFooterTextAddress>
					</StyledFooterBoxAddress>
					<StyledFooterBoxContact>
						<StyledFooterTextContact>sale@uomo.com</StyledFooterTextContact>
						<StyledFooterTextContact>+1 246-3450-0695</StyledFooterTextContact>
					</StyledFooterBoxContact>
					<StyledFooterBoxIcons>
						<StyledFooterBoxIcon>
							<ImFacebook />
						</StyledFooterBoxIcon>
						<StyledFooterBoxIcon>
							<ImTwitter />
						</StyledFooterBoxIcon>
						<StyledFooterBoxIcon>
							<ImInstagram />
						</StyledFooterBoxIcon>
						<StyledFooterBoxIcon>
							<ImYoutube />
						</StyledFooterBoxIcon>
						<StyledFooterBoxIcon>
							<ImPinterest />
						</StyledFooterBoxIcon>
					</StyledFooterBoxIcons>
				</StyledFooterBoxColumnBig>
				<StyledFooterBoxColumn>
					<StyledFooterBoxColumnHeaderText>
						<StyledFooterHeaderText>COMPANY</StyledFooterHeaderText>
					</StyledFooterBoxColumnHeaderText>
					<StyledFooterMenuListColumn>
						{columnCompanyNameItems.map((item, index) => (
							<StyledFooterMenuListItemColumn to={item.path} key={index}>
								{item.name}
							</StyledFooterMenuListItemColumn>
						))}
					</StyledFooterMenuListColumn>
				</StyledFooterBoxColumn>
				<StyledFooterBoxColumn>
					<StyledFooterBoxColumnHeaderText>
						<StyledFooterHeaderText>SHOP</StyledFooterHeaderText>
					</StyledFooterBoxColumnHeaderText>
					<StyledFooterMenuListColumn>
						{columnShopNameItems.map((item, index) => (
							<StyledFooterMenuListItemColumn to={item.path} key={index}>
								{item.name}
							</StyledFooterMenuListItemColumn>
						))}
					</StyledFooterMenuListColumn>
				</StyledFooterBoxColumn>
				<StyledFooterBoxColumn>
					<StyledFooterBoxColumnHeaderText>
						<StyledFooterHeaderText>HELP</StyledFooterHeaderText>
					</StyledFooterBoxColumnHeaderText>
					<StyledFooterMenuListColumn>
						{columnHelpNameItems.map((item, index) => (
							<StyledFooterMenuListItemColumn to={item.path} key={index}>
								{item.name}
							</StyledFooterMenuListItemColumn>
						))}
					</StyledFooterMenuListColumn>
				</StyledFooterBoxColumn>
				<StyledFooterBoxColumnBig>
					<StyledFooterBoxColumnHeaderText>
						<StyledFooterHeaderText>SUBSCRIBE</StyledFooterHeaderText>
					</StyledFooterBoxColumnHeaderText>
					<StyledFooterTextBoxColumn>
						<StyledFooterText>
							Be the first to get the latest news about trends,
						</StyledFooterText>
						<StyledFooterText>promotions, and much more!</StyledFooterText>
					</StyledFooterTextBoxColumn>
					<StyledFooterBoxInputDetails>
						<StyledFooterInput placeholder='Your email address' />
						<StyledFooterButtonInput>JOIN</StyledFooterButtonInput>
					</StyledFooterBoxInputDetails>
					<StyledFooterBoxTextBelowInput>
						<StyledFooterTextBolow>Secure payments</StyledFooterTextBolow>
					</StyledFooterBoxTextBelowInput>
					<StyledFooterBoxIconsCorporation>
						<StyledFooterBoxIconCorporation>
							<FaCcDiscover />
						</StyledFooterBoxIconCorporation>
						<StyledFooterBoxIconCorporation>
							<FaCcMastercard />
						</StyledFooterBoxIconCorporation>
						<StyledFooterBoxIconCorporation>
							<FaCcPaypal />
						</StyledFooterBoxIconCorporation>
						<StyledFooterBoxIconCorporation>
							<FaMusic />
						</StyledFooterBoxIconCorporation>
						<StyledFooterBoxIconCorporation>
							<FaCcVisa />
						</StyledFooterBoxIconCorporation>
					</StyledFooterBoxIconsCorporation>
				</StyledFooterBoxColumnBig>
			</StyledFooterBoxColumns>
			<StyledFooterBox>
				<StyledFooterBoxData>
					<StyledFooterTextData>C2020 Uomo</StyledFooterTextData>
				</StyledFooterBoxData>
				<StyledFooterBoxDetails>
					<StyledFooterTextColor>Language</StyledFooterTextColor>
					<p>United Kingdom | English</p>
					<StyledFooterTextColor>Currency</StyledFooterTextColor>
					<StyledFooterSelect>
						<option value='USD'>$ USD</option>
						<option value='PL'>$ PL</option>
						<option value='UE'>$ UE</option>
					</StyledFooterSelect>
				</StyledFooterBoxDetails>
			</StyledFooterBox>
		</StyledFooter>
	);
};

export default Footer;

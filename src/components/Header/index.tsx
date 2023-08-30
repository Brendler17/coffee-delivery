import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import {
  HeaderContainer, Localization, HeaderNav, Cart,
} from './styles';
import coffeeDeliveryLogo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Início">
        <img src={coffeeDeliveryLogo} alt="" />
      </NavLink>
      <HeaderNav>
        <Localization>
          <MapPin size={22} weight="fill" />
          <span>Pelotas, RS</span>
        </Localization>
        <Cart>
          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </Cart>
      </HeaderNav>
    </HeaderContainer>
  );
}

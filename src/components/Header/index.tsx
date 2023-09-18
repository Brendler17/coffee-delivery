import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import {
  HeaderContainer, Localization, HeaderNav, Cart, NavContainer,
} from './styles';
import coffeeDeliveryLogo from '../../assets/logo.svg';

interface AdressType {
  city: string;
  state: string;
}

export function Header() {
  const [address, setAddress] = useState<AdressType>({} as any);
  const [hasAddress, setHasAddress] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const { city } = data.address;
          const state = data.address['ISO3166-2-lvl4'].split('BR-')[1];
          setAddress({ city, state });
          setHasAddress(true);
        });
    });
  }, []);

  return (
    <HeaderContainer>
      <NavContainer>
        <NavLink to="/" title="Início">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>
        <HeaderNav>
          <Localization>
            <MapPin size={22} weight="fill" />
            {
              hasAddress ? (
                <span>
                  {address.city}
                  ,
                  {' '}
                  {address.state}
                </span>
              ) : (
                <span>Permita a localização</span>
              )
            }
          </Localization>
          <Cart>
            <NavLink to="/checkout" title="Carrinho">
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
          </Cart>
        </HeaderNav>
      </NavContainer>
    </HeaderContainer>
  );
}

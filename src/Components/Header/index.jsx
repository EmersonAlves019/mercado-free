import React, { useEffect, useState } from 'react';
import * as S from './styles';
import mercadoLivreLogo from '../../Assets/Images/mercado-livre-logo.svg';
import NavbarHeader from './../NavbarHeader/index';
import SearchInput from './../SearchInput/index';

export default function Header() {
  const [color, setColor] = useState('black');

  const toggleColor = () => {
    setColor((color) => (color === 'red' ? 'black' : 'red'));
  };

  useEffect(() => {
    console.log('oi');
  });

  return (
    <S.HeaderContainer>
      <S.Logo>
        <img src={mercadoLivreLogo} alt='MercadoLogo'></img>
      </S.Logo>
      <S.SearchAndNavbarContainer>
        <SearchInput />
        <NavbarHeader />
      </S.SearchAndNavbarContainer>
      <div>
        <S.OutlineShoppingCart onClick={toggleColor} color={color} />
      </div>
    </S.HeaderContainer>
  );
}

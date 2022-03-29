import React from 'react';
import Categories from './../Categories/index';
import * as S from './styles';

export default function NavbarHeader() {
  return (
    <S.NavbarHeaderContainer>
      <Categories />
      <div>Ofertas do dia</div>
      <div>Contato</div>
    </S.NavbarHeaderContainer>
  );
}

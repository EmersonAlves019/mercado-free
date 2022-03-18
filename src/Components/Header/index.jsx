import React from 'react'
import * as S from './styles'
import { AiOutlineShoppingCart } from "react-icons/ai";
import mercadoLivreLogo from '../../Assets/Images/mercado-livre-logo.svg'
import NavbarHeader from "./../NavbarHeader/index";
import SearchInput from "./../SearchInput/index";


export default function Header() {
  return (
      <S.HeaderContainer>
        <S.Logo>
          <img src={mercadoLivreLogo} alt="MercadoLogo" ></img>
      </S.Logo>
      <S.SearchAndNavbarContainer>
        <SearchInput/>
        <NavbarHeader />
      </S.SearchAndNavbarContainer>
        <div>
          <AiOutlineShoppingCart style={{position: 'absolute',  right: 10, top: 10, width: '50px', height: '50px' }}/>
        </div>
      </S.HeaderContainer>
  )
}

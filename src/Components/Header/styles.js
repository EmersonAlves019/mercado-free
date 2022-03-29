import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  z-index: 2;

  width: 100%;
  height: 100px;
  background: #fff159;
`;

export const Logo = styled.div`
  width: 80px;
  height: 80px;
`;

export const SearchAndNavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 40%;
`;

export const OutlineShoppingCart = styled(AiOutlineShoppingCart)`
  width: 50px;
  height: 50px;

  color: ${({ color }) => color};
`;

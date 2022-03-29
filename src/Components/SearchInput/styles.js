import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

export const SearchInputContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: #fff;
  padding: 0 15px;
  align-items: center;
  box-shadow: 0 1px 2px 0.3px #a9a9a9;

  input {
    border: none;
    width: 90%;

    border-right: 1px solid #a9a9;

    &:focus {
      box-shadow: 0;
      border: 0 none;
      border-right: 1px solid #a9a9;
      outline: 0;
    }
  }
`;

export const SearchAltIcon = styled(BiSearchAlt)`
  width: 25px;
  height: 25px;
  color: gray;
`;

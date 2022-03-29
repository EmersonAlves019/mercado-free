import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMarket } from '../../Context/Hooks/MarketProvider';
import * as S from './styles';

export default function SearchInput() {
  const { setQuery, setCategory } = useMarket();
  const [inputSearch, setInputSearch] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(inputSearch);
    setCategory('');
    navigate('/');
  };

  return (
    <S.SearchInputContainer onSubmit={handleSearch}>
      <input
        name='inputSearch'
        type='text'
        value={inputSearch}
        placeholder='Buscar produtos, marcas e muito mais...'
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <S.SearchAltIcon onClick={handleSearch} />
    </S.SearchInputContainer>
  );
}

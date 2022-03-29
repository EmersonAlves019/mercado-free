import { useNavigate } from 'react-router-dom';
import { useMarket } from '../../Context/Hooks/MarketProvider';
import * as S from './styles';

import React from 'react';

export default function Categories() {
  const { categories, setCategory } = useMarket();

  const navigate = useNavigate();

  const handleClick = (e) => {
    setCategory(e.target.id);
    navigate('/');
  };

  return (
    <>
      <S.CategoryDropdownContainer>
        <S.CategoryDropdown>
          <p>
            Categorias <S.ArrowDropDown />
          </p>
          <div>
            {categories.map(({ name, id }) => (
              <button key={id} id={id} onClick={handleClick}>
                {name}
              </button>
            ))}
          </div>
          {<S.DropDownOverlay className='overlay' />}
        </S.CategoryDropdown>
      </S.CategoryDropdownContainer>
    </>
  );
}

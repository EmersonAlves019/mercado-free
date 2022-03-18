import { useMarket } from '../../Context/Hooks/MarketProvider'
import * as S from './styles'

import React from "react";

export default function Categories() {
  const { categories, setCategory, setVisible } = useMarket()   

  return (
    <S.CategoryDropdownContainer>

    <S.CategoryDropdown onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setTimeout(() => { setVisible(false) }, 300 ) }>
      <p> Categorias <S.ArrowDropDown/> </p>
      <div>    
        {categories.map(({ name, id }) => (
          <button
            key={id}
            id={id}
            onClick={(e) => setCategory(e.target.id) }
          >
            {name}
          </button>
         ))}
      </div>
    </S.CategoryDropdown>
    </S.CategoryDropdownContainer>
  );
};
// import React from 'react'
import { useMarket } from '../../Context/Hooks/MarketProvider'
import * as S from './styles'

// export default function Categories() {
//     const { categories, setCategory } = useMarket()

//   return (
//     <div>
//       <select onChange={(e) => {
//         setCategory(e.target.value)
//       }
//       } >
        // {categories.map(({name, id}) => (
        //   <option
        //     key={id}
        //     type="button"
        //     value={id}
        //   >
        //     {name}
        //   </option>
        // ))}
//       </select>
//       </div>
//   )    
// }
import React from "react";
import { useState } from "react";

export default function Categories() {
   const { categories, setCategory } = useMarket()

  const [ show, setShow ] = useState(false)

  return (
    <S.CategoryDropdown
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <p>text</p>
      { show && categories.map(({name, id}) => (
          <button
            key={id}
            id={id}
            onClick={(e) => setCategory(e.target.id) }
          >
            {name}
          </button>
        ))}
    </S.CategoryDropdown>
  );
};
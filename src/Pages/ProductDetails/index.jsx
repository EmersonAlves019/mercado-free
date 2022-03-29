import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './../../Components/Header';
import Spinner from './../../Components/Spinner';
import DetailsTable from '../../Components/DetailsTable';
import ProductImages from './../../Components/ProductImages';
import { useMarket } from '../../Context/Hooks/MarketProvider';
import * as S from './styles';

const translateCondition = {
  new: 'novo',
  used: 'usado',
  undefined: 'não especificado',
};

export default function ProductDetails() {
  const { id } = useParams();
  const { setProductId, productInfos, isLoading } = useMarket();
  const [ favorite, setFavorite ] = useState(false)

  const calculateDiscount = (prevPrice, currPrice) => {
    return prevPrice && currPrice
      ? Math.floor(
          ((Math.floor(prevPrice) / Math.floor(currPrice)) * 100) / 10
        ) + '% OFF'
      : '';
  };

  const currencyConverter = (value) => {
    return value?.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  useEffect(() => {
    setProductId(id);
  });

  return (
    <>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <S.Container>
          <S.Banner />
          <S.ProductContainer>
            <S.ProductDetailsContainer>
              <ProductImages
                thumbnail={productInfos?.thumbnail}
                pictures={productInfos?.pictures}
              />
              <DetailsTable attributes={productInfos?.attributes} />
            </S.ProductDetailsContainer>
            <S.InformationContainer>
              <S.Condition>
                <span> {translateCondition[productInfos?.condition]}</span>
                <p>{productInfos?.sold_quantity} vendidos</p>
              </S.Condition>
              <S.ProductTitle>
                  <h1>{productInfos?.title}</h1>
                  <div onClick={ ()  => setFavorite(!favorite)}>

               {favorite? <S.FillHeart/> : <S.OutlineHeart />} 
                  </div>
              </S.ProductTitle>
              <S.PriceInfos>
                <p>{currencyConverter(productInfos?.original_price)}</p>
                  <span>{currencyConverter(productInfos?.price)}   
                    <h5>
                      {calculateDiscount(
                        productInfos?.price,
                        productInfos?.original_price
                      )}
                    </h5>
                  </span>
              </S.PriceInfos>
            </S.InformationContainer>
          </S.ProductContainer>
        </S.Container>
      )}
    </>
  );
}

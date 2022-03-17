import React, { Component } from 'react';
import * as S from './styles'

export default class ProductInfo extends Component {
  render() {
    const { props } = this;
    return (
      <S.ProductInfosContainer >
        <S.ProductPrice >
          {props.price?.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </S.ProductPrice>
        {props.shipping && <S.ProductFreeShipping>Frete grátis</S.ProductFreeShipping>}
        <S.ProductTitle >
          <p>{props.title}</p>
        </S.ProductTitle>
      </S.ProductInfosContainer>
    );
  }
}


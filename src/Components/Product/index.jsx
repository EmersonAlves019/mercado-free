import React, { Component } from 'react';
import * as S from "./styles";
import ProductInfo from '../ProductInfo/index';

export default class Product extends Component {
  render() {
    const { products } = this.props;
    return products?.map(({ title, price, thumbnail, shipping, id }) => {
      return (
        <S.ProductCardContainer key={id} >
          <S.ProductImage>
            <img src={thumbnail.replace('I.jpg', 'J.jpg')} alt={title} />
          </S.ProductImage>
          <ProductInfo
            price={price}
            title={title}
            shipping={shipping.free_shipping}
          ></ProductInfo>
        </S.ProductCardContainer>
      );
    });
  }
}

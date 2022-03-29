import React from 'react';
import * as S from './styles';
import ProductInfo from '../ProductInfo/index';

const Product = ({ products }) => {
  return products?.map(({ title, price, thumbnail, shipping, id }) => {
    return (
      <S.SLink key={id} to={`/product-details/${id}`}>
        <S.ProductCardContainer>
          <S.ProductImage>
            <img src={thumbnail.replace('I.jpg', 'J.jpg')} alt={title} />
          </S.ProductImage>
          <ProductInfo
            price={price}
            title={title}
            shipping={shipping.free_shipping}
          />
        </S.ProductCardContainer>
      </S.SLink>
    );
  });
};

export default Product;

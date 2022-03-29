import React, { useEffect, useState } from 'react';
import * as S from './styles';

export default function ProductImages({ pictures, thumbnail }) {
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    setCurrentImage(thumbnail?.replace('I.jpg', 'J.jpg'));
  }, [thumbnail]);

  return (
    <S.ProductImageContainer>
      <S.AsideImage>
        {pictures?.slice(0, 6).map(({ url, id }) => (
          <img
            onMouseOver={() => setCurrentImage(url)}
            key={id}
            src={url}
            alt={url}
          />
        ))}
      </S.AsideImage>
      {currentImage && (
        <S.CurrentImage>
          <img src={currentImage} alt={'aaaaaa'} />
        </S.CurrentImage>
      )}
    </S.ProductImageContainer>
  );
}

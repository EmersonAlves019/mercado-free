import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

import Paper from '@mui/material/Paper';

import * as S from './styles';
import { useMarket } from '../../Context/Hooks/MarketProvider';

const SlideImages = () => {
  const { products, setQuery } = useMarket();

  useEffect(() => {
    if (!products.length) {
      setQuery('promoção');
    }
  }, []);

  const settings = {
    autoPlay: true,
    stopAutoPlayOnHover: true,
    interval: 3000,
    indicators: true,
    swipe: true,
    cycleNavigation: true,
    navButtonsAlwaysVisible: true,
    navButtonsAlwaysInvisible: false,
    fullHeightHover: false,
    duration: 500,
  };

  return (
    <>
      {products?.length && (
        <S.Container>
          <Carousel {...settings} animation='slide'>
            {products?.slice(0, 10)?.map(({ thumbnail, id }) => {
              return (
                <Paper key={id}>
                  <img src={thumbnail.replace('I.jpg', 'J.jpg')} alt='' />
                </Paper>
              );
            })}
          </Carousel>
        </S.Container>
      )}
    </>
  );
};

export default SlideImages;

import React from 'react';

import Header from '../../Components/Header';
import { useMarket } from '../../Context/Hooks/MarketProvider';
import Product from '../../Components/Product';
import SlideImages from './../../Components/SlideImage/';
import Spinner from './../../Components/Spinner/';

export default function Home() {
  const { products, isLoading } = useMarket();

  return (
    <div>
      <Header />
      <div style={{ 'padding-top': '120px' }}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <SlideImages />
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                'justify-content': 'center',
              }}
            >
              <Product products={products} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

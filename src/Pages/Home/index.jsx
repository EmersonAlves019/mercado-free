import React from 'react';
import Header from '../../Components/Header';
import { useMarket } from '../../Context/Hooks/MarketProvider';
import Product from "./../../Components/Product/index";

export default function Home() {
  const { products } = useMarket()
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Product products={ products} />
      </div>
    </>
  )
} 
import React from 'react';
import Header from '../../Components/Header';
import { useMarket } from '../../Context/Hooks/MarketProvider';
import Product from "./../../Components/Product/index";

export default function Home() {
  const { products, visible } = useMarket()
  return (
    <>
      <Header />
      {visible &&
        (<div style={{ width: '100%', height: '89.7%', background: 'rgba(5,5,5, 30%)', position: 'absolute' }}>

        </div>)}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Product products={ products } />
      </div>
    </>
  )
} 
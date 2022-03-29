import React, { useState, useEffect, createContext, useContext } from 'react';
import {
  getAllCategories,
  getByCategoryAndQuery,
  getProductInfo,
} from '../../../Services/api';

const MarketContext = createContext();

export const MarketProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [productInfos, setInfos] = useState({});
  const [productId, setProductId] = useState('');
  const [cartItens, setCartItens] = useState([]);

  const getCategories = async () => {
    setIsLoading(true);
    setIsLoading(false);
    const categories = await getAllCategories();
    setCategories(categories.slice(0, 20));
  };

  const getProducts = async (category, query) => {
    setIsLoading(true);
    if (query === 'felipe') {
      setProducts([
        {
          title: 'Professor gostoso e inteligente',
          price: 5,
          thumbnail:
            'https://ca.slack-edge.com/TMDDFEPFU-U02F24A9QLU-89a646b13624-512',
          shipping: {
            free_shipping: true,
          },
        },
      ]);
    } else {
      const products = await getByCategoryAndQuery(category, query);
      setProducts(products.results);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getProductInfo(productId).then((data) => {
      setInfos(data);
      console.log(data);
      setIsLoading(false);
    });
  }, [productId]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getProducts(category, query);
  }, [category, query]);

  const state = {
    categories,
    setCategory,
    products,
    setQuery,
    query,
    isLoading,
    productInfos,
    setProductId,
  };

  return (
    <MarketContext.Provider value={state}>{children}</MarketContext.Provider>
  );
};

export const useMarket = () => useContext(MarketContext);

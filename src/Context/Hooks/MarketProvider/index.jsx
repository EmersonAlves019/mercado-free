import React, { useState, useEffect, createContext, useContext } from 'react';
import { getAllCategories, getByCategoryAndQuery } from '../../../Services/api';

const MarketContext = createContext()

export const MarketProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')
  const [visible, setVisible] = useState(false)
  
  const getCategories = async () => {
    const categories = await getAllCategories()
    setCategories(categories.slice(0, 20))
  }

  const getProducts = async (category, query) => {
    const products = await getByCategoryAndQuery(category, query)
    setProducts(products.results)
  }
  
  useEffect(() => {
    getProducts(category)
  }, [category])
  

  useEffect(() => {
    getCategories()
  },[])

  const state = {categories, setCategory, products, visible, setVisible}
 
  return (
    <MarketContext.Provider value={state}>
      {children}
    </MarketContext.Provider>
  )
}

export const useMarket = () => useContext(MarketContext)
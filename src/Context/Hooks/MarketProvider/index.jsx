import React, { useState, useEffect, createContext, useContext } from 'react';
import { getAllCategories, getByCategoryAndQuery } from '../../../Services/api';

const MarketContext = createContext()

export const MarketProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [ category, setCategory ] = useState('')
  
  const getCategories = async () => {
    const categories = await getAllCategories()
    setCategories(categories)
  }
  
  const getProducts = async () => {
    const products = await getByCategoryAndQuery(category, '')
    setProducts(products.results)
  }

  useEffect(() => {
    getProducts()
  }, [category])
  

  useEffect(() => {
    getCategories()
  },[])

  const state = {categories, setCategory,products}

  return (
    <MarketContext.Provider value={state}>
      {children}
    </MarketContext.Provider>
  )
}

export const useMarket = () => useContext(MarketContext)
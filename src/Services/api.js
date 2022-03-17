import axios from 'axios';

const customAxios = async (url) => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch(error) {
    console.log(error.message)
  }
}

export const getAllCategories = async () => {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
   return await customAxios(URL)
}

export const getByCategoryAndQuery = async (id, query) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${id}&q=${query}`
  return await customAxios(URL)
}

export const getProductInfo = async (id) => {
  const URL = `https://api.mercadolibre.com/items/${id}`
  return await customAxios(URL)
}
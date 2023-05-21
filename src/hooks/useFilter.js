// import { useState } from 'react'
import { useFilterStore } from '../store/filters'

export default function useFilter () {
  const filters = useFilterStore(state => state.filters)
  const setFilters = useFilterStore(state => state.setFilters)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        filters.category.toLowerCase() === 'all' ||
        product.category.toLowerCase() === filters.category.toLowerCase()
      )
    })
  }

  return { filterProducts, filters, setFilters }
}

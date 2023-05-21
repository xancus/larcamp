import { create } from 'zustand'

export const useFilterStore = create((set, get) => ({
  filters: {
    category: 'all',
    subcategory: 'all',
    productsSearched: []
  },
  setFilters: (filtersPassed) => {
    set((state) => ({
      filters: {
        ...state.filters,
        category: filtersPassed.category ? filtersPassed.category : state.filters.category,
        subcategory: filtersPassed.subcategory ? filtersPassed.subcategory : state.filters.subcategory,
        productsSearched: filtersPassed.productsSearched ? filtersPassed.productsSearched : state.filters.productsSearched
      }
    }))
  }
}))

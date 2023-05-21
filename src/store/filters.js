import { create } from 'zustand'

export const useFilterStore = create((set, get) => ({
  filters: {
    category: 'all',
    subcategory: 'all',
    selectedSize: { id: 0, selected: false },
    productsSearched: []
  },
  setFilters: (filtersPassed) => {
    set((state) => ({
      filters: {
        ...state.filters,
        category: filtersPassed.category ? filtersPassed.category : state.filters.category,
        subcategory: filtersPassed.subcategory ? filtersPassed.subcategory : state.filters.subcategory,
        selectedSize: filtersPassed.selectedSize ? filtersPassed.selectedSize : state.filters.selectedSize,
        productsSearched: filtersPassed.productsSearched ? filtersPassed.productsSearched : state.filters.productsSearched
      }
    }))
  }
}))

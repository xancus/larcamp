import { create } from 'zustand'

export const useFilterStore = create((set, get) => ({
  filters: {
    category: 'all',
    subcategory: ['all'],
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

export const useCartStore = create((set, get) => ({
  cart: [],
  setCart: (item) => {
    set((state) => {
      const { cart } = state
      const existingItem = cart.find((cartItem) => cartItem.id === item.id)

      if (existingItem) {
        const updatedCart = cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
        updateLocalStorage(updatedCart)
        return { cart: updatedCart }
      } else {
        const updatedCart = [...cart, { ...item, quantity: 1 }]
        updateLocalStorage(updatedCart)
        return { cart: updatedCart };
      }
    })
  },
  initializeCartFromLocalStorage: (item) => {
    set({ cart: item })
  },
  removeCart: (item) => {
    set((state) => {
      const { cart } = state
      const existingItem = cart.find((cartItem) => cartItem.id === item.id)
      if (existingItem.quantity > 1) {
        const updatedCart = cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        updateLocalStorage(updatedCart)
        return { cart: updatedCart }
      } else {
        const updatedCart = cart.filter(el => el.id !== item.id)
        updateLocalStorage(updatedCart)
        return { cart: updatedCart }
      }
    })
  }
}))

function updateLocalStorage (state) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('LarCart', JSON.stringify(state))
  }
}

import { useCartStore } from '@/store/filters';

export default function useCart() {
  const cart = useCartStore(state => state.cart)
  const setCart = useCartStore(state => state.setCart)
  const removeCart = useCartStore(state => state.removeCart)
  const numberProducts = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.quantity
  }, 0)

  return { cart, setCart, removeCart, numberProducts }
}

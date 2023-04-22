import { useState, useEffect } from 'react'
import Product from './Product'

export default function TopProducts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/api/products', {
      method: 'GET',
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
      .then(data => {
        const topProducts = data.top_products
        setProducts(data.products.filter(prod => topProducts.includes(prod.id)))
      })
  }, [])

  return (
    <>
      {products.map(product => {
        return (
          <Product {... product} key={product.id} />
        )
      })}
    </>
  )
}

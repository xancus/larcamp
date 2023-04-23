import { useState, useEffect } from 'react'
import Product from './Product'
import TopProducts from './TopProducts'

export default function Products({ nProducts, category }) {
  const [products, setProducts] = useState([])
  const [productsSearched, setProductsSearched] = useState(nProducts)
  const [title, setTitle] = useState('Todos los productos')

  useEffect(() => {
    fetch('/api/productsByCategory', {
      method: 'POST',
      body: category,
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        category === 'all'
          ? setTitle('Todos los productos')
          : setTitle(`Todo sobre ${category}`)
      })
  }, [category])

  useEffect(() => {
    setProductsSearched(nProducts)
  }, [nProducts])

  return (
    <div className='mt-8'>
      {productsSearched.length > 0 && (
        <section className='mt-8'>
          <h2 className='font-bold mb-4 sm:mb-4 sm:mb-8 text-muted text-center text-2xl'>Productos según tu búsqueda</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4'>
            {productsSearched.map(product => {
              return (
                <Product {... product} key={product.id} />
              )
            })}
          </div>
        </section>
      )}

      <section className='mt-8'>
        <h2 className='font-bold mb-4 sm:mb-4 sm:mb-8 text-muted text-center text-2xl'>{title}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4'>
          {products.map(product => {
            return (
              <Product {... product} key={product.id} />
            )
          })}
        </div>
      </section>

      <section className='mt-8 mb-8'>
        <h2 className='font-bold mb-4 sm:mb-4 sm:mb-8 text-muted text-center text-2xl'>Productos destacados</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4'>
          <TopProducts />
        </div>
      </section>
    </div>
  )
}

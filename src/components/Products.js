import { useState, useEffect } from 'react'
import Product from './Product'
import TopProducts from './TopProducts'
import useFilter from '../hooks/useFilter'

export default function Products({ filteredProducts }) {
  // const [products, setProducts] = useState([])
  // const [productsSearched, setProductsSearched] = useState(filters.productsSearched)
  const { filters } = useFilter()
  const [title, setTitle] = useState('Todos los productos')

  /* useEffect(() => {
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
  }, [category]) */

  useEffect(() => {
    filters.category === 'all'
      ? setTitle('Todos los productos')
      : setTitle(`Todo sobre ${filters.category}`)
  }, [filters.category])

  return (
    <div className='mt-8'>

      {filters.productsSearched.length > 0 && (
        <section className='mt-8'>
          <h2 className='font-bold mb-4 sm:mb-4 sm:mb-8 text-muted text-center text-2xl text-black border-gray-300 border-b sm:border-b md:border-0 lg:border-0 pb-4'>Productos según tu búsqueda</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {filters.productsSearched.map(product => {
              return (
                <Product {... product} key={product.id} />
              )
            })}
          </div>
        </section>
      )}

      <section className='mt-8'>
        <h2 className='font-bold mb-4 sm:mb-4 sm:mb-8 text-muted text-center text-2xl text-black border-gray-300 border-b sm:border-b md:border-0 lg:border-0 pb-4'>{title}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {filteredProducts.map(product => {
            return (
              <Product {... product} key={product.id} />
            )
          })}
        </div>
      </section>

      <section className='mt-8 mb-8'>
        <h2 className='font-bold mb-4 sm:mb-4 sm:mb-8 text-muted text-center text-2xl text-black border-gray-300 border-b sm:border-b md:border-0 lg:border-0 pb-4'>Productos destacados</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          <TopProducts />
        </div>
      </section>
    </div>
  )
}

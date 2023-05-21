import { useState, useEffect } from 'react'
import useFilter from '../hooks/useFilter'
// import Link from 'next/link'
// import { products as initialProducts } from '../../db/products.json'

export default function CategoriesMenu({ initialProducts }) {
  const [categories, setCategories] = useState([])
  const { setFilters } = useFilter()

  useEffect(() => {
    /* fetch('/api/products', {
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
      .then(data => {
        setCategories([...new Set(data.products.map(prod => prod.category))])
      }) */
    // <Link href={`/categories/${encodeURIComponent(category)}`} className='font-bold hover:text-teal-400 uppercase text-xs text-gray-600'> {cat} </Link>
    setCategories([...new Set(initialProducts.map(prod => prod.category))])
  }, [initialProducts])

  return (
    <div className='flex items-center bg-teal-100 h-12 justify-center gap-4 flex-row flex-no-wrap'>
      {categories.map((category, idx) => {
        const cat = category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
        const isLast = idx === categories.length - 1
        return (
          <div key={category} className='flex flex-direction-row gap-2 h-full place-items-center'>
            <h3
              onClick={() => setFilters({ category: cat })}
              className='font-bold hover:text-teal-400 uppercase text-xs text-gray-600'
            > {cat}
            </h3>

            {!isLast
              ? <div className='border border-light-blue separator h-full border' />
              : <></>}
          </div>
        )
      })}
    </div>

  )
}

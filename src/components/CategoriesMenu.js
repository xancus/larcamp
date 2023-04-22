import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CategoriesMenu() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/api/products', {
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
      .then(data => {
        setCategories([...new Set(data.products.map(prod => prod.category))])
      })
  }, [])

  return (
    <div className='flex items-center bg-teal-100 h-12 justify-center gap-4 flex-row flex-no-wrap'>
      {categories.map((category, idx) => {
        const cat = category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
        const isLast = idx === categories.length - 1
        return (
          <div key={category} className='flex flex-direction-row gap-2 h-full place-items-center'>
            <Link href={`/categories/${encodeURIComponent(category)}`} class='font-semibold hover:text-black uppercase text-xs'> {cat} </Link>
            {!isLast
              ? <div className='border border-light-blue separator h-full border' />
              : <></>}
          </div>
        )
      })}
    </div>

  )
}

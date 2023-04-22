import Products from '@/components/Products'
import { useState } from 'react'

export default function Layout({ category }) {
  const [keyword, setKeyword] = useState('')
  const [nProducts, setnProducts] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    fetch('/api/searchProductByKeyword', {
      method: 'POST',
      body: keyword,
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
      .then(data => {
        setnProducts(data)
      })
  }

  const handleInputChange = (ev) => {
    setKeyword(ev.target.value)
  }
  return (
    <div className='flex flex-wrap gap-4 lg:flex-nowrap'>
      <div className='p-5 lg:w-auto lg:min-w-150 w-full bg-gray-200 h-fit min-h-screen'>
        <div className='pb-2'>
          <form onSubmit={handleSubmit}>
            <div className=' bg-white flex flex-no-wrap w-full py-2 px-2 rounded-xl justify-around'>
              <input value={keyword} type='text' placeholder='Busca un producto' className='focus:outline-none' onChange={handleInputChange} />
              <button type='submit' className='md:w-auto text-black py-1 px-3 text-center rounded-md hover:scale-90 transition duration-300'>Buscar</button>
            </div>
          </form>
        </div>
      </div>
      <div className='lg:min-w-1000 w-full'>
        <Products nProducts={nProducts} category={category} />
      </div>
    </div>
  )
}
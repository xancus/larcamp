import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Product from '@/components/Product'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const font = Inter({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function ProductId () {
  const [productData, setProductData] = useState()
  const [relatedProducts, setRelatedProducts] = useState([])
  const router = useRouter()
  const { product } = router.query
  const [showInfo, setShowInfo] = useState(false)
  // recuperar información del producto y construir el div mostrando la info
  useEffect(() => {
    fetch(`/api/products/${product}`, {
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data[0])
      })
  }, [product])

  useEffect(() => {
    fetch('/api/productsByCategory', {
      method: 'POST',
      body: productData?.category,
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
      .then(data => {
        setRelatedProducts(data)
      })
  }, [productData?.category])

  return (
    <div>
      <div className='bg-light-blue mx-auto'>
        <Header />
      </div>

      <div className='sm:max-w-4xl px-5 sm:px-5 md:px-5 lg:px-0 md:max-w-4xl lg:max-w-5xl lg:max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4'>
          <section>
            <div className='p-8'>
              <Image src={productData?.image} alt={productData?.name} width={300} height={300} className='max-w-xs md:max-w-lg' />
            </div>
          </section>
          <section className='mb-8 mt-0 sm:mt-0 sm:mt-8'>
            <h2 className={`font-bold text-4xl mb-4 text-gray-900 ${font.className}`}>
              {productData?.name}
            </h2>

            {productData?.size.length > 0 && (
              <div className='flex items-center mb-8'>
                <div>
                  <p className='mr-5 font-bold text-lg text-black'>
                    Tamaños del producto
                    <button className='relative' onClick={() => setShowInfo(!showInfo)}>
                      <i className='fas fa-info-circle ml-2' />
                      {showInfo && (
                        <span className='tooltip absolute bg-gray-700 text-white py-2 px-3 rounded-lg text-sm w-40'>Tamaños disponibles del producto. Solo informativo</span>
                      )}
                    </button> :
                  </p>
                </div>

                <div>{productData?.size.map(prodSize => {
                  // hover:bg-gray-500 hover:text-white
                  return (
                    <button key={prodSize} className='border border-gray-500 text-gray-500 font-semibold py-2 px-4 rounded transition-colors duration-300'>{prodSize}</button>
                  )
                })}
                </div>
              </div>
            )}

            <div className='flex flex-row flex-wrap gap-2 items-center'>
              <h3 className='font-bold text-lg text-black'>Categoría:</h3> <span className='text-black'>{productData?.category}</span>
            </div>

            <div className='flex flex-row flex-wrap gap-2 items-center'>
              <h3 className='font-bold text-lg text-black'>Características:</h3>
              <p className='text-black'>{productData?.description}</p>
            </div>

            <div className='mt-4'>
              <button className='md:w-auto bg-teal-100 text-black py-1 px-3 text-center rounded-md hover:scale-110 transition duration-300'>🛒 Pedir</button>
            </div>
          </section>
        </div>

        <div className='pb-12 absolute left-0 bg-gray-200 right-0'>
          <div className='sm:max-w-4xl px-5 sm:px-5 md:px-5 lg:px-0 md:max-w-4xl lg:max-w-5xl lg:max-w-7xl mx-auto'>
            <h3 className='font-bold text-2xl text-center mb-4 mt-4 sm:mb-4 sm:mt-4 md:mt-8 md:mb-8 text-black'>Productos relacionados</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4'>
              {relatedProducts.map(product => {
                return (
                  <Product {... product} key={product.id} />
                )
              })}
            </div>
          </div>
          <div className='absolute w-full mt-8'><Footer /></div>
        </div>
      </div>
    </div>

  )
}

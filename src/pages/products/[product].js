import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Product from '@/components/Product'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import productsData from 'db/products.json'
import useFilter from '@/hooks/useFilter'
import useCart from '@/hooks/useCart'

const font = Inter({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function ProductId () {
  const [products] = useState(productsData.products)
  const [productData, setProductData] = useState()
  const [relatedProducts, setRelatedProducts] = useState([])
  const [showInfo, setShowInfo] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  // routers
  const router = useRouter()
  const { product } = router.query
  // store
  const { setFilters, filters } = useFilter()
  const { setCart } = useCart()

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

  const handleSize = (prodSize) => {
    // filtrar per els possibles productes que es diuen com productData.name + prodSize eliminant previament el seu size si es que en té
    if (prodSize !== filters.selectedSize.id) {
      const productRelatedSize = products.filter(product => {
        const lastIndex = productData.slug.lastIndexOf('-')
        const nameToBuild = productData.slug.slice(0, lastIndex)
        const nameToCheck = nameToBuild + '-' + prodSize
        return product.slug.toLowerCase() === nameToCheck.toLowerCase()
      })
      setFilters({
        selectedSize: {
          selected: true,
          id: prodSize
        }
      })
      router.push(`/products/${encodeURIComponent(productRelatedSize[0].id)}`)
    }
  }

  const handleAddCart = (productData) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    setCart(productData)
  }

  return (
    <div>
      <div className='bg-light-blue mx-auto'>
        <Header />
      </div>
      {productData && (
        <div className='sm:max-w-4xl px-5 sm:px-5 md:px-5 lg:px-1 md:max-w-4xl lg:max-w-5xl lg:max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4'>
            <section>
              <div className='p-8'>
                <Image src={productData?.image} alt={productData.name} width={300} height={300} className='max-w-xs md:max-w-lg' />
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

                  <div>{productData.size.map(prodSize => {
                    return (
                      <button onClick={() => handleSize(prodSize)} key={prodSize} className={`${filters.selectedSize.selected === true && filters.selectedSize.id === prodSize ? 'bg-gray-500 text-white' : 'hover:bg-gray-500 hover:text-white'} border border-gray-500 text-gray-500 font-semibold py-2 px-4 rounded transition-colors duration-300 mr-2`}>{prodSize}</button>
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

              <div className='mt-4 w-auto'>
                <button
                  onClick={() => handleAddCart(productData)}
                  disabled={isLoading}
                  className={`flex place-content-center min-w-[65px] w-full bg-[#fb923c] font-bold text-sm text-black py-1 px-3 text-center rounded-full hover:bg-[#fdba74] transition duration-300 ${isLoading ? 'cursor-not-allowed' : ''}`}
                >
                  {isLoading
                    ? (
                      <svg aria-hidden='true' class='w-6 h-6 mr-2 text-gray-300 animate-spin dark:text-gray-600 fill-black' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
                        <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                      </svg>)
                    : ('🛒  AÑADIR AL CARRITO')}
                </button>
              </div>
            </section>
          </div>

          <div className='pb-12 absolute left-0 bg-gray-200 right-0'>
            <div className='sm:max-w-4xl px-5 sm:px-5 md:px-5 lg:px-1 md:max-w-4xl lg:max-w-5xl lg:max-w-7xl mx-auto'>
              <h3 className='font-bold text-2xl text-center mb-4 mt-4 sm:mb-4 sm:mt-4 md:mt-8 md:mb-8 text-black'>Productos relacionados</h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
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
      )}
    </div>

  )
}

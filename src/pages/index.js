import Layout from '@/components/Layout'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import CategoriesMenu from '@/components/CategoriesMenu'
import Footer from '@/components/Footer'
import { useState } from 'react'
import useFilter from '../hooks/useFilter'
import productsData from '../../db/products.json'

const font = Inter({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function Home() {
  // const category = 'all'
  const [products] = useState(productsData.products)
  const { filterProducts } = useFilter()
  const filteredProducts = filterProducts(products)

  return (
    <div className={font.className}>
      <div className='bg-light-blue mx-auto'>
        <Header />
      </div>
      <CategoriesMenu initialProducts={products} />
      <div className='max-w-7xl bg-white mx-auto'>
        <Layout filteredProducts={filteredProducts} />
      </div>
      <Footer />
    </div>
  )
}

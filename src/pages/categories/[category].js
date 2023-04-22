import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import CategoriesMenu from '@/components/CategoriesMenu'

const font = Inter({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function Category () {
  const router = useRouter()
  const { category } = router.query
  return (
    <div className={font.className}>
      <div className='bg-light-blue mx-auto'>
        <Header />
      </div>
      <CategoriesMenu />
      <div className='max-w-7xl bg-white mx-auto mb-4'>
        <Layout category={category} />
      </div>
    </div>
  )
}

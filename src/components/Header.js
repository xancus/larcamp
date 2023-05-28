import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import useFilter from '../hooks/useFilter'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { setFilters } = useFilter()

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='sm:max-w-4xl px-5 sm:px-5 md:px-5 lg:px-1 md:max-w-4xl lg:max-w-5xl lg:max-w-7xl mx-auto'>
      <nav className='flex items-center justify-between py-3 max-h-[100px]'>
        <div className='flex items-center'>
          <Link href='/'>
            <Image src='https://res.cloudinary.com/dj7zyx57u/image/upload/v1682181568/LARCAMP/larcamp_logo_zunzvt.png' alt='Larcamp' className='h-auto mr-4 max-w-[200px] md:max-w-[300px]' width={500} height={500} />
          </Link>
        </div>
        <section
          className={`${isOpen ? 'w-full h-full top-0 left-0 bg-black z-15 opacity-40 absolute' : 'hidden'} md:hidden lg:hidden`}
        />
        <div className={`${isOpen ? '-translate-x-0 absolute right-0 h-screen top-0 z-20 bg-teal-100 w-3/4' : 'flex flex-col items-center z-10'} flex flex-col items-center z-10`}>
          <div className='flex justify-end w-full'>
            <button
              id='menu-toggle'
              data-collapse-toggle='navbar-hamburger'
              type='button'
              className={`${isOpen ? 'mt-6 mr-6 mb-2 border-gray-400 text-gray-400' : 'mt-0'} flex items-center px-3 py-2 border  rounded text-gray-200 border-white hover:bg-gray-300 dark:hover:bg-gray-700 hover:border-gray-400 md:hidden lg:hidden}`}
              aria-controls='navbar-hamburger'
              aria-expanded='false'
              onClick={handleToggle}
            >
              <span className='sr-only'>Open main menu</span>
              <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' /></svg>
            </button>
          </div>

          <div className='md:flex lg:flex items-center flex-direction-row flex-wrap-nowrap gap-4 h-12 hidden'>
            <div className='flex flex-direction-row gap-4 h-full place-items-center'>
              <Link
                href='/' onClick={() => setFilters({
                  category: 'all',
                  productsSearched: []
                })} className='font-bold hover:text-teal-100 uppercase text-xs text-gray-600'
              >Productos
              </Link>
              <div className='border border-teal-100 separator h-full border' />
            </div>
            <div className='flex flex-direction-row gap-4 h-full place-items-center'>
              <Link href='/info' className='font-bold hover:text-teal-100 uppercase text-xs text-gray-600'>Quienes somos</Link>
              <div className='border border-teal-100 separator h-full border' />
            </div>
            <div className='flex flex-direction-row gap-4 h-full place-items-center'>
              <Link href='/contact' className='font-bold py-2 hover:text-teal-100 uppercase text-xs text-gray-600'>Realiza tu pedido</Link>
              <div className='border border-teal-100 separator h-full border' />
            </div>
            <div className='flex flex-direction-row gap-4 h-full place-items-center'>
              <Link href='/cart' className='font-bold py-2 hover:text-teal-100 uppercase text-sm text-gray-600 hover:scale-110 transition duration-300'>🛒</Link>
            </div>
          </div>

          {isOpen && (
            <div className='translate-x-0 sm:flex flex-col items-center rounded text-gray-200 bg-teal-100 md:hidden h-full w-full'>
              <div className='flex flex-direction-row gap-4 h-auto place-items-center p-2 px-4 border-b border-gray-400 w-full'>
                <Link href='/' className='font-bold py-2 hover:text-teal-400 uppercase text-xs text-black text-gray-600'>Productos</Link>
              </div>
              <div className='flex flex-direction-row gap-4 h-auto place-items-center p-2 px-4 border-b border-gray-400 w-full'>
                <Link href='/info' className='font-bold py-2  hover:text-teal-400 uppercase text-xs text-black text-gray-600'>Quienes somos</Link>
              </div>
              <div className='flex flex-direction-row gap-4 h-auto place-items-center p-2 px-4 border-b border-gray-400 w-full'>
                <Link href='/contact' className='font-bold py-2 hover:text-teal-400 uppercase text-xs text-black text-gray-600'>Realiza tu pedido</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

    </div>
  )
}

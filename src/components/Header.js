import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='sm:max-w-4xl px-5 sm:px-5 md:px-5 lg:px-0 md:max-w-4xl lg:max-w-5xl lg:max-w-7xl mx-auto'>
      <nav className='flex items-center justify-between py-3'>
        <div className='flex items-center'>
          <Link href='/'>
            <Image src='https://res.cloudinary.com/dj7zyx57u/image/upload/v1682181568/LARCAMP/larcamp_logo_zunzvt.png' alt='Larcamp' className='h-auto mr-4 max-w-[200px] md:max-w-[300px]' width={500} height={500} />
          </Link>
        </div>

        <div className='flex flex-col items-center z-10'>
          <div className='flex justify-end w-full'>
            <button
              id='menu-toggle'
              className={`${isOpen ? 'mt-32 mb-2' : 'mt-0'} flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white md:hidden lg:hidden}`}
              onClick={handleToggle}
            >
              <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          <div className='md:flex lg:flex items-center flex-direction-row flex-wrap-nowrap gap-4 h-12 hidden'>
            <div className='flex flex-direction-row gap-4 h-full place-items-center'>
              <Link href='/' className='font-semibold hover:text-teal-100 uppercase text-xs'>Productos</Link>
              <div className='border border-teal-100 separator h-full border' />
            </div>
            <div className='flex flex-direction-row gap-4 h-full place-items-center'>
              <Link href='#' className='font-semibold hover:text-teal-100 uppercase text-xs'>Quiénes somos</Link>
              <div className='border border-teal-100 separator h-full border' />
            </div>
            <div className='flex flex-direction-row gap-4 h-full place-items-center'>
              <Link href='#' className='font-semibold py-2 hover:text-teal-100 uppercase text-xs'>Realiza tu pedido</Link>
            </div>
          </div>
          {isOpen && (
            <div className='sm:flex flex-col items-center border rounded text-gray-200 border-gray-400 bg-teal-100 p-4 md:hidden'>
              <div className='flex flex-direction-row gap-4 h-full place-items-center'>
                <Link href='/' className='font-semibold py-2 hover:text-teal-400 uppercase text-xs text-black'>Productos</Link>
              </div>
              <div className='flex flex-direction-row gap-4 h-full place-items-center'>
                <Link href='#' className='font-semibold py-2  hover:text-teal-400 uppercase text-xs text-black'>Quiénes somos</Link>
              </div>
              <div className='flex flex-direction-row gap-4 h-full place-items-center'>
                <Link href='#' className='font-semibold py-2 hover:text-teal-400 uppercase text-xs text-black'>Realiza tu pedido</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

    </div>
  )
}

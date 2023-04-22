import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='max-w-7xl mx-auto'>
      <nav class='flex items-center justify-between py-3'>
        <div class='flex items-center'>
          <Link href='/'>
            <Image src='/larcamp_logo.png' alt='Larcamp' className='h-auto mr-4 max-w-xs' width={500} height={500} />
          </Link>
        </div>
        <div class='flex items-center flex-direction-row flex-wrap-nowrap gap-4 h-12'>
          <div className='flex flex-direction-row gap-4 h-full place-items-center'>
            <Link href='/' class='font-semibold hover:text-black uppercase text-xs'>Productos</Link>
            <div className='border border-teal-100 separator h-full border' />
          </div>
          <div className='flex flex-direction-row gap-4 h-full place-items-center'>
            <Link href='#' class='font-semibold hover:text-black uppercase text-xs'>Quiénes somos</Link>
            <div className='border border-teal-100 separator h-full border' />
          </div>
          <div className='flex flex-direction-row gap-4 h-full place-items-center'>
            <Link href='#' class='font-semibold py-2 hover:text-black uppercase text-xs'>Realiza tu pedido</Link>
          </div>
        </div>
      </nav>

    </div>
  )
}

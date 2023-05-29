import useCart from '@/hooks/useCart'
import Header from '@/components/Header'
import useFilter from '@/hooks/useFilter'
import Image from 'next/image'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import Link from 'next/link'

export default function Cart() {
  const { cart, setCart, removeCart, numberProducts } = useCart()
  const { setFilters } = useFilter()

  return (
    <section className='mb-8 bg-gray-100 h-screen'>
      <div className='bg-light-blue mx-auto'>
        <Header changeFilters={setFilters} />
      </div>
      <div className='sm:max-w-4xl px-5 sm:px-5 md:px-5 lg:px-2 md:max-w-4xl lg:max-w-5xl lg:max-w-7xl mx-auto flex flex-row gap-4 flex-wrap'>
        <div className='bg-white border-gray-300 border mt-4 basis-3/5 grow'>
          <h2 className='text-muted text-left text-2xl text-black font-bold mt-8 ml-8 mr-8 border-b border-gray-300 pb-2'>Carrito</h2>
          {cart.length > 0 && (
            cart.map(element => {
              return (
                <div key={element.id} className='flex flex-row py-6 mx-6 gap-x-4 flex-wrap border-b border-gray-300'>
                  <Link href={`/products/${encodeURIComponent(element.id)}`}>
                    <Image src={element.image} alt={element.name} className='max-w-[250px] h-48 object-contain' height={500} width={500} />
                  </Link>
                  <div>
                    <h3 className='font-bold text-lg text-black'>{element.name}</h3>
                    <p className='text-black'>{element.description}</p>
                    <div className='flex flex-row flex-wrap mt-2'><p className='text-black mr-2 font-bold'>Cantidad</p><button onClick={() => removeCart(element)} className='text-black rounded-full bg-gray-200 w-[24px] h-[24px] mr-2'><Icon className='mb-1' as={MinusIcon} boxSize={3} /></button> <p className='mr-2 text-black'>{element.quantity}</p> <button onClick={() => setCart(element)} className='text-black rounded-full bg-gray-200 w-[24px] h-[24px]'><Icon className='mb-1' as={AddIcon} boxSize={3} /></button></div>
                  </div>
                </div>
              )
            })
          )}
          <div className='flex flex-col flex-wrap items-end'>
            <p className='text-muted text-gray-800 font-bold mt-2 mb-2 mr-8 text-right'>Subtotal ({numberProducts} productos) </p>
            <Link href='/contact' className='md:w-auto bg-teal-100 text-black py-1 px-3 mr-8 mb-6 rounded-md hover:scale-95 transition duration-300'>Tramitar pedido</Link>

          </div>
        </div>
      </div>
    </section>
  )
}

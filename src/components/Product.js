import Image from 'next/image'
import Link from 'next/link'

export default function Product({ name, image, id }) {
  // onclick del producte haurà de mostrar la pagina de informacio del producte

  return (
    <Link href={`/products/${encodeURIComponent(id)}`}>
      <div className='bg-white rounded-lg border border-solid border-gray-300 border-0 sm:border-0 md:border lg:border overflow-hidden p-5 hover:shadow-xl hover:cursor-pointer h-full flex justify-between flex-col'>
        <div className='rounded-xl transition duration-500 hover:scale-110'>
          <Image src={image} alt={name} className='w-full h-48 object-contain' height={500} width={500} />
        </div>
        <div className='mt-2'>
          <h3 className='font-bold text-lg text-black'>{name}</h3>
        </div>
        <div className='flex mt-2'>
          <button className='md:w-auto bg-teal-100 text-black py-1 px-3 text-center rounded-md'>+ Info</button>
        </div>
      </div>
    </Link>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export default function Footer () {
  return (
    <section className='bg-light-blue mx-auto'>
      <div className='px-5 sm:px-5 md:px-5 lg:px-0 mx-w-4xl sm:max-w-4xl md:max-w-6xl lg:min-w-1000 w-full mx-auto p-4 flex flex-row flex-wrap justify-between items-center'>
        <div id='images' className='flex flex-row w-full sm:w-full sm:w-full md:w-auto'>
          <Image src='/wetdry.png' alt='wet&dry' className='w-auto max-w-[250px] h-auto object-contain' height={500} width={500} />
          <Image src='/ecolabel.png' alt='ecolabel' className='w-auto max-w-[250px] h-auto object-contain' height={500} width={500} />
        </div>
        <div className='flex flex-col flex-wrap'>

          <Link href='/avisoLegal' className='font-semibold hover:text-teal-400 uppercase text-xs text-left'> Aviso Legal </Link>
          <Link href='/cookies' className='font-semibold hover:text-teal-400 uppercase text-xs'>Política de cookies </Link>
          <Link href='/contacto)' className='font-semibold hover:text-teal-400 uppercase text-xs'> Contacto </Link>
        </div>
      </div>
      <div className='px-5 sm:px-5 md:px-5 lg:px-0 mx-w-4xl sm:max-w-4xl md:max-w-6xl lg:min-w-1000 w-full mx-auto p-4 flex flex-row flex-wrap justify-between items-center'>
        <p>LARCAMP S.L.</p>
        <p>C/ CIRCUMVALACIÓ BAIXA, 16, 08290 CERDANYOLA DEL VALLÈS | BARCELONA | ESPAÑA T.: +34 936 925 871</p>
      </div>
    </section>
  )
}

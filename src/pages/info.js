import Header from '@/components/Header'
import useFilter from '../hooks/useFilter'
import Footer from '@/components/Footer'

export default function Info () {
  const { setFilters } = useFilter()
  return (
    <section className='mb-8'>
      <div className='bg-light-blue mx-auto'>
        <Header changeFilters={setFilters} />
      </div>
      <div className='px-5 sm:px-5 md:px-5 lg:px-1 max-w-4xl sm:max-w-4xl md:max-w-6xl lg:min-w-1000 w-full mx-auto'>
        <div className='mt-8'>
          <h2 className='font-bold mb-8 text-muted text-2xl text-left text-slate-900'>QUIENES SOMOS</h2>
          <p className='text-lg text-justify text-slate-900'>Larcamp fue fundada después de tiempos difíciles, en 1998, por Juan. A raíz de una mala experiencia profesional, se vio obligado a empezar de cero, fundando la empresa y dándole el nombre de Larcamp.
            Fue asesorado por profesionales del sector de la industria, a los cuales siempre les estará agradecido por la ayuda.
            Los principios fueron duros, pero priorizando siempre el buen servicio al cliente y la atención personalizada,
            consiguió gracias al boca a boca, una extensa cartera, entre los cuales había empresas de amplios sectores, como la alimentación,
            automoción, ecológicos, residencias, colegios, industrial, etc. A través de esta filosofía, a día de hoy muchos clientes se han convertido en amigos profesionales, confiando plenamente el uno en el otro, y así esperamos que siga siendo en el futuro.
          </p>
        </div>
        <div className='mt-8'>
          <h2 className='font-bold mb-8 text-muted text-2xl text-left text-slate-900'>ESPECIALISTAS EN DISTRIBUCIÓN DE PRODUCTOS DE LIMPIEZA PARA USO PROFESIONAL</h2>
          <p className='text-lg text-justify text-slate-900'>
            Larcamp es una empresa distribuidora de productos de limpieza situada en Cerdanyola del Vallès, que ofrece y dispone de productos de  perfumería, droguería, higiene y belleza, para una gran variedad de sectores, todo tipo de espacios, y superfícies.
            Distribuimos y servimos a todo tipo de clientes, desde empresas en el sector profesional, o doméstico a residencias, colegios, ayuntamientos y todo tipo de clientes que previsen de material de limpieza.
          </p>
        </div>
        <div className='mt-8 mb-8'>
          <h2 className='font-bold mb-8 text-muted text-2xl text-left text-slate-900'>ZONA DE SERVICIO</h2>
          <p className='text-lg text-justify text-slate-900'>
            Larcamp ofrece servicio a toda Cataluña, está localizada en Cerdanyola del Vallès, calle Circumval·lació Baixa, 16 - Bajo 4. Para más información póngase en contacto con LARCAMP a través de nuestro formulario de contacto
          </p>
        </div>
      </div>
      <Footer />
    </section>
  )
}

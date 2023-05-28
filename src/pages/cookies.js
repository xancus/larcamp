import Footer from '@/components/Footer'
import Header from '@/components/Header'
import useFilter from '../hooks/useFilter'

export default function CookieConsent () {
  const { setFilters } = useFilter()
  return (
    <section className='mb-8'>
      <div className='bg-light-blue mx-auto px-12'>
        <Header changeFilters={setFilters} />
      </div>
      <div className='px-5 sm:px-5 md:px-5 lg:px-1 max-w-4xl sm:max-w-4xl md:max-w-6xl lg:min-w-1000 w-full mx-auto'>
        <div className='mt-8'>
          <h2 className='font-bold mb-8 text-muted text-2xl text-left text-slate-900'>POLITICA DE COOKIES</h2>
          <p className='text-lg text-justify text-slate-900'>
            A continuación, te explicamos qué son exactamente las cookies; qué tipo de cookies utilizamos y para qué; y cómo puedes ejercer tu derecho para configurar tu navegador y desestimar el uso de cualquiera de ellas.
            Eso sí, debes saber, que si decides no utilizar algunas cookies, este sitio web puede no funcionar correctamente, afectando a tu experiencia de usuario.
            En todo caso, le informamos de que el LARCAMP S.L es el responsable de las Cookies y del tratamiento de los datos obtenidos a través de las Cookies propias y de terceros decidiendo sobre la finalidad, contenido y uso del tratamiento de la información recabada.
          </p>
          <div className='mt-8'>
            <h2 className='font-bold mb-8 text-muted text-2xl text-left text-slate-900'>QUÉ ES UNA COOKIE</h2>
            <p className='text-lg text-justify text-slate-900'>
              Una cookie es un fichero que se descarga en tu ordenador al acceder a determinadas páginas web o blogs.

              Las cookies permiten a esa página, entre otras cosas, almacenar y recuperar información sobre tus hábitos de navegación o de tu equipo, y dependiendo de la información que contengan y de la forma en que utilices tu equipo, pueden utilizarse para reconocerte.

              El navegador del usuario memoriza cookies en el disco duro solamente durante la sesión actual ocupando un espacio de memoria mínimo y no perjudicando al ordenador. Las cookies no contienen ninguna clase de información personal específica, y la mayoría de las mismas se borran del disco duro al finalizar la sesión de navegador (las denominadas cookies de sesión).

              La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten o impiden en los ajustes de seguridad las cookies temporales o memorizadas.

              Las cookies se asocian al navegador, no a la persona, por lo que no suelen almacenar información sensible sobre ti como tarjetas de crédito o datos bancarios, fotografías o información personal, etc. Los datos que guardan son de carácter técnico, estadísticos, preferencias personales, personalización de contenidos, etc.
            </p>
          </div>
          <div className='mt-8'>
            <h2 className='font-bold mb-8 text-muted text-2xl text-left text-slate-900'>ACEPTACIÓN DE LAS COOKIES: NORMATIVA VIGENTE</h2>
            <p className='text-lg text-justify text-slate-900'>
              Al acceder a este sitio web, y de acuerdo a la normativa vigente en materia de protección de datos, te informamos del uso de cookies, dándote la opción de aceptarlas expresamente y de acceder a más información a través de esta Política de Cookies.

              Debes saber que, en el caso de continuar navegando, estarás prestando tu consentimiento para el empleo de estas cookies. Pero, en cualquier momento, podrás cambiar de opinión y bloquear su utilización a través de tu navegador.

              Esta Política de Cookies podría modificarse en cualquier momento para adaptarse a novedades normativas o cambios en nuestras actividades, siendo vigente la que en cada momento se encuentre publicada en la web.
            </p>
          </div>
          <div className='mt-8 mb-8'>
            <h2 className='font-bold mb-8 text-muted text-2xl text-left text-slate-900'>TIPOS DE COOKIES</h2>
            <p className='text-lg text-justify text-slate-900'>
              Para poder ofrecerte una mejor experiencia de usuario, obtener datos analíticos, almacenar y recuperar información sobre tus hábitos de navegación o de tu equipo y desarrollar su actividad, este sitio web https://larcamp.com, utiliza cookies propias y de terceros.

              ¿Qué tipos de cookies utiliza este sitio web?
              Mediante el acceso al Sitio Web, acepta de manera expresa la utilización de este tipo de Cookies en sus dispositivos. Si desactiva las Cookies, puede que su navegación por el Sitio Web no sea óptima y algunas de las utilidades de que dispone el Sitio Web no funcionen correctamente.
              Concretamente, LARCAMP S.L está utilizando las Cookies para las finalidades que a continuación se exponen. Si en un futuro el prestador utilizase otras con el propósito de otorgar más y mejores servicios, se informará al usuario de ello.

              Cookies técnicas: Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales.
              Cookies de personalización: Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.
              Cookies de análisis: Son aquellas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza tu navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.
              Cookies publicitarias: Son aquellas que, bien tratadas por nosotros o por terceros, nos permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello podemos analizar tus hábitos de navegación en Internet y podemos mostrarte publicidad relacionada con tu perfil de navegación.

              LARCAMP S.L no puede controlar ni se hace responsable del contenido y veracidad de los términos y condiciones y las políticas de privacidad de Google Analytics. El este quien determina la finalidad del tratamiento y uso de la información captada los mismos, en todo momento, así como el funcionamiento y duración de las cookies, y que, conforme a la información proporcionada por ambas, el usuario puede evitar la captación de esa información, rechazando la instalación de cookies mediante la configuración por su parte de su navegador.

              El Sitio Web podría llegar a emplear cookies necesarias para recordar durante su vigencia las preferencias de navegación del usuario (por ejemplo, reconocer si el usuario emplea un dispositivo móvil o un ordenador, con la finalidad de la personalización de la interfaz del usuario). La herramienta de aviso sobre uso de cookies instalada en la página web, puede emplear una cookie de sesión cuya finalidad es recordar las preferencias del usuario respecto de la información facilitada sobre este mecanismo, para cumplir con el deber de información sobre uso de cookies. Al cargar el Sitio Web y acceder al mismo, puede producirse “almacenamiento en bases de datos” y “almacenamiento local” para facilitar su navegación de forma más rápida, ágil y sencilla.

              Estas cookies no recopilan información identificativa del visitante. Toda la información que recopilan las cookies se junta y, por lo tanto, es anónima. Únicamente se utilizan para mejorar el funcionamiento de un sitio Web.

              GESTIONAR Y RECHAZAR EL USO DE COOKIES

              En cualquier momento, puedes adaptar la configuración del navegador para gestionar, desestimar el uso de cookies y ser notificado antes de que se descarguen.

              También puedes adaptar la configuración de forma que el navegador rechace todas las cookies, o únicamente las cookies de terceros. Y también puedes eliminar cualquiera de las cookies que ya se encuentren en tu equipo.

              Para esto, debes tener en cuenta que tendrás que adaptar por separado la configuración de cada navegador y equipo que utilices ya que, como te hemos comentado anteriormente las cookies se asocian al navegador, no a la persona.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

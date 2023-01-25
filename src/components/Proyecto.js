import Link from 'next/link';
import Image from 'next/image';
import Tecnologia from './Tecnologia';
import Funcion from './Funcion';
function Proyecto({proyecto}) {
    const {titulo, stack, repo, verProyecto, img, funciones} = proyecto;
  return (
    <>
      {proyecto?.titulo &&(
        <div className='bg-white rounded shadow transition-all flex flex-col lg:flex-row'>
          <Image
            src={img}
            width={200}
            height={160}
            // fill={'true'}
            alt={`Imagen representativa de ${titulo}`}
            className='flex justify-center rounded-top md:rounded-left w-full h-1/3 lg:w-2/5 lg:h-full'
          />
          <div className='px-2 py-2 md:px-4 md:py-4'>
            <div>
              <h3 className='font-bold text-movil-xl lg:text-lg'>{titulo}</h3>
              <p className='text-movil-lg font-light lg:text-sm'>Stack Utilizado: </p>
              <div className='my-1 md:my-2 lg:my-3 grid grid-cols-2 gap-1 lg:ml-3'>
                {stack?.map(tecnologia => <Tecnologia tecnologia={tecnologia} key={tecnologia.nombre}/>)}
              </div>
            </div>
            <div className='my-2 lg:my-4'>
              <p className='text-movil-lg font-light lg:text-sm mb-2 lg:mb-4'>Funciones:</p>
              <div className='lg:ml-3'>
                {funciones?.map(funcion => <Funcion funcion={funcion} key={funcion.id} />)}
              </div>
              
            </div>
            <div className={`${ verProyecto && repo ? 'flex md:flex-col lg:flex-col xl:flex-row justify-between items-center mx-10 my-10 gap-10' : 'flex justify-center'} my-4 `}>
              {verProyecto &&(
                <Link className='bg-bgAzul w-full text-white text-center capitalize font-bold p-1 rounded shadow  hover:bg-white hover:text-black hover:border-span hover:border-b-4 hover:border-t-4 transition-all' href={verProyecto} target='_blank' >Ver Proyecto</Link>
              )}
              {repo && (
                <Link href={`${repo}`} className='capitalize w-full font-bold p-1 text-center rounded shadow border-span border-2' target='_blank'>Ver Repositorio</Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Proyecto
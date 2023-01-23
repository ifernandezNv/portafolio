import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tecnologia from './Tecnologia';
function Proyecto({proyecto}) {
    const {titulo, stack, repo, verProyecto, img} = proyecto;
    console.log(img);
  return (
    <div className='bg-white rounded shadow'>
      <Image
        src={img}
        width={600}
        height={200}
        // fill={'true'}
        alt={`Imagen representativa de ${titulo}`}
        className='flex justify-center rounded-top h-60'
      />
      <div className='px-2 md:px-8 md:py-4'>
        <h3 className='font-bold text-movil-xl lg:text-lg'>{titulo}</h3>
        <p className='text-movil-lg font-light lg:text-sm'>Stack Utilizado: </p>
        <div className='my-1 md:my-2 lg:my-3 grid grid-cols-2 gap-1'>
          {stack.map(tecnologia => <Tecnologia tecnologia={tecnologia}/>)}
        </div>
      </div>
      <div className={`${ verProyecto && repo ? 'flex justify-between items-center mx-10 my-10 gap-10' : 'flex justify-center'} my-4`}>
        {verProyecto &&(
          <Link className='bg-bgAzul w-3/5 text-white text-center capitalize font-bold p-1 rounded shadow' href={verProyecto} target='_blank' >Ver Proyecto</Link>
        )}
        {repo && (
          <Link href={`${repo}`} className='capitalize w-3/5 font-bold p-1 text-center rounded shadow border-span border-2' target='_blank'>Ver Repositorio</Link>
        )}
      </div>
    </div>
  )
}

export default Proyecto
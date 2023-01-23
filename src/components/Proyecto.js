import React from 'react';
import Link from 'next/link';
function Proyecto({proyecto}) {
    const {titulo, stack, repo, verProyecto} = proyecto;
    console.log(verProyecto);
  return (
    <div className='bg-white rounded shadow'>
      <div className='px-2 md:px-8 md:py-4'>
        <h3 className='font-bold text-movil-xl lg:text-lg'>{titulo}</h3>
        <p className='text-movil-lg font-light lg:text-sm'>Stack Utilizado: </p>
        {stack.map(tecnologia => <p className='text-movil-md lg:text-sm'>{tecnologia}</p>)}
      </div>
      <div className={`${ verProyecto && repo ? 'flex justify-between mx-10 my-10 gap-10' : 'flex justify-center'} my-4`}>
        {verProyecto &&(
          <Link className='bg-bgAzul w-3/5 text-white text-center capitalize font-bold p-4 rounded shadow' href={verProyecto} target='_blank' >Ver Proyecto</Link>
        )}
        {repo && (
          <Link href={`${repo}`} className='capitalize w-3/5 font-bold p-4 text-center rounded shadow border-span border-2' target='_blank'>Ver Repositorio</Link>
        )}
      </div>
    </div>
  )
}

export default Proyecto
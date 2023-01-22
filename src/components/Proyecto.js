import React from 'react';

function Proyecto({proyecto}) {
    const {titulo, stack, repo, verProyecto} = proyecto;
  return (
    <div className='bg-white rounded shadow'>
      <div className='px-2 md:px-8 md:py-4'>
        <h3 className='font-bold text-movil-xl lg:text-lg'>{titulo}</h3>
        <p className='text-movil-lg font-light lg:text-sm'>Stack Utilizado: </p>
        {stack.map(tecnologia => <p className='text-movil-md lg:text-sm'>{tecnologia}</p>)}
      </div>
      <div className={`${ verProyecto && repo ? 'flex justify-between mx-10 my-10 gap-10' : 'flex justify-center'} my-4`}>
        {verProyecto &&(
          <button className='bg-bgAzul w-3/5 text-white capitalize font-bold p-4 rounded shadow' >Ver Proyecto</button>
        )}
        {repo && (
          <button href={repo} className='capitalize w-3/5 font-bold p-4 rounded shadow border-span border-2'>Ver Repositorio</button>
        )}
      </div>
    </div>
  )
}

export default Proyecto
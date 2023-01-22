import React from 'react';

function Proyecto({proyecto}) {
    const {titulo, stack, repo, verProyecto} = proyecto;
  return (
    <div className='bg-white rounded shadow'>
      <div className='px-2 md:px-8 md:py-4 '>
        <h3 className='font-bold text-movil-xl lg:text-lg'>{titulo}</h3>
      </div>
    </div>
  )
}

export default Proyecto
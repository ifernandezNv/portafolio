import React from 'react'

function Tecnologia({tecnologia}) {
    const {nombre, icono} = tecnologia;
  return (
    <div className='flex gap-1 md:gap-2 items-center'>
        <p className='w-6 h-6 lg:w-8 lg:h-8 bg-azul-oscuro'></p>
        <h4 className='text-movil-md md:text-label'>{nombre}</h4>
    </div>
  )
}

export default Tecnologia

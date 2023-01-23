import React from 'react'

function Tecnologia({tecnologia}) {
    const {nombre, icono} = tecnologia;
  return (
    <div className='flex gap-1 md:gap-2 items-center'>
        <p className='w-7 h-7 bg-azul-oscuro'></p>
        <h4 className='text-movil-md md:text-label'>{nombre}</h4>
    </div>
  )
}

export default Tecnologia

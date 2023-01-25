import React from 'react'
import {Icon} from '@iconify/react';

function Funcion({funcion}) {
    const {nombre, icono} = funcion;
  return (
    <div className='flex gap-x-2'>
        <Icon icon={icono} width={30} height={30}/>
        <p className='capitalize text-movil-md md:text-label'>{nombre}</p>
    </div>
  )
}

export default Funcion

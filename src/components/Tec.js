import React from 'react'
import {Icon} from '@iconify/react';

function Tec({tecnologia}) {
    const {nombre, icono, experiencia} = tecnologia;
  return (
    <div className='flex '>
        {nombre}
    </div>
  )
}

export default Tec
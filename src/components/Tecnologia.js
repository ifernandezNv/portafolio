import React from 'react'
import {Icon} from '@iconify/react';

function Tecnologia({tecnologia}) {
    const {nombre, icono} = tecnologia;
  return (
    <div className='flex gap-1 md:gap-2 items-center'>
        {icono ? <Icon icon={icono} color="#242938" width="30" height="30"/> : (
          <Icon icon={`${nombre.startsWith('React') ? `skill-icons:react-dark` : `skill-icons:${nombre.toLowerCase()}-dark`}`} color="#242938" width="30" height="30" />
        )}
        <h4 className='text-movil-md md:text-label'>{nombre}</h4>
    </div>
  )
}

export default Tecnologia

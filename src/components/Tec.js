import React from 'react'
import {Icon} from '@iconify/react';

function Tec({tecnologia}) {
    const {nombre, icono, experiencia} = tecnologia;
  return (
    <div className='flex items-center gap-2'>
        {icono ? <Icon icon={icono} color="#242938" width="30" height="30"/> : (
          <Icon icon={`${nombre.startsWith('React') ? `skill-icons:react-dark` : `skill-icons:${nombre.toLowerCase()}-dark`}`} color="#242938" width="30" height="30" />
        )}
        <div>
            <p className='text-span font-bold text-movil-lg lg:text-sm'>{nombre}</p>
            <p className='font-light'>Experiencia: <span className='text-span font-bold text-movil-lg'> {experiencia}{experiencia > 1 ? ' años' : ' año'}</span> </p>
        </div>
    </div>
  )
}

export default Tec
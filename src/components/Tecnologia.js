import React from 'react'

function Tecnologia({tecnologia}) {
    const {nombre, icono} = tecnologia;
  return (
    <div className='flex gap-1 md:gap-2 items-center'>
        <p>Logo</p>
        <h4>{nombre}</h4>
    </div>
  )
}

export default Tecnologia

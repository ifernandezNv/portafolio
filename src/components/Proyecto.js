import React from 'react';

function Proyecto({proyecto}) {
    const {titulo, stack, repo, verProyecto} = proyecto;
  return (
    <div className='bg-white rounded shadow'>
      <div className=''>
        <h3>{titulo}</h3>
      </div>
    </div>
  )
}

export default Proyecto
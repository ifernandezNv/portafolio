import React from 'react';
import Link from 'next/link';

function Error() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-azul-oscuro'>
        <h1 className='block text-center text-white text-xl'>Heey, esta página no existe</h1>
        <Link href='/' className='p-4 text-white bg-bgAzul block rounded my-4 font-bold hover:bg-white hover:text-black hover:border-span hover:border-b-4 transition-all'>Volver al Inicio</Link>
    </main>
  )
}

export default Error
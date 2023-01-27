import React from 'react'
import {Icon} from '@iconify/react';
import Link from 'next/link';
function Footer() {
  return (
    <footer className='bg-azul-rey p-5 flex flex-col justify-center items-center'>
        <p className='text-white font-bold'>Pónte en contacto conmigo</p>
        <div className='flex flex-col lg:flex-row my-3 gap-5'>
          <div className='flex gap-3 items-center'>
            <Icon icon='material-symbols:phone-in-talk' color='white' width={30} height={30}/>
            <Link className='text-white font-semibold' href='tel: +52 6271328212' target={'_blank'} noreferrer='true'>+52 627-138-2812</Link>
          </div>

          <div className='flex gap-3 items-center'>
            <Icon icon='ic:baseline-mark-email-unread' color='white' width={30} height={30}/>
            <Link className='text-white font-semibold' href='mailto: ifernandeznv@gmail.com' target={'_blank'} noreferrer='true'>ifernandeznv@gmail.com</Link>
          </div>

          <div className='flex gap-3 items-center'>
            <Icon icon='ci:linkedin' color='white' width={30} height={30}/>
            <Link className='text-white font-semibold' href='/' target={'_blank'} noreferrer='true'>LinkedIn</Link>
          </div>
        </div>
        <p className='text-white font-bold'>Todos los derechos reservados. &copy; {new Date().getFullYear()}</p>
        <p className='text-white font-bold'>Isaac Fernández Navarro</p>
    </footer>
  )
}

export default Footer
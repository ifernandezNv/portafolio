import Head from 'next/head';
import { Inter } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Isaac Fernández Navarro</title>
        <meta name="description" content="Isaac Fernández es desarrollador de software, mayormente enfocado en el front-end, apasionado por crear sitios web y aplicaciones móviles atractivos, útiles y rápidos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Desarrollo de Software, desarrollo de software, frontend, front-end, desarrollador front-end, desarrollador frontend, HTML, HTML5, CSS3, TAILWINDCSS, tailwindcss, tailwindCSS, ReactJS, reactjs, NextJS, nextjs, React Native, react native, Figma, figma, mongodb, MongoDB, UI, ui, ux, UX, UI/UX" />
        <meta name="author" content="Isaac Fernández Navarro" />
        <script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`min-h-screen md:h-5/6 bg-azul-oscuro relative overflow-y-hidden scroll-smooth`}>
            <Image 
              src={'/assets/bgHeader.png'}
              alt='Imagen bg-header'
              height={1200}
              width={1200}
              quality={100}
              // cover={"true"}
              className='w-full relative blur'
            />
            <div className='flex flex-col items-center justify-center absolute -top-28 z-50 w-full min-h-screen' >
              <h1 className='text-white text-center text-4xl font-bold tracking-wider'>Hola, Soy Isaac Fernández</h1>
              <h2 className='text-2xl font-bold mt-16 text-white'>Desarrollador <span className='text-span'>Front-End</span></h2>
              <p className='text-white text-center text-lg font-medium mt-10'>Conoce un poco más acerca de mí</p>
              <p className='text-white text-center text-lg font-medium'>y mira mis proyectos más destacables</p>
              <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-9'>
                <Link href='https://github.com/ifernandezNv' alt='Github profile' className='text-white text-sm font-bold flex gap-3 items-center '>
                  <iconify-icon icon="tabler:brand-github" style={{color: 'white'}} width={26} height={26}></iconify-icon>
                  Github
                </Link>
              
                <Link href='https://github.com/ifernandezNv' alt='Github profile' className='text-white text-sm font-bold flex gap-3 items-center justify-center'>
                <iconify-icon icon="lucide:linkedin" style={{color: 'white'}} width="26" height="26"></iconify-icon>
                  LinkedIn
                </Link>
              </div>
              <div className='flex flex-col md:flex-row gap-12 mt-14'>
                  <Link href='#proyectos' className='text-center text-white shadow font-semibold px-10 py-4 bg-bgAzul rounded'>Ver Proyectos</Link>
                  <a href="/assets/Isaac Fernández Navarro.pdf" download className='text-black px-10 py-4 font-semibold rounded bg-white'>Descargar CV</a>
                </div>
            </div>

      </header>
      <main className='min-h-screen bg-azul-oscuro py-10'>
        <h2 className='text-2xl text-white font-bold text-center'>Mis Proyectos</h2>
      </main>
    </>
  )
}

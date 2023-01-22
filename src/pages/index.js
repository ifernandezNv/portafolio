import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [paginaLista, setPaginaLista] = useState(false);
  const [proyectos, setProyectos] = useState
    ([
      {titulo: 'Áureos', stack: ['React Native', 'ReactJS', 'NodeJS', 'MongoDB', 'Figma', 'Express'], repo: 'https://github.com/ifernandezNv/Aureos-Frontend', categoria: 'movil'},
      {titulo: 'UpTask', stack: ['ReactJS', 'NodeJS', 'MongoDB', 'Express'], repo: 'https://github.com/ifernandezNv/UpTask_frontend', categoria: 'web'},
      {titulo: 'GutiarLA', stack: ['Astro', 'PostgreSQL', 'TailwindCSS'], repo: 'https://github.com/ifernandezNv/astro-guitarla', verProyecto: 'https://astro-guitarla.vercel.app/', categoria: 'web'},
      {titulo: 'Diseño UI de mi Portafolio', stack: ['Figma'], repo:'', verProyecto: 'https://www.figma.com/file/wXmXRgNfO5ILWfJU4HFD4n/UI---Portafolio?node-id=76%3A45&t=seCAjHwD1hFP6EbV-1', categoria: 'design'},
      {titulo: 'ITMaps', stack: ['JavaScript', 'HTML5', 'CSS3', ], repo: 'https://github.com/ifernandezNv/itmaps', verProyecto: 'https://itmaps.netlify.app/'},
      {titulo: 'Diseño UI de ITMaps', stack: ['Figma'], repo:'', verProyecto: 'https://www.figma.com/file/EQJ4XK0nhNEEmxBXdhspkB/ItMaps?node-id=0%3A1&t=pngmBMDjraHvizE6-1', categoria: 'design'}
    ]);
    const [filtro, setFiltro] = useState('todos');

  useEffect(()=>{
    if(!paginaLista){
      setPaginaLista(true);
    }
  },[])

  useEffect(()=>{
    if(filtro !== 'todos'){
      const proyectosFiltrados = proyectos.map(proyecto => proyecto.categoria === filtro && proyecto);
      setProyectos(proyectosFiltrados);
    }
    setProyectos(proyectos);
  },[filtro])

  return (
      <>
      {paginaLista ? (
        <>
          <Head>
            <title>Isaac Fernández Navarro</title>
            <meta name="description" content="Isaac Fernández es desarrollador de software, mayormente enfocado en el front-end, apasionado por crear sitios web y aplicaciones móviles atractivos, útiles y rápidos" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="Desarrollo de Software, desarrollo de software, frontend, front-end, desarrollador front-end, desarrollador frontend, HTML, HTML5, CSS3, TAILWINDCSS, tailwindcss, tailwindCSS, ReactJS, reactjs, NextJS, nextjs, React Native, react native, Figma, figma, mongodb, MongoDB, UI, ui, ux, UX, UI/UX" />
            <meta name="author" content="Isaac Fernández Navarro" />
            <script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js" strategy='afterInteractive'></script>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <body>
              <header className={`min-h-screen lg:h-1/2 bg-azul-oscuro relative`}>
                    <Image 
                      src={'/assets/bgHeader.png'}
                      alt='Imagen bg-header'
                      height={1200}
                      width={1200}
                      quality={100}
                      // cover={"true"}
                      className='w-100 lg:min-w-full relative blur min-h-screen lg:h-1/2'
                    />
                    <div className='flex flex-col items-center justify-center absolute -top-28 z-50 w-full min-h-screen my-10' >
                      <h1 className='text-white text-center text-4xl font-bold tracking-wider'>Hola, Soy Isaac Fernández</h1>
                      <h2 className='text-2xl font-bold mt-16 text-white'>Desarrollador <span className='text-span'>Front-End</span></h2>
                      <p className='text-white text-center text-lg font-medium mt-10'>Conoce un poco más acerca de mí</p>
                      <p className='text-white text-center text-lg font-medium'>y mira mis proyectos más destacables</p>
                      <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-9'>
                        <Link href='https://github.com/ifernandezNv' target='_blank' noreferer alt='Github profile' className='text-white text-sm font-bold flex gap-3 items-center '>
                          <iconify-icon icon="tabler:brand-github" style={{color: 'white'}} width={26} height={26}></iconify-icon>
                          Github
                        </Link>
                      
                        <Link href='https://www.linkedin.com/in/isaac-fern%C3%A1ndez-navarro-b41870215/' target='_blank' noreferer alt='Github profile' className='text-white text-sm font-bold flex gap-3 items-center justify-center'>
                        <iconify-icon icon="lucide:linkedin" style={{color: 'white'}} width="26" height="26"></iconify-icon>
                          LinkedIn
                        </Link>
                      </div>
                      <div className='flex flex-col md:flex-row gap-12 mt-14'>
                          <Link href='/#proyectos' className='text-center text-white shadow font-semibold px-10 py-4 bg-bgAzul rounded hover:bg-white hover:border-bgAzul hover:text-black transition-all' >Ver Proyectos</Link>
                          <a href="/assets/Isaac Fernández Navarro.pdf" download className='text-black px-10 py-4 font-semibold rounded bg-white hover:bg-bgAzul hover:text-white transition-all'>Descargar CV</a>
                        </div>
                    </div>
              </header>

              <main className='min-h-screen bg-azul-oscuro py-10 px-4 md:px-40 ' id='proyectos'>
                <h2 className='text-2xl text-gris-claro font-bold text-center'>Mis Proyectos</h2>
                <div>
                  <p className='font-poppins font-medium text-sm text-gris-claro'>Categorías:</p>
                  <div className='flex flex-row justify-between my-2'>
                    <button className={` ${filtro === 'todos' ? 'bg-span text-white font-bold shadow hover:bg-white hover:text-black hover:border-span hover:border-b-2' : 'text-black bg-white border-span border-b-2 hover:bg-span hover:font-bold hover:text-white font-semibold'} py-2 px-5 rounded transition-all`} onClick={ ()=> setFiltro('todos') }>Todos</button>
                    <button className={` ${filtro === 'web' ? 'bg-span text-white font-bold shadow hover:bg-white hover:text-black hover:border-span hover:border-b-2' : 'text-black bg-white border-span border-b-2 hover:bg-span hover:font-bold hover:text-white font-semibold'} py-2 px-5 rounded transition-all`} onClick={ ()=> setFiltro('web') }>Web</button>
                    <button className={` ${filtro === 'movil' ? 'bg-span text-white font-bold shadow hover:bg-white hover:text-black hover:border-span hover:border-b-2' : 'text-black bg-white border-span border-b-2 hover:bg-span hover:font-bold hover:text-white font-semibold'} py-2 px-5 rounded transition-all`} onClick={ ()=> setFiltro('movil') }>Móvil</button>
                    <button className={` ${filtro === 'design' ? 'bg-span text-white font-bold shadow hover:bg-white hover:text-black hover:border-span hover:border-b-2' : 'text-black bg-white border-span border-b-2 hover:bg-span hover:font-bold hover:text-white font-semibold'} py-2 px-5 rounded transition-all`} onClick={ ()=> setFiltro('design') }>Diseño</button>
                  </div>
                </div>
                <div className='mx-4 md:mx-'>

                </div>
              </main>

            </body>
        </>
        ): <p>Cargando...</p>}
      </>
  )
}

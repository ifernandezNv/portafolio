import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Proyecto from '@/components/Proyecto';
import Tec from '@/components/Tec';
import Footer from '@/components/Footer';
import {Icon} from '@iconify/react';
const inter = Inter({ subsets: ['latin'] })

const TECNOLOGIAS = [
  {
    id: 1,
    nombre: 'ReactJS',
    icono: '',
    experiencia: 1
  },
  {
    id: 2,
    nombre: 'React Native',
    icono: '',
    experiencia: 1
  },
  {
    id: 3,
    nombre: 'NextJS',
    icono: '',
    experiencia: 1
  },
  {
    id: 4,
    nombre: 'HTML5',
    icono: 'ion:logo-css3',
    experiencia: 3
  },
  {
    id: 5,
    nombre: 'CSS3',
    icono: 'ri:html5-fill',
    experiencia: 3
  },
  {
    id: 6,
    nombre: 'MongoDB',
    icono: 'skill-icons:mongodb',
    experiencia: 1
  },
  {
    id: 7,
    nombre: 'MySQL',
    icono: '',
    experiencia: 3
  },
  {
    id: 8,
    nombre: 'Figma',
    icono: '',
    experiencia: 3
  },
  {
    id: 9,
    nombre: 'JavaScript',
    icono: 'simple-icons:javascript',
    experiencia: 2
  },
  {
    id: 10,
    nombre: 'TailwindCSS',
    icono: '',
    experiencia: 1
  },
]

export default function Home() {
  const [paginaLista, setPaginaLista] = useState(false);
  const [proyectos, setProyectos] = useState
    ([
      {id:1, titulo: 'Áureos', stack: [{nombre: 'React Native'}, {nombre: 'ReactJS'}, {nombre: 'NodeJS'}, {nombre: 'MongoDB', icono: 'skill-icons:mongodb'}, {nombre: 'Figma'}, {nombre: 'ExpressJS'}], repo: 'https://github.com/ifernandezNv/Aureos-Frontend', categoria: 'movil', img: '/assets/aureos.png', funciones: [{id: 1, nombre: 'Chat con un profesional', icono: 'material-symbols:chat-bubble'}, {id: 2, nombre: 'Actividades Propuestas', icono: 'icons8:todo-list'}, {id: 3, nombre: 'Contenido Multimedia', icono: 'material-symbols:video-camera-back'}]},
      
      {id:2, titulo: 'UpTask', stack: [{nombre: 'ReactJS'}, {nombre: 'NodeJS'}, {nombre: 'MongoDB', icono: 'skill-icons:mongodb'}, {nombre: 'ExpressJS'}], repo: 'https://github.com/ifernandezNv/UpTask_frontend', categoria: 'web', img: '/assets/imagen proyecto 5.png', funciones: [{id: 1, nombre: 'Crear Proyectos', icono: 'material-symbols:folder'}, {id: 2, nombre: 'Añadir Colaboradores', icono: 'fluent:people-team-20-filled'}, {id: 3, nombre: 'Crear Tareas', icono: 'icons8:todo-list'}]},

      {id:3, titulo: 'GutiarLA', stack: [{nombre: 'Astro', icono: 'vscode-icons:file-type-astro'}, {nombre: 'PostgreSQL'}, {nombre: 'TailwindCSS'}], repo: 'https://github.com/ifernandezNv/astro-guitarla', verProyecto: 'https://astro-guitarla.vercel.app/', categoria: 'web', img: '/assets/figma 2.png', funciones: [{id: 1, nombre: 'Promocionar productos y servicios', icono: 'ic:round-local-grocery-store'}, {id: 2, nombre: 'Proporcionar información de los mismos', icono: 'ic:sharp-info'}]},

      {id:4, titulo: 'Diseño UI de mi Portafolio', stack: [{nombre: 'Figma'}], repo:'', verProyecto: 'https://www.figma.com/file/wXmXRgNfO5ILWfJU4HFD4n/UI---Portafolio?node-id=76%3A45&t=seCAjHwD1hFP6EbV-1', categoria: 'design', img:'/assets/imagen proyecto 1.png', funciones: [{id: 1, nombre: 'Elaboración del UI Kit', icono: 'clarity:design-solid'}, {id: 2, nombre: 'Diseño de Prototipos', icono: 'fe:prototype'}]},

      {id:5, titulo: 'ITMaps', stack: [{nombre: 'JavaScript', icono: 'simple-icons:javascript'}, {nombre: 'HTML5', icono: 'ri:html5-fill'}, {nombre: 'CSS3', icono: 'ion:logo-css3'}, ], repo: 'https://github.com/ifernandezNv/itmaps', verProyecto: 'https://itmaps.netlify.app/', img: '/assets/figma 3.png', funciones: [{id: 1, nombre: 'Mostrar Rutas a cada departamento', icono: 'ic:baseline-map'}, {id: 2, nombre: 'Proporcionar Información de cada departamento', icono: 'ic:sharp-info'}]},

      {id:6, titulo: 'Diseño UI de ITMaps', stack: [{nombre: 'Figma'}], repo:'', verProyecto: 'https://www.figma.com/file/EQJ4XK0nhNEEmxBXdhspkB/ItMaps?node-id=0%3A1&t=pngmBMDjraHvizE6-1', categoria: 'design', img:'/assets/figma 1.png', funciones: [{id: 1, nombre: 'Creación del diseño UI', icono: 'material-symbols:folder'}]}
    ]);
    const [proyectosBandera, setProyectosBandera] = useState(proyectos);
    const [filtro, setFiltro] = useState('todos');

  useEffect(()=>{
    if(!paginaLista){
      setPaginaLista(true);
    }
  }, [paginaLista])

  useEffect(()=>{
    function filtrarProyectos(filtro){
      setProyectos(proyectosBandera);
      if(filtro !== 'todos'){
        const proyectosFiltrados = proyectosBandera.filter(proyecto => proyecto.categoria === filtro && proyecto);
        setProyectos(proyectosFiltrados);
        return;
      }
      setProyectos(proyectosBandera); 
    }
    filtrarProyectos(filtro);
  },[filtro, proyectosBandera])


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
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <>
              <header className={`min-h-screen lg:h-1/2 bg-azul-oscuro relative overflow-y-hidden`}>
                    <Image 
                      src={'/assets/bgHeader.png'}
                      alt='Imagen bg-header'
                      height={700}
                      width={1200}
                      quality={100}
                      cover={"true"}
                      className='w-100 lg:min-w-full relative blur min-h-screen'
                    />
                    <div className='flex flex-col items-center justify-center absolute -top-28 z-10 w-full min-h-screen mt-20' >
                      <h1 className='text-white text-center text-movil-2xl md:text-2xl lg:text-4xl font-bold lg:tracking-wider' data-cypress='presentacion'>Hola, Soy Isaac Fernández</h1>
                      <h2 className='text-movil-xl md:text-xl lg:text-2xl font-bold mt-16 text-white' data-cypress='profesion'>Desarrollador <span className='text-span'>Front-End</span></h2>
                      
                      <p className='text-white text-center text-movil-xl md:text-md lg:text-lg font-bold mt-10'>Conoce un poco más acerca de mí</p>
                      <p className='text-white text-center text-movil-xl md:text-md lg:text-lg font-bold'>y mira mis proyectos más destacables</p>

                      <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-9'>
                        <Link href='https://github.com/ifernandezNv' target='_blank' noreferer='true' alt='Github profile' className='text-white text-movil-xl md:text-sm font-bold flex gap-3 items-center '>
                          <Icon icon="mingcute:github-fill" style={{color: 'white'}} width={26} height={26}/>
                          Github
                        </Link>
                      
                        <Link href='https://www.linkedin.com/in/isaac-fern%C3%A1ndez-navarro-b41870215/' target='_blank' noreferer='true' alt='Github profile' className='text-white text-movil-xl md:text-sm font-bold flex gap-3 items-center justify-center'>
                        <Icon icon="ci:linkedin" style={{color: 'white'}} width="26" height="26" />
                          LinkedIn
                        </Link>
                      </div>

                      <nav className='flex flex-col md:flex-row gap-12 mt-14'>
                          <Link href='#proyectos' className='text-center text-white text-movil-xl md:text-sm shadow font-semibold px-10 py-4 bg-bgAzul rounded hover:bg-white hover:text-black hover:border-span hover:border-b-4 transition-all' data-cypress='proyectos' >Ver Proyectos</Link>
                          <a href="/assets/Isaac Fernández Navarro.pdf" download data-cypress='cv' className='text-black text-movil-xl md:text-sm px-10 py-4 font-semibold rounded bg-white hover:bg-bgAzul hover:text-white hover:border-white hover:border-b-4  transition-all'>Descargar CV</a>
                          <Link href='#about' data-cypress='aboutme' className='text-black text-movil-xl md:text-sm px-10 py-4 font-semibold rounded bg-white hover:bg-bgAzul hover:text-white hover:border-white hover:border-b-4  transition-all' >Conóceme Más</Link>
                        </nav>
                    </div>

                    <div className={`absolute z-50 bottom-10 right-10 rounded md:hidden`}>
                      <Link href="#proyectos">
                        <Icon icon="material-symbols:arrow-circle-down-outline-rounded" color="#1692aa" width="40" height="40" />
                      </Link>
                    </div>  
              </header>

              <main className='min-h-screen bg-azul-oscuro py-10 px-4 md:px-20 ' id='proyectos'>
                <h2 className='text-movil-2xl md:text-2xl text-white font-heading font-bold text-center' data-cypress='headingproyectos'>Mis Proyectos</h2>
                <div>
                  <p className='font-poppins font-medium text-sm text-gris-claro mt-5 lg:mt-9' data-cypress='categorias'>Categorías:</p>
                  <div className='flex flex-row justify-between items-center my-4'>
                    <button className={` ${filtro === 'todos' ? 'bg-span text-white font-bold shadow hover:bg-white hover:text-black hover:border-span hover:border-b-4' : 'text-black bg-white border-span border-b-2 hover:bg-span hover:font-bold hover:text-white font-semibold'} text-movil-lg md:text-sm lg:text-md py-2 px-5 rounded transition-all lg:w-1/6`} onClick={ ()=> setFiltro('todos') }
                    data-cypress='todos'>Todos</button>
                    <button className={` ${filtro === 'web' ? 'bg-span text-white font-bold shadow hover:bg-white hover:text-black hover:border-span hover:border-b-4' : 'text-black bg-white border-span border-b-2 hover:bg-span hover:font-bold hover:text-white font-semibold'} text-movil-lg md:text-sm lg:text-md py-2 px-5 rounded transition-all lg:w-1/6`} onClick={ ()=> setFiltro('web') } data-cypress='web'>Web</button>
                    <button className={` ${filtro === 'movil' ? 'bg-span text-white font-bold shadow hover:bg-white hover:text-black hover:border-span hover:border-b-4' : 'text-black bg-white border-span border-b-2 hover:bg-span hover:font-bold hover:text-white font-semibold'} text-movil-lg md:text-sm lg:text-md py-2 px-5 rounded transition-all lg:w-1/6`} onClick={ ()=> setFiltro('movil') } data-cypress='movil'>Móvil</button>
                    <button className={` ${filtro === 'design' ? 'bg-span text-white font-bold shadow hover:bg-white hover:text-black hover:border-span hover:border-b-4' : 'text-black bg-white border-span border-b-2 hover:bg-span hover:font-bold hover:text-white font-semibold'} text-movil-lg md:text-sm lg:text-md py-2 px-5 rounded transition-all lg:w-1/6`} onClick={ ()=> setFiltro('design') } data-cypress='design'>Diseño</button>
                  </div>
                </div>
                <div className='mx-4 grid lg:grid-cols-2 md:gap-5 lg:gap-x-7 gap-y-5 lg:gap-y-9 mt-9 lg:mt-16 lg:mx-24 transition-all'>
                  {proyectos?.map(proyecto => <Proyecto proyecto={proyecto} key={proyecto.id}/>)}
                </div>
              </main>

              <section id='about' className='bg-azul-oscuro px-30'>
                <h2 className='font-lato text-center text-movil-2xl md:text-2xl font-bold text-white'>Conóceme un Poco Más</h2>
                <div className='py-10 px-4 lg:px-28 flex flex-col lg:flex-row gap-5 lg:gap-9 justify-center items-center'>
                  
                  <div className='bg-white shado2 rounded p-3 lg:px-9 lg:py-8 lg:w-7/12'>
                    <h3 className='text-center md:text-xl font-lato'>Tecnologías Utilizadas y Experiencia</h3>
                    <div className='grid grid-cols-2 gap-3 mt-3 lg:mt-6'>
                      {TECNOLOGIAS.map(tecnologia => <Tec tecnologia={tecnologia} key={tecnologia.id}/>)}
                    </div>
                  </div>
                  
                  <div className='bg-white shado2 rounded p-3 lg:px-9 lg:py-8 lg:w-7/12'>
                    <h3 className='text-center md:text-xl font-lato'>Descripción General</h3>
                    <p className='text-azul-oscuro text-movil-lg lg:text-sm lg:my-4'>Soy un desarrollador FrontEnd apasionado por crear productos apasionado por crear productos visualmente atractivos, útiles y rápidos</p>
                    <p className='font-semibold lg:text-sm lg:mt-4'>Intereses Varios:</p>
                    <p className='lg:text-sm'>Además de desarrollar y diseñar software, soy un gran fan de las siguientes disciplinas:</p>
                    <div className=' lg:ml-9 py-3 lg:py-5'>

                      <div className='flex gap-x-2 items-center mb-2'>
                        <Icon icon='game-icons:boxing-glove' color='242938' width={30} height={30}/>
                        <p className='text-light text-movil-md md:text-sm'>Deportes de contacto</p>
                      </div>

                      <div className='flex gap-x-2 items-center mb-2'>
                        <Icon icon='fa6-solid:guitar' color='242938' width={30} height={30}/>
                        <p className='text-light text-movil-md md:text-sm'>Música</p>
                      </div>

                      <div className='flex gap-x-2 items-center mb-2'>
                        <Icon icon='ion:earth' color='242938' width={30} height={30}/>
                        <p className='text-light text-movil-md md:text-sm'>Idiomas</p>
                      </div>

                      <div className='flex gap-x-2 items-center mb-2'>
                        <Icon icon='ic:round-book' color='242938' width={30} height={30}/>
                        <p className='text-light text-movil-md md:text-sm'>Aprender</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Footer/>
              <Script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js" async />
            </>
        </>
        ): <p>Cargando...</p>}
      </>
  )
}

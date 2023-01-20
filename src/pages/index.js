import Head from 'next/head'
import { Inter } from '@next/font/google'

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

        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'


export default function Home() {
  return (

    <div >
      <Head>
        <title>Abuzaid | Front-End Developer</title>
        <meta name="description" content="I'm a web developer and designer" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

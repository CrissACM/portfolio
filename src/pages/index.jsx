import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ProjectDetails from '@/components/ProjectDetails'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import TransitionEffect from '@/components/TransitionEffect'
import { useState } from 'react'

function Home () {
  const [openModal, setOpenModal] = useState({ state: false, project: null })

  return (
    <>
      <Navbar />
      <TransitionEffect />
      <div className='bg-light dark:bg-dark w-full overflow-x-hidden min-h-screen h-full'>
        <Hero />
        <div className='wrapper'>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
        </div>
        <Skills />
        <div className='wrapper pb-8'>
          <Experience />
          <Education />
        </div>
        {openModal.state && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
        <Footer />
      </div>
    </>
  )
}

export default Home

import { useState } from 'react'
import { projects } from '../data/en'
import ProjectCard from './ProjectCard'

function Projects ({ openModal, setOpenModal }) {
  const [toggle, setToggle] = useState('all')
  return (
    <div
      id='projects'
      className='[background:linear-gradient(343.07deg,rgba(132,59,206,0.06)_5.71%,rgba(132,59,206,0)_64.83%)] flex flex-col justify-center relative z-[1] items-center [clip-path:polygon(0_0,100%_0,100%_100%,100%_98%,0_100%)]'
    >
      <div className='relative flex justify-between items-center flex-col w-full max-w-[1350px] gap-3 pt-2.5 pb-[100px] px-0 md:flex-col'>
        <div className='text-[42px] text-center font-semibold mt-5 text-dark dark:text-light md:text-[32px] md:mt-3'>
          Projects
        </div>
        <div className='text-lg text-center max-w-[600px] text-dark/70 dark:text-light/70 md:text-base mt-3'>
          I have worked on a wide range of projects. From vanilla apps, web apps or mobile apps. Here are some of my projects.
        </div>
        <div className='flex border-primary dark:border-primaryDark text-base font-medium mx-0 my-[22px] rounded-xl border-[1.5px] border-solid text-primary dark:text-primaryDark md:text-xs'>
          {toggle === 'all'
            ? (
              <div
                active='true'
                value='all'
                onClick={() => setToggle('all')}
                className='px-[18px] py-2 rounded-l-lg cursor-pointer md:px-2 md:py-1.5 bg-primary/30 dark:bg-primaryDark/20 hover:bg-primary/40 dark:hover:bg-primaryDark/10'
              >
                All
              </div>
              )
            : (
              <div
                value='all'
                onClick={() => setToggle('all')}
                className='px-[18px] py-2 rounded-md cursor-pointer  md:rounded md:px-2 md:py-1.5 active:bg-primary/20 dark:active:bg-primaryDark/20 hover:bg-primary/30 dark:hover:bg-primaryDark/10'
              >
                All
              </div>
              )}
          <div className='w-[1.5px] bg-primary dark:bg-primaryDark' />
          {toggle === 'vanilla'
            ? (
              <div
                active='true'
                value='vanilla'
                onClick={() => setToggle('vanilla')}
                className='px-[18px] py-2 cursor-pointer md:px-2 md:py-1.5 bg-primary/30 dark:bg-primaryDark/20 hover:bg-primary/40 dark:hover:bg-primaryDark/10'
              >
                VANILLA
              </div>
              )
            : (
              <div
                value='vanilla'
                onClick={() => setToggle('vanilla')}
                className='px-[18px] py-2 cursor-pointer  md:rounded md:px-2 md:py-1.5 active:bg-primary/20 dark:active:bg-primaryDark/20 hover:bg-primary/30 dark:hover:bg-primaryDark/10'
              >
                VANILLA
              </div>
              )}
          <div className='w-[1.5px] bg-primary dark:bg-primaryDark' />
          {toggle === 'web app'
            ? (
              <div
                active='true'
                value='web app'
                onClick={() => setToggle('web app')}
                className='px-[18px] py-2 cursor-pointer md:px-2 md:py-1.5 bg-primary/30 dark:bg-primaryDark/20 hover:bg-primary/40 dark:hover:bg-primaryDark/10'
              >
                WEB APP'S
              </div>
              )
            : (
              <div
                value='web app'
                onClick={() => setToggle('web app')}
                className='px-[18px] py-2 cursor-pointer  md:rounded md:px-2 md:py-1.5 active:bg-primary/20 dark:active:bg-primaryDark/20 hover:bg-primary/30 dark:hover:bg-primaryDark/10'
              >
                WEB APP'S
              </div>
              )}
          <div className='w-[1.5px] bg-primary dark:bg-primaryDark' />
          {toggle === 'mobile app'
            ? (
              <div
                active='true'
                value='mobile app'
                onClick={() => setToggle('mobile app')}
                className='px-[18px] py-2 rounded-r-lg cursor-pointer md:px-2 md:py-1.5 bg-primary/30 dark:bg-primaryDark/20 hover:bg-primary/40 dark:hover:bg-primaryDark/10'
              >
                MOBILE APP'S
              </div>
              )
            : (
              <div
                value='mobile app'
                onClick={() => setToggle('mobile app')}
                className='px-[18px] py-2 rounded-r-lg cursor-pointer  md:rounded md:px-2 md:py-1.5 active:bg-primary/20 dark:active:bg-primaryDark/20 hover:bg-primary/30 dark:hover:bg-primaryDark/10'
              >
                MOBILE APP'S
              </div>
              )}
        </div>
        <div className='flex justify-center items-center gap-7 flex-wrap'>
          {toggle === 'all' &&
            projects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter(item => item.category === toggle)
            .map(project => (
              <ProjectCard
                key={project.title}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

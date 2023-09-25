import { Modal } from '@mui/material'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { GithubIcon, LinkedInIcon, XClosed } from './Icons'

const popis = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

function ProjectDetails ({ openModal, setOpenModal }) {
  const project = openModal?.project
  return (
    <Modal
      open
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <div className={`${popis.className} w-full h-full absolute bg-[#FFFFFFa7] dark:bg-[#000000a7] flex [align-items:top] justify-center overflow-y-scroll transition-all duration-[0.5s] ease-[ease] left-0 top-0`}>
        <div className='max-w-[800px] w-full h-min flex flex-col relative mx-3 my-[50px] p-5 rounded-2xl bg-card dark:bg-carDark text-dark dark:text-light'>
          <XClosed
            className='h-7 w-7 relative top-2 left-[90%] cursor-pointer'
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img
            src={project?.image}
            alt='project'
            className='w-full object-cover shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] mt-[30px] rounded-xl'
          />
          <div className='text-[28px] font-semibold mt-2 mb-0 mx-1.5 text-dark dark:text-light sm:text-2xl sm:mt-1.5 sm:mb-0 sm:mx-1.5'>
            {project?.title}
          </div>
          <div className='text-base font-normal mx-1.5 my-0.5 text-dark/70 dark:text-light/70 md:text-xs'>
            {project.date}
          </div>
          <div className='flex flex-wrap mx-0 my-2 sm:mx-0 sm:my-1'>
            {project?.tags.map((tag, index) => (
              <div className='text-sm font-normal m-1 px-2 py-1 rounded-lg text-primary dark:text-primaryDark bg-primary/20 dark:bg-primaryDark/20 sm:text-xs' key={index}>
                {tag}
              </div>
            ))}
          </div>
          <div className='text-base font-normal mx-1.5 my-2 text-dark dark:text-light sm:text-sm sm:m-1.5'>
            {project?.description}
          </div>
          {project.member && (
            <>
              <div className='text-xl font-semibold mx-1.5 my-2 text-dark dark:text-light sm:text-base sm:mx-1.5 sm:my-2'>
                Members
              </div>
              <div className='flex flex-col gap-1.5 flex-wrap mx-1.5 my-3 sm:mx-1.5 sm:my-1'>
                {project?.member.map(member => (
                  <div className='flex items-center gap-3' key={member.name}>
                    <img
                      src={member.img}
                      alt='member'
                      className='w-[50px] h-[50px] object-cover shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] mb-1 rounded-[50%] sm:w-8 sm:h-8'
                    />
                    <div className='text-base font-medium w-[200px] text-dark dark:text-light sm:text-sm'>
                      {member.name}
                    </div>
                    <Link
                      href={member.github}
                      className='w-5 h-5'
                    >
                      <GithubIcon />
                    </Link>
                    <Link
                      href={member.linkedin}
                      className='w-5 h-5'
                    >
                      <LinkedInIcon />
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className='flex justify-end gap-3 mx-0 my-3'>
            <Link
              dull='true'
              href={project?.github}
              target='new'
              className='w-full text-center text-base font-semibold cursor-pointer no-underline transition-all duration-[0.5s] ease-[ease] px-4 py-3 rounded-lg bg-light dark:bg-dark text-dark dark:text-light hover:bg-primary/70 dark:hover:bg-primaryDark/50'
            >
              View Code
            </Link>
            <Link
              href={project?.webapp}
              target='new'
              className='w-full text-center text-base font-semibold cursor-pointer no-underline transition-all duration-[0.5s] ease-[ease] px-4 py-3 rounded-lg text-dark dark:text-light bg-primary dark:bg-primaryDark/70 hover:bg-primary/70 dark:hover:bg-primaryDark/40'
            >
              View App
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ProjectDetails

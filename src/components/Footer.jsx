import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons'
import Link from 'next/link'
import { Bio } from '../data/en'

function Footer () {
  return (
    <div className='w-full flex justify-center'>
      <footer className='w-full max-w-[1200px] flex flex-col gap-3.5 items-center p-4 text-dark dark:text-light'>
        <h1 className='font-semibold text-xl text-dark dark:text-light'>
          {Bio.name}
        </h1>
        <nav className='w-full max-w-[800px] flex flex-row gap-8 justify-center mt-2 md:flex-wrap md:gap-4 md:justify-center md:text-center md:text-xs'>
          <Link
            href='#about'
            className='no-underline text-[1.2rem] transition-[color] duration-[0.2s] ease-[ease-in-out] text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark md:text-base'
          >
            About
          </Link>
          <Link
            href='#projects'
            className='no-underline text-[1.2rem] transition-[color] duration-[0.2s] ease-[ease-in-out] text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark md:text-base'
          >
            Projects
          </Link>
          <Link
            href='#skills'
            className='no-underline text-[1.2rem] transition-[color] duration-[0.2s] ease-[ease-in-out] text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark md:text-base'
          >
            Skills
          </Link>
          <Link
            href='#experience'
            className='no-underline text-[1.2rem] transition-[color] duration-[0.2s] ease-[ease-in-out] text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark md:text-base'
          >
            Experience
          </Link>
          <Link
            href='#education'
            className='no-underline text-[1.2rem] transition-colors duration-[0.2s] ease-[ease-in-out] text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark md:text-base'
          >
            Education
          </Link>
        </nav>
        <div className='flex mt-4 items-start'>
          <Link
            href={Bio.twitter}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-2xl transition-colors duration-[0.2s] ease-[ease-in-out] mx-4 my-0'
          >
            <TwitterIcon />
          </Link>
          <Link
            href={Bio.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-2xl transition-colors duration-[0.2s] ease-[ease-in-out] mx-4 my-0'
          >
            <GithubIcon />
          </Link>
          <Link
            href={Bio.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-2xl transition-colors duration-[0.2s] ease-[ease-in-out] mx-4 my-0'
          >
            <LinkedInIcon />
          </Link>
          <Link
            href={Bio.insta}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-2xl transition-colors duration-[0.2s] ease-[ease-in-out] mx-4 my-0'
          >
            <InstagramIcon />
          </Link>
        </div>
        <p className='text-[0.9rem] text-center mt-6 text-dark dark:text-light'>
          &copy; 2023 Crissacm. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer

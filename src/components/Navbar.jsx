import { Bio } from '@/data/en'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon
} from './Icons'
import Logo from './Logo'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ to, title, offset }) => {
  return (
    <Link
      activeClass='text-primary dark:text-primaryDark transition-all duration-300'
      spy
      smooth
      to={to}
      offset={offset}
      className='rounded relative cursor-pointer group text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark'
    >
      {title}
      <span
        className='inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 group-hover:w-full ease duration-300 dark:bg-light w-0'
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ to, title, toggle, offset }) => {
  const handleClick = () => {
    toggle()
  }

  return (
    <Link
      activeClass='dark:text-primary text-primaryDark transition-all duration-300 [&>span]:w-full'
      spy
      smooth
      to={to}
      offset={offset}
      onClick={handleClick}
      className='mr-4 lg:m-0 lg:my-2 rounded relative group text-light dark:text-dark'
    >
      {title}
      <span
        className='inline-block h-[1px] absolute left-0 -bottom-0.5
              group-hover:w-full transition-[width] ease duration-300 w-0 bg-light dark:bg-dark'
      >
        &nbsp;
      </span>
    </Link>
  )
}

function Navbar () {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <header
      className={`bg-light dark:bg-carDark h-20 flex items-center justify-center text-base sticky top-0 z-10 ${
        shadow ? 'shadow-xl ease-in-out duration-300' : ''
      }`}
    >
      <div className='flex justify-between items-center h-[60px] z-[1] w-full max-w-[1200px] px-6 py-0'>
        {/* Logo */}
        <Logo />
        <Link
          to='about'
          smooth
          offset={-90}
          className='w-2/3 flex md:w-full items-center no-underline font-bold text-lg px-2 py-0 text-dark dark:text-light'
        >
          <span className='cursor-pointer'>Portfolio</span>
        </Link>
        {/* Section Menu */}
        <ul className='w-full flex items-center justify-center gap-x-8 px-1.5 py-0 md:hidden font-semibold'>
          <CustomLink to='about' title='About' />
          <CustomLink to='projects' title='Projects' offset={-70} />
          <CustomLink to='skills' title='Skills' offset={-90} />
          <CustomLink to='experience' title='Experience' offset={-10} />
          <CustomLink to='education' title='Education' offset={-50} />
        </ul>
        {/* Profile Button & light/dark */}
        <div className='w-4/5 h-full flex [justify-content:end] items-center px-1.5 py-0 md:hidden'>
          <a
            href={Bio.github}
            target='_blank'
            rel='noreferrer'
            className='justify-center flex items-center h-[70%] dark:text-primaryDark text-primary cursor-pointer font-medium no-underline text-base transition-all duration-500 px-3 py-0 rounded-[20px] border-[1.8px] border-solid dark:border-primaryDark border-primary dark:hover:bg-primaryDark hover:bg-primary dark:hover:text-light hover:text-light md:text-sm'
          >
            Github Profile
          </a>
          <button
            type='button'
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`w-6 h-6 ease m-1 ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1 ${
              mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {mode === 'dark'
              ? (
                <MoonIcon className='fill-dark' />
                )
              : (
                <SunIcon className='fill-dark' />
                )}
          </button>
        </div>
        {/* Button Menu */}
        <button
          type='button'
          className='flex-col items-center justify-center hidden md:flex'
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block h-1 w-6 rounded-sm transition-all duration-300 ease-out ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
          />
          <span
            className={`bg-dark dark:bg-light block w-6 rounded-sm transition-all duration-300 ease-out ${
              isOpen ? 'opacity-0' : 'opacity-100 h-1'
            } my-0.5`}
          />
          <span
            className={`bg-dark dark:bg-light block h-1 w-6 rounded-sm transition-all duration-300 ease-out ${
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className='min-w-[70vw] sm:min-w-[90vw] justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-32 bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md hidden lg:flex'
            >
              {/* links */}
              <nav className='flex items-center flex-col justify-center font-medium'>
                <CustomMobileLink
                  to='about'
                  title='About'
                  toggle={handleClick}
                  offset={110}
                />
                <CustomMobileLink
                  to='projects'
                  title='Projects'
                  toggle={handleClick}
                  offset={-70}
                />
                <CustomMobileLink
                  to='skills'
                  title='Skills'
                  toggle={handleClick}
                  offset={-80}
                />
                <CustomMobileLink
                  to='experience'
                  title='Experience'
                  toggle={handleClick}
                />
                <CustomMobileLink
                  to='education'
                  title='Education'
                  toggle={handleClick}
                  offset={-40}
                />
              </nav>
              {/* social media */}
              <nav className='flex items-center justify-center mt-2'>
                <motion.a
                  href={Bio.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-6 m-1 mr-3 sm:mx-1'
                >
                  <TwitterIcon />
                </motion.a>
                <motion.a
                  href={Bio.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-6 m-1 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1 dark:text-light'
                >
                  <GithubIcon />
                </motion.a>
                <motion.a
                  href={Bio.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-6 m-1 mx-3 sm:mx-1'
                >
                  <LinkedInIcon />
                </motion.a>
                <motion.a
                  href={Bio.insta}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-6 m-1 mx-3 sm:mx-1'
                >
                  <InstagramIcon />
                </motion.a>
                <button
                  type='button'
                  onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                  className={`w-6 h-6 ease m-1 ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1 ${
                    mode === 'light'
                      ? 'bg-dark text-light'
                      : 'bg-light text-dark'
                  }`}
                >
                  {mode === 'dark'
                    ? (
                      <MoonIcon className='fill-dark' />
                      )
                    : (
                      <SunIcon className='fill-dark' />
                      )}
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar

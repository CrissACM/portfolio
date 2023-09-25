import {
  GithubIcon,
  InstagramIcon,
  LinkArrow,
  LinkedInIcon,
  TwitterIcon
} from '@/components/Icons'
import { Bio } from '@/data/en'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import profilePic from '../../public/images/profile/profile.jpeg'
import HeroAnimation from './HeroAnimation'

const MotionLink = motion(Link)

function Hero () {
  return (
    <div id='about'>
      <div className='bg-card dark:bg-carDarkL flex justify-center relative px-[30px] py-20 z-[1] [clip-path:polygon(0_0,100%_0,100%_100%,70%_95%,0_100%)] mg:px-4 mg:py-[66px] sm:px-4 sm:py-8'>
        <div className='absolute flex [justify-content:end] w-full h-full max-w-[1360px] overflow-hidden [-webkit-transform:translateX(-50%)_translateY(-50%)] -translate-x-2/4 -translate-y-2/4 px-[30px] py-0 left-2/4 top-2/4 inset-0 mg:justify-center mg:p-0'>
          <HeroAnimation />
        </div>
        <div className='relative flex justify-between items-center w-full max-w-[1100px] mg:flex-col'>
          {/* Hero Left */}
          <div
            id='Left'
            className='w-full order-1 mg:order-2 mg:flex mg:flex-col mg:items-center mg:mb-[30px] sm:order-2 sm:flex sm:flex-col sm:items-center sm:mb-[30px]'
          >
            <div className='font-bold text-[45px] text-dark dark:text-light leading-[68px] mg:text-center sm:text-[32px] sm:leading-[48px] sm:mb-2 truncate'>
              Hi, I am <br />
              {Bio.name}
            </div>
            <div className='font-semibold text-[30px] flex gap-3 text-dark dark:text-light leading-[68px] mg:text-center sm:text-[22px] sm:leading-[48px] sm:mb-4'>
              <span className='text-primary dark:text-primaryDark'>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true
                  }}
                />
              </span>
            </div>
            <div className='text-lg leading-8 text-dark/70 dark:text-light/70 mg:text-center sm:text-base sm:leading-8'>
              {Bio.description}
            </div>
            {/* social media */}
            <nav className='flex justify-around items-center h-16 my-6 sm:my-2 w-full mg:justify-evenly'>
              <MotionLink
                href={Bio.twitter}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className='w-10 brightness-100'
              >
                <TwitterIcon />
              </MotionLink>
              <MotionLink
                href={Bio.github}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className='w-10 brightness-100 rounded-full dark:text-light'
              >
                <GithubIcon />
              </MotionLink>
              <MotionLink
                href={Bio.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className='w-10 brightness-100'
              >
                <LinkedInIcon />
              </MotionLink>
              <MotionLink
                href={Bio.insta}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className='w-10 brightness-100'
              >
                <InstagramIcon />
              </MotionLink>
            </nav>
            <Link
              href={Bio.resume}
              target='_blank'
              rel='noopener noreferrer'
              className='resumeBtn sm:text-lg mb-4 sm:px-0 sm:py-4 flex justify-center'
            >
              Check Resume
              <LinkArrow className='ml-2 !w-6' />
            </Link>
          </div>
          {/* Hero right */}
          <div
            id='Right'
            className='w-full flex order-2 [justify-content:end] gap-3 mg:order-1 mg:justify-center mg:items-center mg:mb-20 sm:mb-[30px]'
          >
            <Image
              src={profilePic}
              alt='hero-image'
              priority
              className='relative object-cover w-full h-full max-w-[400px] max-h-[400px] rounded-[50%] border-primary dark:border-primaryDark -top-16 mg:top-0 border-2 border-solid md:max-w-[400px] md:max-h-[400px] sm:max-w-[280px] sm:max-h-[280px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

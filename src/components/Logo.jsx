import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionLink = motion(Link)

function Logo () {
  return (
    <div className='flex flex-col items-center justify-center'>
      <MotionLink
        className='flex items-center justify-center rounded-full w-12 h-12 bg-dark text-white dark:border-2 dark:border-solid dark:border-light text-xl font-bold'
        href='/'
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(70,1,155,1)',
            'rgba(0,126,254,1)',
            'rgba(0,187,0,1)',
            'rgba(254,246,1,1)',
            'rgba(221,0,0,1)',
            '#121212'
          ],
          transition: { duration: 1.5, repeat: Infinity }
        }}
      >
        CC
      </MotionLink>
    </div>
  )
}

export default Logo

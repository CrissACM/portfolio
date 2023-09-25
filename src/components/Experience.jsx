import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@mui/lab'
import { experiences } from '../data/en'
import ExperienceCard from './ExperienceCard'

function Experience () {
  return (
    <div
      id='experience'
      className='flex flex-col justify-center relative z-[1] items-center pt-10 pb-20 px-0 mg:p-0'
    >
      <div className='relative flex justify-between items-center flex-col w-full max-w-[1350px] gap-3 px-0 py-20 mg:flex-col'>
        <div className='text-[42px] text-center font-semibold text-dark dark:text-light mt-5 md:text-[32px] md:mt-3'>
          Experience
        </div>
        <div className='text-lg text-center max-w-[600px] text-dark/70 dark:text-light/70 md:text-base md:mt-3'>
          My work experience as a software engineer and working on different
          companies and projects.
        </div>
        <div className='w-full max-w-[1000px] flex flex-col items-center justify-center gap-3 mt-2.5'>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' className='dark:border-primary border-primaryDark' />
                  {index !== experiences.length && (
                    <TimelineConnector className='bg-primary dark:bg-primaryDark' />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  )
}

export default Experience

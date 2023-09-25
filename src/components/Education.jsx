import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@mui/lab'
import { education, experiences } from '../data/en'
import EducationCard from './EducationCard'

function Education () {
  return (
    <div
      id='education'
      className='flex flex-col justify-center relative z-[1] items-center pt-0 pb-[60px] px-0 mg:p-0'
    >
      <div className='relative flex justify-between items-center flex-col w-full max-w-[1350px] gap-3 pt-10 pb-0 px-0 mg:flex-col'>
        <div className='text-[42px] text-center font-semibold mt-5 text-dark dark:text-light md:text-[32px] md:mt-3'>
          Education
        </div>
        <div className='text-lg text-center max-w-[600px] text-dark/70 dark:text-light/70 md:text-base mt-3'>
          My education has been a journey of discovery and growth that continues. My educational details are as follows.
        </div>
        <div className='w-full max-w-[1000px] flex flex-col items-center justify-center gap-3 mt-2.5 sm:[align-items:end]'>
          <Timeline>
            {education.map((education) => (
              <TimelineItem key={education.id}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' className='dark:border-primary border-primaryDark' />
                  {education.id !== experiences.length && (
                    <TimelineConnector className='bg-primary dark:bg-primaryDark' />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  )
}

export default Education

import { Poppins } from 'next/font/google'

const popis = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

function EducationCard ({ education }) {
  return (
    <div className={`${popis.className} card`}>
      <div className='w-full flex gap-3'>
        <img
          src={education.img}
          alt='educationimage'
          className='h-[50px] dark:bg-light bg-dark mt-1 rounded-[10px] md:h-10'
        />
        <div className='w-full flex flex-col'>
          <div className='text-lg font-semibold text-dark dark:text-light md:text-sm'>
            {education.school}
          </div>
          <div className='text-sm font-medium text-dark/70 dark:text-light/70 md:text-xs'>
            {education.degree}
          </div>
          <div className='text-xs font-normal text-dark/70 dark:text-light/70 md:text-[10px]'>
            {education.date}
          </div>
        </div>
      </div>
      <div className='text-sm font-medium text-dark dark:text-light/70 md:text-xs'>
        <b>Grade: </b>
        {education.grade}
      </div>
      <div className='w-full text-[15px] font-normal mb-2.5 text-dark dark:text-light md:text-xs'>
        <span className='[display:-webkit-box]'>{education.desc}</span>
      </div>
    </div>
  )
}

export default EducationCard

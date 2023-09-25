import { Poppins } from 'next/font/google'

const popis = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

function ExperienceCard ({ experience }) {
  return (
    <div className={`${popis.className} card`}>
      <div className='w-full flex gap-3'>
        <img
          src={experience.img}
          alt='expimg'
          className='h-[50px] dark:bg-light bg-dark mt-1 rounded-[10px] md:h-10'
        />
        <div className='w-full flex flex-col'>
          <div className='text-lg font-semibold text-dark dark:text-light md:text-sm'>
            {experience.role}
          </div>
          <div className='text-sm font-medium text-dark/70 dark:text-light/70 md:text-xs'>
            {experience.company}
          </div>
          <div className='text-xs font-normal text-dark/70 dark:text-light/70 md:text-[10px]'>
            {experience.date}
          </div>
        </div>
      </div>
      <div className='w-full text-[15px] font-normal text-dark dark:text-light mb-2.5 md:text-xs'>
        {experience?.desc && (
          <span className='[display:-webkit-box]'>{experience?.desc}</span>
        )}
        {experience?.skills && (
          <>
            <br />
            <div className='w-full flex gap-3 -mt-2.5'>
              <b>Skills:</b>
              <div className='flex flex-wrap gap-2'>
                {experience?.skills?.map((skill, index) => (
                  <div className='text-[15px] font-normal md:text-xs' key={index}>
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ExperienceCard

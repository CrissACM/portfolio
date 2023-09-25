import { skills } from '../data/en'

function Skills () {
  return (
    <div
      id='skills'
      className='flex flex-col justify-center relative z-[1] items-center'
    >
      <div className='relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3 md:flex-col'>
        <div className='text-[42px] text-center font-semibold text-dark dark:text-light mt-5 md:text-[32px] md:mt-3'>
          Skills
        </div>
        <div className='text-lg text-center max-w-[600px] text-dark dark:text-light/70 md:text-base'>
          Here are some of my skills I've been working on.
        </div>
        <div className='w-full flex flex-wrap gap-[30px] justify-center mt-[30px]'>
          {skills.map((skill, index) => (
            <div className='w-full max-w-[500px] border-primary dark:border-primaryDark border-[0.1px] border-solid shadow-[rgba(23,92,230,0.15)_0px_4px_24px] px-9 py-[18px] rounded-2xl md:max-w-[400px] md:px-9 md:py-2.5 xs:max-w-[330px] xs:px-9 xs:py-2.5' key={index}>
              <h2 className='text-[28px] font-semibold text-dark dark:text-light text-center mb-5'>
                {skill.title}
              </h2>
              <div className='flex justify-center flex-wrap gap-3 mb-5'>
                {skill.skills.map(item => (
                  <div className='text-base font-normal text-dark dark:text-light border flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-solid border-dark/70 dark:border-light/70 md:text-sm md:px-3 md:py-2 xs:text-sm xs:px-3 xs:py-1.5' key={item.image}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-8 h-8 sm:w-6 sm:h-6'
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

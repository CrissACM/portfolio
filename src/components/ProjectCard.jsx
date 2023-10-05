function ProjectCard({ project, setOpenModal }) {
  return (
    <div
      onClick={() => setOpenModal({ state: true, project })}
      className='w-[330px] h-[490px] bg-card dark:bg-carDark cursor-pointer shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col gap-3.5 transition-all duration-[0.5s] ease-[ease-in-out] px-5 py-[26px] rounded-[10px] hover:-translate-y-2.5 hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] hover:brightness-110 [&>Button]:hover:block'
    >
      <img
        src={project.image}
        alt='project'
        className='w-full object-cover h-[180px] bg-dark dark:bg-light shadow-[0_0_16px_2px_rgba(0,0,0,0.3)] rounded-[10px]'
      />
      <div className='w-full flex items-center flex-wrap gap-2 mt-1'>
        {project.tags?.map((tag, index) => (
          <span
            className='text-xs font-normal px-2 py-0.5 rounded-[10px] bg-primary/[0.08] dark:bg-primaryDark/[0.08] text-primary dark:text-primaryDark'
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className='w-full flex flex-col gap-0 px-0.5 py-0'>
        <div className='text-xl font-semibold overflow-hidden [display:-webkit-box] max-w-full [-webkit-line-clamp:2] [-webkit-box-orient:vertical] text-ellipsis text-dark dark:text-light'>
          {project.title}
        </div>
        <div className='text-xs font-normal ml-0.5 text-dark/60 dark:text-light/60 md:text-[10px]'>
          {project.date}
        </div>
        <div className='font-normal overflow-hidden [display:-webkit-box] max-w-full [-webkit-line-clamp:3] [-webkit-box-orient:vertical] text-ellipsis mt-2 text-dark/80 dark:text-light/80'>
          {project.description}
        </div>
      </div>
      <div className='flex items-center pl-2.5'>
        {project.member?.map(member => (
          <img
            key={member.name}
            src={member.img}
            alt='avatar'
            className='w-[38px] h-[38px] shadow-[0_0_10px_rgba(0,0,0,0.2)] border-carDark dark:border-card bg-dark dark:bg-light -ml-2.5 rounded-[50%] border-[3px] border-solid'
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard

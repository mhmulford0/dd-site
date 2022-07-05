import classNames from '@/lib/className';

export default function PinnedProjects({
  pinnedProjects,
}: Record<string, any>) {
  return (
    <div className='mt-6 px-4 sm:px-6 lg:px-8'>
      <h2 className='text-xs font-medium uppercase tracking-wide text-gray-500'>
        Project Spotlight
      </h2>
      <ul
        role='list'
        className='mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4'
      >
        {pinnedProjects?.map((project) => (
          <li
            key={project.id}
            className='relative col-span-1 flex rounded-md shadow-sm'
          >
            <div
              className={classNames(
                'bg-indigo-500',
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            >
              MM
            </div>
            <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white'>
              <div className='flex-1 truncate px-4 py-2 text-sm'>
                <a
                  href='#'
                  className='font-medium text-gray-900 hover:text-gray-600'
                >
                  {project.attributes.name}
                </a>
                <p className='text-gray-500'>{project.totalMembers} Members</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

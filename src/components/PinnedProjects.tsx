import classNames from '@/lib/className';

import type { Project } from '@/types';

interface Props {
  pinnedProjects: Project[];
}

export default function PinnedProjects({ pinnedProjects }: Props) {
  return (
    <div className='mt-6 px-4 sm:px-6 lg:px-8'>
      <h2 className='text-xs font-medium uppercase tracking-wide text-gray-500'>
        Project Spotlight
      </h2>
      <ul
        role='list'
        className='mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4'
      >
        {pinnedProjects?.map((project: Project) => (
          <li key={project.id} className='relative col-span-1 flex rounded-md shadow-sm'>
            <div
              className={classNames(
                'bg-indigo-500',
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            >
              {project.attributes.name.slice(0, 3).toUpperCase()}
            </div>
            <div className='flex flex-1 flex-wrap items-center justify-between rounded-r-md border-t border-r border-b border-gray-200 bg-white'>
              <div className='flex-1 px-4 py-2 text-sm'>
                <a href='#' className='font-medium text-gray-900 hover:text-gray-600'>
                  {project.attributes.name}
                </a>
                <p className='break-word text-gray-500'>
                  {project.attributes.guilds.data.map((guild) => {
                    return (
                      <span className='mr-1  italic text-gray-500' key={guild.id}>
                        {project.attributes.guilds.data.length > 1
                          ? guild.attributes.guild_name
                          : guild.attributes.guild_name}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

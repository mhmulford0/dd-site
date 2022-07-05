import { ChevronRightIcon } from '@heroicons/react/outline';
import { Key } from 'react';
import { useQuery } from 'react-query';

import classNames from '@/lib/className';

export default function ProjectList() {
  const { data: projects } = useQuery('projects', async () => {
    const res = await fetch(
      'http://localhost:1337/api/projects?populate=guilds'
    );
    const data = await res.json();
    return data;
  });
  return (
    <>
      {/* Projects list (only on smallest breakpoint) */}
      <div className='mt-10 sm:hidden'>
        <div className='px-4 sm:px-6'>
          <h2 className='text-xs font-medium uppercase tracking-wide text-gray-500'>
            Projects
          </h2>
        </div>
        <ul
          role='list'
          className='mt-3 divide-y divide-gray-100 border-t border-gray-200'
        >
          {projects?.data?.map((project: Record<string, string>) => (
            <li key={project.id}>
              <a
                href='#'
                className='group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6'
              >
                <span className='flex items-center space-x-3 truncate'>
                  <span
                    className={classNames(
                      project.bgColorClass,
                      'h-2.5 w-2.5 flex-shrink-0 rounded-full'
                    )}
                    aria-hidden='true'
                  />
                  <span className='truncate text-sm font-medium leading-6'>
                    {project.title}{' '}
                    <span className='truncate font-normal text-gray-500'>
                      in {project.team}
                    </span>
                  </span>
                </span>
                <ChevronRightIcon
                  className='ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                  aria-hidden='true'
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Projects table (small breakpoint and up) */}
      <div className='mt-8 hidden sm:block'>
        <div className='inline-block min-w-full border-b border-gray-200 align-middle'>
          <table className='min-w-full'>
            <thead>
              <tr className='border-t border-gray-200'>
                <th
                  className='text-md border-b border-gray-200 bg-gray-50 px-6 py-3 text-left font-medium uppercase tracking-wider text-gray-800'
                  scope='col'
                >
                  <span className='lg:pl-2'>Project</span>
                </th>
                <th
                  className='text-md border-b border-gray-200 bg-gray-50 px-6 py-3 text-left font-medium uppercase tracking-wider text-gray-800'
                  scope='col'
                >
                  Status
                </th>
                <th
                  className='text-md hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right font-medium uppercase tracking-wider text-gray-800 md:table-cell'
                  scope='col'
                >
                  Updated
                </th>
                <th
                  className='border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-xs font-medium uppercase tracking-wider text-gray-800'
                  scope='col'
                />
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100 bg-white'>
              {projects?.data.map((project: Record<string, any>) => (
                <tr key={project.id as Key}>
                  <td className='text-md w-full max-w-0 whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                    <div className='flex items-center space-x-3 lg:pl-2'>
                      <div
                        className={classNames(
                          'bg-green-500',
                          'h-2.5 w-2.5 flex-shrink-0 rounded-full'
                        )}
                        aria-hidden='true'
                      />
                      <a href='#' className='truncate hover:text-gray-600'>
                        <span>
                          {project.attributes.name}{' '}
                          <span className='font-normal text-gray-500'>
                            in Project Team
                          </span>
                        </span>
                      </a>
                    </div>
                  </td>
                  <td className='px-6 py-3 text-sm font-medium text-gray-500'>
                    <div className='flex items-center space-x-2'>
                      <div className='flex flex-shrink-0 -space-x-1'>
                        {project.attributes.status}
                      </div>
                    </div>
                  </td>
                  <td className='hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell'>
                    {new Date(project.attributes.updatedAt).toLocaleDateString(
                      'en-us'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

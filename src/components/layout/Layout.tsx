/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuAlt1Icon } from '@heroicons/react/outline';
import { useState } from 'react';
import { useQuery } from 'react-query';

import Navbar from '@/components/layout/Navbar';
import PinnedProjects from '@/components/PinnedProjects';
import ProjectList from '@/components/ProjectList';

import { Project } from '@/types';

export default function Layout() {
  const { data: projects } = useQuery('projects', async () => {
    const res = await fetch('http://localhost:1337/api/projects?populate=guilds');
    const data = await res.json();
    return data;
  });

  const pinnedProjects: Project[] = projects?.data?.filter(
    (project: Project) => project.attributes.pinned
  );

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='min-h-full'>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Main column */}
      <div className='flex flex-col lg:pl-64'>
        {/* Search header */}
        <div className='sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden'>
          <button
            type='button'
            className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuAlt1Icon className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex flex-1 justify-between px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center'>Home</div>
          </div>
        </div>
        <main className='flex-1'>
          {/* Page title & actions */}
          <div className='hidden border-b border-gray-200 px-4 py-4 sm:items-center sm:justify-between sm:px-6 md:flex lg:px-8'>
            <div className='min-w-0 flex-1'>
              <h1 className='text-lg font-medium leading-6 text-gray-900'>Projects</h1>
            </div>
          </div>

          <PinnedProjects pinnedProjects={pinnedProjects} />

          <ProjectList />
        </main>
      </div>
    </div>
  );
}

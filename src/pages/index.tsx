import { useQuery } from 'react-query';

import PinnedProjects from '@/components/PinnedProjects';
import ProjectList from '@/components/ProjectList';

import { Project } from '@/types';

export default function HomePage() {
  const { data: projects } = useQuery('projects', async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects?populate=guilds`
    );
    const data = await res.json();
    return data;
  });

  const pinnedProjects: Project[] = projects?.data?.filter(
    (project: Project) => project.attributes.pinned
  );
  return (
    <>
      <div className='hidden border-b border-gray-200 px-4 py-4 sm:items-center sm:justify-between sm:px-6 md:flex lg:px-8'>
        <div className='min-w-0 flex-1'>
          <h1 className='text-lg font-medium leading-6 text-gray-900'>Projects</h1>
        </div>
      </div>

      <PinnedProjects pinnedProjects={pinnedProjects} />

      <ProjectList />
    </>
  );
}

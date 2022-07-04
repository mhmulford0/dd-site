import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  ClockIcon,
  HomeIcon,
  MenuAlt1Icon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronRightIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Recent', href: '#', icon: ClockIcon, current: false },
];
const teams = [
  { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
];
const projects = [
  {
    id: 1,
    title: 'GraphQL API',
    initials: 'GA',
    team: 'Engineering',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
  // More projects...
];
const pinnedProjects = projects.filter((project) => project.pinned);

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='min-h-full'>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-40 lg:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex flex-shrink-0 items-center px-4'>
                  <img
                    className='h-8 w-auto'
                    src='/images/dd-logo.png'
                    alt='Workflow'
                  />
                </div>
                <div className='mt-5 h-0 flex-1 overflow-y-auto'>
                  <nav className='px-2'>
                    <div className='space-y-1'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center rounded-md px-2 py-2 text-base font-medium leading-5'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-gray-500'
                                : 'text-gray-400 group-hover:text-gray-500',
                              'mr-3 h-6 w-6 flex-shrink-0'
                            )}
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className='mt-8'>
                      <h3
                        className='px-3 text-xs font-semibold uppercase tracking-wider text-gray-500'
                        id='mobile-teams-headline'
                      >
                        Guilds
                      </h3>
                      <div
                        className='mt-1 space-y-1'
                        role='group'
                        aria-labelledby='mobile-teams-headline'
                      >
                        {teams.map((team) => (
                          <a
                            key={team.name}
                            href={team.href}
                            className='group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          >
                            <span
                              className={classNames(
                                team.bgColorClass,
                                'mr-4 h-2.5 w-2.5 rounded-full'
                              )}
                              aria-hidden='true'
                            />
                            <span className='truncate'>{team.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className='w-14 flex-shrink-0' aria-hidden='true'>
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4'>
        <div className='mr-4 flex flex-shrink-0 items-center px-4'>
          <img
            className='h-8 w-auto'
            src='/images/dd-logo.jpeg'
            alt='Workflow'
          />
          <h4 className='ml-4'>Developer DAO</h4>
        </div>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='mt-6 flex h-0 flex-1 flex-col overflow-y-auto'>
          {/* User account dropdown */}

          {/* Navigation */}
          <nav className='mt-6 px-3'>
            <div className='space-y-1'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-200 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 h-6 w-6 flex-shrink-0'
                    )}
                    aria-hidden='true'
                  />
                  {item.name}
                </a>
              ))}
            </div>
            <div className='mt-8'>
              {/* Secondary navigation */}
              <h3
                className='px-3 text-xs font-semibold uppercase tracking-wider text-gray-500'
                id='desktop-teams-headline'
              >
                Guilds
              </h3>
              <div
                className='mt-1 space-y-1'
                role='group'
                aria-labelledby='desktop-teams-headline'
              >
                {teams.map((team) => (
                  <a
                    key={team.name}
                    href={team.href}
                    className='group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  >
                    <span
                      className={classNames(
                        team.bgColorClass,
                        'mr-4 h-2.5 w-2.5 rounded-full'
                      )}
                      aria-hidden='true'
                    />
                    <span className='truncate'>{team.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
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
            <div className='flex items-center'>{/* Profile dropdown */}</div>
          </div>
        </div>
        <main className='flex-1'>
          {/* Page title & actions */}
          <div className='border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'>
            <div className='min-w-0 flex-1'>
              <h1 className='text-lg font-medium leading-6 text-gray-900 sm:truncate'>
                Home
              </h1>
            </div>
            <div className='mt-4 flex sm:mt-0 sm:ml-4'>
              <button
                type='button'
                className='sm:order-0 order-1 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-0'
              >
                Share
              </button>
              <button
                type='button'
                className='order-0 inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:order-1 sm:ml-3'
              >
                Create
              </button>
            </div>
          </div>
          {/* Pinned projects */}
          <div className='mt-6 px-4 sm:px-6 lg:px-8'>
            <h2 className='text-xs font-medium uppercase tracking-wide text-gray-500'>
              Pinned Projects
            </h2>
            <ul
              role='list'
              className='mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4'
            >
              {pinnedProjects.map((project) => (
                <li
                  key={project.id}
                  className='relative col-span-1 flex rounded-md shadow-sm'
                >
                  <div
                    className={classNames(
                      project.bgColorClass,
                      'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                    )}
                  >
                    {project.initials}
                  </div>
                  <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white'>
                    <div className='flex-1 truncate px-4 py-2 text-sm'>
                      <a
                        href='#'
                        className='font-medium text-gray-900 hover:text-gray-600'
                      >
                        {project.title}
                      </a>
                      <p className='text-gray-500'>
                        {project.totalMembers} Members
                      </p>
                    </div>
                    <Menu as='div' className='flex-shrink-0 pr-2'>
                      <Menu.Button className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'>
                        <span className='sr-only'>Open options</span>
                        <DotsVerticalIcon
                          className='h-5 w-5'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute right-10 top-3 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <div className='py-1'>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href='#'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  View
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className='py-1'>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href='#'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  Removed from pinned
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href='#'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  Share
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </li>
              ))}
            </ul>
          </div>

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
              {projects.map((project) => (
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
                      className='border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                      scope='col'
                    >
                      <span className='lg:pl-2'>Project</span>
                    </th>
                    <th
                      className='border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                      scope='col'
                    >
                      Members
                    </th>
                    <th
                      className='hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 md:table-cell'
                      scope='col'
                    >
                      Last updated
                    </th>
                    <th
                      className='border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-xs font-medium uppercase tracking-wider text-gray-500'
                      scope='col'
                    />
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-100 bg-white'>
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className='w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900'>
                        <div className='flex items-center space-x-3 lg:pl-2'>
                          <div
                            className={classNames(
                              project.bgColorClass,
                              'h-2.5 w-2.5 flex-shrink-0 rounded-full'
                            )}
                            aria-hidden='true'
                          />
                          <a href='#' className='truncate hover:text-gray-600'>
                            <span>
                              {project.title}{' '}
                              <span className='font-normal text-gray-500'>
                                in {project.team}
                              </span>
                            </span>
                          </a>
                        </div>
                      </td>
                      <td className='px-6 py-3 text-sm font-medium text-gray-500'>
                        <div className='flex items-center space-x-2'>
                          <div className='flex flex-shrink-0 -space-x-1'>
                            {project.members.map((member) => (
                              <img
                                key={member.handle}
                                className='h-6 w-6 max-w-none rounded-full ring-2 ring-white'
                                src={member.imageUrl}
                                alt={member.name}
                              />
                            ))}
                          </div>
                          {project.totalMembers > project.members.length ? (
                            <span className='flex-shrink-0 text-xs font-medium leading-5'>
                              +{project.totalMembers - project.members.length}
                            </span>
                          ) : null}
                        </div>
                      </td>
                      <td className='hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell'>
                        {project.lastUpdated}
                      </td>
                      <td className='whitespace-nowrap px-6 py-3 text-right text-sm font-medium'>
                        <a
                          href='#'
                          className='text-indigo-600 hover:text-indigo-900'
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import { Dialog, Transition } from '@headlessui/react';
import { HomeIcon, XIcon } from '@heroicons/react/outline';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { useQuery } from 'react-query';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [{ name: 'Home', href: '#', icon: HomeIcon, current: true }];
const teams = [
  { name: 'Development', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Marketing', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Governance', href: '#', bgColorClass: 'bg-yellow-500' },
];

export default function Navbar({ setSidebarOpen, sidebarOpen }: Props) {
  const { data: guilds } = useQuery('guilds', async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guilds`);
    const data = await res.json();
    return data;
  });
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={setSidebarOpen}>
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
                      <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex flex-shrink-0 items-center px-4'>
                  <img className='h-8 w-auto' src='/images/dd-logo.jpeg' alt='Workflow' />
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
          <img className='h-8 w-auto' src='/images/dd-logo.jpeg' alt='Workflow' />
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
                {guilds?.data?.map(
                  ({
                    attributes,
                  }: Record<
                    string,
                    {
                      guild_name: string;
                    }
                  >) => (
                    <a
                      key={attributes.guild_name}
                      // href={attributes?.href}
                      className='group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    >
                      {/* <span
                      className={classNames(
                        attributes?.bgColorClass,
                        'mr-4 h-2.5 w-2.5 rounded-full'
                      )}
                      aria-hidden='true'
                    /> */}
                      <span className='truncate'>{attributes.guild_name}</span>
                    </a>
                  )
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

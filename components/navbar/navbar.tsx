'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import {
  Dialog,
  DialogPanel
} from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faArrowRightToBracket
} from '@awesome.me/kit-89a9106b13/icons/classic/regular';
import { useHoveredLink } from '@/lib/contexts/hovered-link';
import clsx from '@/lib/utils/clsx';
import SmallCube from './small-cube';

type HoverProps = {
  face: string;
  setFace: (face: string) => void;
  url: string;
  setUrl: (url: string) => void;
};

const menu = [
  {
    key: 1,
    name: 'print',
    face: 'top',
    href: '/print',
  },
  {
    key: 2,
    name: 'digital',
    face: 'right',
    href: '/digital',
  },
  {
    key: 3,
    name: 'about',
    face: 'back',
    href: '/about',
  },
  {
    key: 4,
    name: 'news',
    face: 'bottom',
    href: '/news',
  },
  {
    key: 5,
    name: 'contact',
    face: 'left',
    href: '/contact',
  },
];

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { setFace, setUrl } = useHoveredLink() as HoverProps;

  return (
    <header className='sticky top-0 left-0 right-0 w-full z-10 bg-black'>
      <nav
        aria-label='Global'
        className='px-6 max-w-7xl lg:mx-auto flex items-center justify-between'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className=''>
            <span className='sr-only'>Big Pixel</span>
            <SmallCube />
          </Link>
        </div>
        <div className='flex lg:hidden'>  
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
          >
            <span className='sr-only'>Open main menu</span>
            <FontAwesomeIcon icon={faBars} fixedWidth />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-24'>
          {menu.map((discipline) => (
            <Link
              key={discipline.key}
              href={discipline.href}
              onFocus={() => {
                setFace(discipline.face);
                setUrl(discipline.href);
              }}
              onMouseEnter={() => {
                setFace(discipline.face);
                setUrl(discipline.href);
              }}
              onMouseLeave={() => {
                setFace('front');
                setUrl('/');
              }}
              className={clsx(
                'px-2 py-1.5 font-semibold leading-6',
                pathname === discipline.href
                  ? 'pointer-events-none border-b-2 border-primary text-bigpix'
                  : 'text-gray-100 transition-colors duration-300 ease-in-out hover:text-bigpix'
              )}
            >
              {discipline.name}
            </Link>
          ))}
        </div>
        <SignedIn>
          {pathname === '/dashboard' ? (
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
              <UserButton />
            </div>
          ) : (
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
              <Link
                href='/dashboard'
                className='flex gap-x-2 font-semibold leading-6 text-gray-500 transition-colors duration-300 ease-in-out hover:text-bigpix'
              >
                Dashboard
                <span aria-hidden='true'>
                  <FontAwesomeIcon icon={faArrowRightToBracket} fixedWidth />
                </span>
              </Link>
            </div>
          )}
        </SignedIn>
        <SignedOut>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <Link
              href='/sign-in'
              className='flex gap-x-2 font-semibold leading-6 text-zinc-500 transition-colors duration-300 ease-in-out hover:text-white'
            >
              Sign In
              <span aria-hidden='true'>
                <FontAwesomeIcon icon={faArrowRightToBracket} fixedWidth />
              </span>
            </Link>
          </div>
        </SignedOut>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Big Pixel</span>
              <SmallCube />
            </Link>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-white'
            >
              <span className='sr-only'>Close menu</span>
              <FontAwesomeIcon icon={faXmark} fixedWidth />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500'>
              <div className='space-y-2 py-6'>
              {menu.map((discipline) => (
                <Link
                  key={discipline.key}
                  href={discipline.href}
                  onFocus={() => {
                    setFace(discipline.face);
                    setUrl(discipline.href);
                  }}
                  onMouseEnter={() => {
                    setFace(discipline.face);
                    setUrl(discipline.href);
                  }}
                  onMouseLeave={() => {
                    setFace('front');
                    setUrl('/');
                  }}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-black'
                  >
                    {discipline.name}
                  </Link>
                ))}
              </div>
              <SignedIn>
                {pathname === '/dashboard' ? (
                  <UserButton />
                ) : (
                  <div className='py-6'>
                    <Link
                      href='/dashboard'
                      className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-200 hover:bg-black'
                    >
                      <div className='flex items-center gap-x-2'>
                        Dashboard
                        <span aria-hidden='true'>
                          <FontAwesomeIcon icon={faArrowRightToBracket} fixedWidth />
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </SignedIn>
              <SignedOut>
                <div className='py-6'>
                  <Link
                    href='/sign-in'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-200 hover:bg-black'
                  >
                    <div className='flex items-center gap-x-2'>
                      Sign In
                      <span aria-hidden='true'>
                        <FontAwesomeIcon icon={faArrowRightToBracket} fixedWidth />
                      </span>
                    </div>
                  </Link>
                </div>
              </SignedOut>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
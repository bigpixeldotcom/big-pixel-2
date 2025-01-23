import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faFacebook,
  faBluesky,
  faInstagram,
  faThreads
} from '@awesome.me/kit-89a9106b13/icons/classic/brands';
import { IconDefinition } from '@awesome.me/kit-89a9106b13/icons';

type NavigationItem = {
  name: string;
  href: string;
  icon: IconDefinition;
};

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/bigpixeldotcom/',
    icon: faLinkedin
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/bigpixeldotcom/',
    icon: faFacebook,
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/bigpixeldotcom.bsky.social',
    icon: faBluesky,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/bigpixeldotcom/',
    icon: faInstagram,
  },
  {
    name: 'Threads',
    href: 'https://www.threads.net/@bigpixeldotcom',
    icon: faThreads,
  }
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='z-50 w-full p-4 bg-black tracking-wide'>
      <div className='mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex flex-col space-y-2 items-center md:items-start md:order-2'>
          <div className='flex justify-start gap-x-6'>
            {navigation.map((item: NavigationItem) => (
              <Link key={item.name} href={item.href} target='_blank' className='text-gray-500 hover:text-bigpix transition-colors ease-in-out duration-300'>
                <span className='sr-only'>{item.name}</span>
                <FontAwesomeIcon icon={item.icon} fixedWidth />
              </Link>
            ))}
          </div>
          <div className='flex space-x-10 text-xs/6 text-gray-500 mt-2 font-sans font-normal'>
            <Link href='/policy/privacy' className='hover:text-bigpix transition-colors ease-in-out duration-300'>Privacy Policy</Link>
            <Link href='/policy/cookie' className='hover:text-bigpix transition-colors ease-in-out duration-300'>Cookie Policy</Link>
          </div>
        </div>
        <div className='flex flex-col space-y-2 items-center md:items-start md:order-1'>
          <p className='mt-8 text-sm/6 text-gray-500 md:order-1 md:mt-0 font-medium tracking-wider'>
            &copy; {year} Big Pixel Consulting Ltd. All rights reserved.
          </p>
          <p className='text-xs/6 text-gray-500 md:order-1 md:mt-0 font-normal'>
            Registered in England and Wales No. 15928040. Registered address: Hardwick House, Agricultural Hall Plain, Norwich, England, NR1 3FS
          </p>
        </div>
      </div>
    </footer>
  )
};
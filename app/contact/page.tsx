import PageHeadline from '@/components/other/page-headline';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@awesome.me/kit-89a9106b13/icons';
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faBluesky,
  faThreads
} from '@awesome.me/kit-89a9106b13/icons/classic/brands';
import {
  faEnvelope,
  faPhoneOffice
} from '@awesome.me/kit-89a9106b13/icons/classic/regular';
import {
  InFromRight,
  InFromLeft
} from '@/components/animation';

type NavigationItem = {
  name: string;
  href: string;
  icon: IconDefinition;
};

const socials = [
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
]

export default function ContactPage() {

  return (
    <div className='flex flex-col'>
      <div className='mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col gap-y-6 left-0 justify-start'>
          <PageHeadline text='Big Shout Out' />
          <div className='w-full flex flex-col mt-8 gap-8'>
            <InFromLeft delay={1.5}>
              <h2 className='text-xl lg:text-3xl font-black text-bigpix'>You can contact Big Pixel in the usual ways</h2>
              <div className='mt-4 flex flex-col gap-y-4'>
                <div className='group flex items-center gap-x-2 lg:gap-x-4'>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    fixedWidth
                    className='text-xl lg:text-2xl text-gray-500 group-hover:text-bigpix transition-colors ease-in-out duration-300'
                  />
                  <a
                    href='mailto:hello@big-pixel.com'
                    className='text-base lg:text-xl font-normal text-gray-300 group-hover:text-white transition-colors ease-in-out duration-300'
                  >
                    hello@big-pixel.com
                  </a>
                </div>
                <div className='group flex items-center gap-x-2 lg:gap-x-4'>
                  <FontAwesomeIcon
                    icon={faPhoneOffice}
                    fixedWidth
                    className='text-xl lg:text-2xl text-gray-500 group-hover:text-bigpix transition-colors ease-in-out duration-300'
                  />
                  <a
                    href='tel:01692774886'
                    className='text-base lg:text-xl font-normal text-gray-300 group-hover:text-white transition-colors ease-in-out duration-300'
                  >
                    01692 774 886
                  </a>
                </div>
              </div>
            </InFromLeft>
            <InFromRight delay={2}>
              <h2 className='mt-12 text-xl lg:text-3xl font-black text-bigpix'>And on socials</h2>
              <div className='mt-4 flex flex-col gap-y-4'>
                {socials.map((item: NavigationItem) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target='_blank'
                    className='group flex items-center gap-x-2 lg:gap-x-4'
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      fixedWidth
                      className='text-xl lg:text-2xl text-gray-500 group-hover:text-bigpix transition-colors ease-in-out duration-300'
                    />
                    <span
                      className='text-base lg:text-xl font-normal text-gray-300 group-hover:text-white transition-colors ease-in-out duration-300'
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </InFromRight>
          </div>
        </div>
      </div>
    </div>
  )
}
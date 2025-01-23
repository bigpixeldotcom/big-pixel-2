import Image from 'next/image';
import PageHeadline from '@/components/other/page-headline';
import Profile from '@/public/images/about/profile.jpg';
import Currys from '@/public/images/about/currys.svg';
import PCWorld from '@/public/images/about/pcworld.svg';
import AIS from '@/public/images/about/ais.svg';
import Calibre from '@/public/images/about/calaudio.svg';
import {
  Popup,
  InFromLeft
} from '@/components/animation';

export default function AboutPage() {

  return (
    <div className='flex flex-col'>
      <div className='mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col gap-y-6 justify-start'>
          <PageHeadline text='A Big Hello' />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
            <div className='col-span-1 space-y-8'>
              <Popup>
                <Image
                  src={Profile}
                  alt='Adrian Beston'
                  className='rounded-lg shadow-xl'
                />
              </Popup>
              <div className='flex p-4 border-2 border-zinc-600 rounded-lg'>
                <div className='flex flex-col gap-y-2'>
                  <h2 className='text-2xl font-black text-bigpix'>TL;DR</h2>
                  <p className='text-lg font-light tracking-wide'>I make pretty pictures and websites that allow you to do what you do best.</p>
                </div>
              </div>
              <div className='my-6 flex flex-col items-center gap-y-12'>
                <InFromLeft>
                  <Image
                    src={Currys}
                    alt='Currys'
                    height={36}
                    className='opacity-60'
                  />
                </InFromLeft>
                <InFromLeft delay={0.5}>
                  <Image
                    src={PCWorld}
                    alt='PC World'
                    height={32}
                    className='opacity-60'
                  />
                </InFromLeft>
                <InFromLeft delay={1}>
                  <Image
                    src={AIS}
                    alt='AIS'
                    height={32}
                    className='opacity-60'
                  />
                </InFromLeft>
                <InFromLeft delay={1.5}>
                  <Image
                    src={Calibre}
                    alt='Calibre Audio'
                    height={48}
                    className='opacity-60'
                  />
                </InFromLeft>
              </div>             
            </div>
            <div className='mt-12 lg:mt-0 col-span-2 prose prose-lg prose-bpwhite font-serif font-light'>
              <p>Hello 👋, I&apos;m Adrian Beston &mdash; the founder and Creative Director at Big Pixel, living under the vast skies of North Norfolk. I&apos;ve been a designer and web developer for more years than I care to admit, starting my career at PC World as an artworker before eventually leading their brand team. Since then, I&apos;ve worked with various SMEs, charities, and sole traders, building brand identities, websites, brochures, and more.</p>
              <p>I also founded the Milton Keynes Design Forum, which introduced me to a wide range of people from various creative industries and allowed me to work closely with the <a href="https://www.designcouncil.org.uk/">Design Council</a> (including an awkward encounter with Vivienne Westwood).</p>
              <p>These days, I specialise in building robust web apps using the latest technologies, with a particular focus on <a href="https://nextjs.org/">Next.js</a> and React more broadly. As a Full-Stack Developer, I also handle the back-end systems that power the polished front ends, working fluently with PostgreSQL, MongoDB, and Fauna, as well as OAuth2 systems. I&apos;m experienced with a variety of content management systems, including WordPress, Storyblok, and my personal favourite, <a href="https://www.sanity.io/">Sanity</a>.</p>
              <p>Whatever the project, I take great pride in ensuring that the work I deliver is not only pixel (or point) perfect but also reflects the client&apos;s vision to its fullest. I achieve this by involving clients heavily during the initial scoping phase and keeping them informed throughout the project.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
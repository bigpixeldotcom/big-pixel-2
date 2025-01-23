import Image from 'next/image';
import PageHeadline from '@/components/other/page-headline';
import DigitalQuote from '@/components/digital/quote';
import {
  Popup,
  InFromLeft,
  InFromRight
} from '@/components/animation';

export default function DigitalPage() {

  return (
    <div className='flex flex-col'>
      <div className='mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col gap-y-6 justify-start'>
          <PageHeadline text='Big in Digital' />
          <Popup>
            <Image
              src='/images/digital/mcnag_macbook.jpg'
              alt='An image of a Macbook with the MCNAG website on the screen'
              width={1456}
              height={816}
              layout='responsive'
              className='rounded-lg'
            />
          </Popup>
          <div className='prose prose-lg prose-bpwhite max-w-none font-serif font-light'>
            <p>The digital world has become our primary means of communication. Whether through email, the internet, or social media, data and pixels have permeated every sphere of our lives. This profound impact has ushered in the Fourth Industrial Revolution—or, to give it a more 21st-century twist, 4IR.</p>
            <p>Whatever you&apos;re doing—selling, creating, building, or collaborating—it&apos;s almost certain you&apos;ll need a website to go with it. And with the lightning-fast pace of technological development, that website will need to be fast, accessible, easy to navigate, and impactful.</p>
          </div>
          <InFromLeft delay={0.5}>
            <Image
              src='/images/digital/mycalibre_phone_laptop.jpg'
              alt='A laptop and a mobile showing a responsive website design'
              width={1456}
              height={816}
              layout='responsive'
              className='rounded-lg'
            />
          </InFromLeft>   
          <div className='prose prose-lg prose-bpwhite max-w-none font-serif font-light'>
            <p>At Big Pixel, I work closely with clients to deliver websites built on the latest web technologies. These sites look just as good on mobile as they do on large screens, while also reflecting the client&apos;s unique voice. This involves distilling the essence of the brand and translating it into pixels on the screen—through a thoughtful blend of colours, typography, and animations.</p>
            <p>Ease of use is another key priority. I aim to ensure that anyone visiting your site can find exactly the information they need in a way that feels natural and intuitive. I can also implement features that personalise the user experience, allowing the site to respond to each user&apos;s needs. All the while, I keep a sharp focus on that all-important SEO score and search ranking.</p>
          </div>
          <InFromRight delay={0.5}>
            <DigitalQuote />
          </InFromRight>
        </div>
      </div>
    </div>
  )
}
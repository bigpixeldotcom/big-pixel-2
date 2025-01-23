import Image from 'next/image';
import PageHeadline from '@/components/other/page-headline';
import PrintQuote from '@/components/print/quote';
import {
  Popup,
  InFromLeft,
  InFromRight
} from '@/components/animation';

export default function PrintPage() {

  return (
    <div className='flex flex-col'>
      <div className='mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col gap-y-6 justify-start'>
          <PageHeadline text='Big in Print' />
          <Popup>
            <Image
              src='/images/print/printing_press.jpg'
              alt='An image of an old printing press'
              width={1456}
              height={816}
              layout='responsive'
              className='rounded-lg'
            />
          </Popup>
          <div className='prose prose-lg prose-bpwhite max-w-none font-serif font-light'>
            <p>Print, as a form of communication, has been with us for almost 600 years, and it isn&apos;t going anywhere any time soon. It is used to disseminate information, tell stories, and create art. Even in this digital age, it remains a powerful way to convey your message and make a lasting impression.</p>
            <p>At Big Pixel, I approach print with the same love, care, and attention that I dedicate to digital. There is a world of difference between true graphic design and simply placing some images on a page and sending it to the printers. In print, we talk about terms like orphans and widows, kerning, leading, and being above or below the fold. There&apos;s 4-colour printing, spot colours, digital printing, litho, and screen printing &mdash; and each of these techniques impacts the final result in its own unique way.</p>
          </div>
          <InFromLeft delay={0.5}>
            <Image
              src='/images/print/dickens.jpg'
              alt='The Dickens Fellowship stationery design'
              width={1456}
              height={816}
              layout='responsive'
              className='rounded-lg'
            />
          </InFromLeft>   
          <div className='prose prose-lg prose-bpwhite max-w-none font-serif font-light'>
            <p>Then there&apos;s the paper medium itself: its weight, weave, and sizes. You also have to consider margins, bleed, and print tolerances. All of it is beautiful.</p>
            <p>All of this is taken into account when designing the business card you hand out or the brochure you provide. Print can leave a lasting impression on people and still holds the power to inspire, provoke, and persuade. I strive to ensure that the very essence of your brand is captured on the page: that the message is clear and easy to read, and that the colours on the paper match those on the screen. Whether it&apos;s a poster, an annual report, or a business card, the power to persuade is right there, in C, M, Y, and K.</p>
          </div>
          <InFromRight delay={0.5}>
            <PrintQuote />
          </InFromRight>
        </div>
      </div>
    </div>
  )
}
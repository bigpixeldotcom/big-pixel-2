import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import ClickDown from '@/components/other/click-down';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center justify-center h-[360px] lg:h-screen -mt-16'>
        <div className='mx-auto w-full h-3/4'>
          <Spline
            scene='https://prod.spline.design/uFAYgKO-o3vw3IjY/scene.splinecode'
          />
        </div>
        <ClickDown />
      </div>
      <div id='info' className='py-12 flex flex-col items-center justify-center gap-16 min-h-screen w-full bg-bigpix'>
        <div className='mt-6 lg:mt-12 flex items-center justify-center gap-x-12 max-w-7xl mx-6 md:mx-12 lg:mx-auto'>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
            <div className='w-full lg:w-2/3'>
              <h1 className='text-6xl md:text-8xl lg:text-9xl font-sans font-black text-gray-950'>Big ideas deserve a big impact.</h1>
            </div>
            <div className='w-full lg:w-1/3'>
              <Image
                src='/images/wireframe1.png'
                alt='A sketch of a website wireframe'
                height={720}
                width={680}
              />
            </div>
          </div>
        </div>
        <div className='max-w-7xl mx-6 md:mx-12 lg:mx-auto prose prose-bpblack xl:prose-2xl font-serif font-normal'>
          <p>You have come up with the most amazing idea and you have poured your heart and soul into making it the best it can be. Now it needs a website that can show all that talent and promise to the rest of the world.</p>
          <p>That&apos;s where I come in. At Big Pixel, I don&apos;t just want to take another default website and slap a logo on it. Instead, I want to take all that passion and promise that your business contains and show it in every pixel. This attention to detail also means you can dream big&hellip;</p>
          <ul>
            <li>Need a secure portal that customers can log into, and check their orders? <strong>No problem</strong>.</li>
            <li>Want a blog that can be updated with new posts and images? <strong>Easy</strong>.</li>
            <li>How about a contact form that can send emails to your inbox? <strong>Done</strong>.</li>
            <li>What about an eCommerce platform for all those products? <strong>Can do</strong>.</li>
            <li>Or a secure dashboard app that allows you to monitor all your company&apos;s data? <strong>Definitely</strong>.</li>
          </ul>
          <p>I also build sites using the latest technologies &mdash; from React to PostgreSQL &mdash; making sure your site isn&apos;t just beautiful, but lightning fast and SEO optimised. Whether it is a single web page or a fully-fledged, multilingual website hosting millions of users, the site gets the same care and attention to detail.</p>
        </div>
      </div>
      <div id='brand' className='py-12 flex flex-col items-center justify-center gap-16 min-h-screen w-full bg-gray-300'>
        <div className='mt-6 lg:mt-12 flex items-center justify-center gap-x-12 max-w-7xl mx-6 md:mx-12 lg:mx-auto'>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
            <div className='w-full lg:w-2/3'>
              <h1 className='text-6xl md:text-8xl lg:text-9xl font-sans font-black text-gray-950'>Can you make the logo bigger?</h1>
            </div>
            <div className='mt-6 w-full lg:w-1/3'>
              <Image
                src='/images/yellow.png'
                alt='A sketch of a website wireframe'
                height={720}
                width={680}
                sizes='(min-width: 720px) 50vw, 100vw'
                className='shadow-2xl rounded-xl rotate-6'
              />
            </div>
          </div>
        </div>
        <div className='max-w-7xl mx-6 md:mx-12 lg:mx-auto prose prose-bpblack xl:prose-2xl font-serif font-normal'>
          <p>Designing a brand is more than just a cool looking logo (though they do help).</p>
          <p>Done properly, branding should represent the essence of the company, person, or product. It should help provide a narrative that everyone understands. From gentle, soothing colour palettes to brash, bold, and aggressive shapes; all of these things can reinforce your message.</p>
          <p>Having spent many years designing brands for charities, international retail companies, and small startups; I have a wealth of experience in the field of brand identity. But not just the brand…</p>
          <ul>
            <li><strong>Colour palettes</strong> &mdash; both online and offline, so you don&apos;t lose that important aesthetic moving from screen to paper</li>
            <li><strong>Brand guidelines</strong> &mdash; so other suppliers know what they can and cannot do with your brand. Allowing for a consistent message wherever you appear</li>
            <li><strong>Stationery</strong> &mdash; who doesn&apos;t love a well-made and thought through business card or letterhead. Those first impressions can count more than you think.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

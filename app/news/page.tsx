import PageHeadline from '@/components/other/page-headline';

export default function NewsPage() {

  return (
    <div className='flex flex-col'>
      <div className='mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col gap-y-6 justify-start'>
          <PageHeadline text='Big News' />
          <h2 className='text-3xl font-serif font-light'>Coming soon...</h2>
        </div>
      </div>
    </div>
  )
}
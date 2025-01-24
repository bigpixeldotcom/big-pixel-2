import PageHeadline from '@/components/other/page-headline';
import { currentUser } from '@clerk/nextjs/server';
import { SignOutButton } from '@clerk/nextjs'
import { DateTime } from 'luxon';

export default async function ProfilePage() {

  const user = await currentUser();

  function parseDate(date: number | null | undefined) {
    if (!date) return 'today';
    return DateTime.fromMillis(date).toLocaleString(DateTime.DATETIME_FULL);
  }

  return (
    <div className='flex flex-col'>
      <div className='mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col gap-y-6 justify-start'>
          <PageHeadline text={'Hello, ' + user?.firstName || 'Hello'} />
          <p className='font-serif font-light'>
            You last visited at {parseDate(user?.lastSignInAt)}.
          </p>
          <SignOutButton />
        </div>
      </div>
    </div>
  )
}
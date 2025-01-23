'use client';

import {
  useEffect,
  useCallback
} from 'react';
import { useRouter } from 'next/navigation';
import {
  useStytch,
  useStytchUser,
  useStytchSession
} from '@stytch/nextjs';
import Profile from '@/components/profile/profile';
import PageHeadline from '@/components/other/page-headline';

export default function ProfilePage() {
  
  const stytch = useStytch();
  const { user, isInitialized } = useStytchUser();
  const { session } = useStytchSession();
  const router = useRouter();

  // If the Stytch SDK no longer has a User then redirect to login; for example after logging out.
  useEffect(() => {
    if (isInitialized && !user) {
      router.replace('/');
    }
  }, [user, isInitialized, router]);

  const logout = useCallback(() => {
    stytch.session.revoke();
  }, [stytch]);

  return (
    <div className='flex flex-col'>
      <div className='mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col gap-y-6 justify-start'>
          <PageHeadline text={user?.name.first_name || 'Hello'} />
          <p className='font-serif font-light'>
            You last visited at {session?.last_accessed_at || 'an unknown time'}.
          </p>
          <button
            onClick={logout}
            className='bg-bigpix hover:bg-bigpix/80 text-white font-semibold rounded-md py-2 px-4 shadow-md focus:outline-none focus-visible:ring focus-visible:ring-bigpix focus-visible:ring-opacity-50 transition-colors ease-in-out duration-200'
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}
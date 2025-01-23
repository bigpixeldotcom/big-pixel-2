'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { magicLinks } from '@/lib/clients/stytch';
import clsx from '@/lib/utils/clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@awesome.me/kit-89a9106b13/icons/duotone/solid';

const initialState = { status: '', message: '' };

function SubmitButton() {
  
  const status = useFormStatus();

  return (
    <button
      type='submit'
      aria-disabled={status.pending}
      disabled={status.pending}
      className={clsx(
        'col-span-full  text-black font-semibold rounded-md py-2 px-4 shadow-md focus:outline-none focus-visible:ring focus-visible:ring-bigpix focus-visible:ring-opacity-50 transition-colors ease-in-out duration-200',
        status.pending ? 'bg-gray-500 disabled:bg-gray-400' : 'bg-bigpix hover:bg-bigpix/80'
      )}
    >
      {status.pending ? (
        <FontAwesomeIcon icon={faAtom} fixedWidth className='text-2xl animate-spin' />
      ) : (
        'Send Link'
      )}
    </button>
  );
}

export default function LoginPage() {

  const [state, formAction, pending] = useActionState(
    (state: { status: string, message: string }, payload: { email: string }) => magicLinks(state, payload),
    initialState
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
  
    formAction({ email });
  };

  return (
    <div className='h-[720px] flex flex-col items-center justify-center space-y-4'>
      <div className='block border border-gray-800 rounded-md p-12'>
        <form
          onSubmit={handleSubmit}
          className='min-w-96 grid grid-cols-1 gap-4'
        >
          <label htmlFor="email" className="block text-sm/6 font-medium text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='hello@big-pixel.com'
            autoFocus
            className="block w-full rounded-md bg-black px-3 py-1.5 text-base font-normal text-white outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-bigpix/50"
          />
          <SubmitButton />
        </form>
      </div>
    </div>
  )
}
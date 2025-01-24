import { SignIn } from '@clerk/nextjs';

export default function PrintPage() {

  return (
    <div className='flex flex-col items-center justify-center h-[720px] space-y-4'> 
      <SignIn />
    </div>
  )
}
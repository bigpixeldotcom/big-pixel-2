'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from '@/lib/utils/clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDown } from '@awesome.me/kit-89a9106b13/icons/classic/regular';

export default function ClickDown() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  }, []);

  return (
    <div className={clsx(
      'flex-shrink pb-8 lg:pb-16',
      visible ? 'opacity-100' : 'opacity-0'
    )}>
      <Link href='#info'>
        <FontAwesomeIcon
          icon={faDown}
          className='text-6xl text-bigpix animate-bounce'
        />
      </Link>
    </div>
  )
}
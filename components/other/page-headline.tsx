'use client';

import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default function PageHeadline({ text }: { text: string }) {
  
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typed = new Typed(element.current!, {
      stringsElement: '#typed-strings',
      autoInsertCss: true,
      cursorChar: '___',
      typeSpeed: 50,
      loop: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id='typed-strings' style={{ display: 'none' }}>
        <h1>{text}</h1>
      </div>
      <span
        ref={element}
        className='text-7xl font-special text-bigpix'
      >
      </span>
    </>
  )
}
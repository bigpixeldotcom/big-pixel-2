'use client';

import { useHoveredLink } from '@/lib/contexts/hovered-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmile,
  faGearCode,
  faMessage,
  faPrint,
  faNewspaper
} from '@awesome.me/kit-89a9106b13/icons/classic/regular';

export default function SmallCube() {

  const { face } = useHoveredLink();
  
  return (
    <div className='small-scene'>
      <div className={`small-cube show-` + face}>
        <div className='small-cube__face small-cube__face--front' />
        <div className='small-cube__face small-cube__face--back'>
          <FontAwesomeIcon icon={faFaceSmile} fixedWidth />
        </div>
        <div className='small-cube__face small-cube__face--right'>
          <FontAwesomeIcon icon={faGearCode} fixedWidth />
        </div>
        <div className='small-cube__face small-cube__face--left'>
          <FontAwesomeIcon icon={faMessage} fixedWidth />
        </div>
        <div className='small-cube__face small-cube__face--top'>
          <FontAwesomeIcon icon={faPrint} fixedWidth />
        </div>
        <div className='small-cube__face small-cube__face--bottom'>
          <FontAwesomeIcon icon={faNewspaper} fixedWidth />
        </div>
      </div>
    </div>
  );
}
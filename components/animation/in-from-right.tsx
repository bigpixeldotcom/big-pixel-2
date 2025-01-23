import * as motion from 'motion/react-client';
import type { Variants } from 'motion/react';

export default function InFromRight({
  delay,
  children
}: {
  delay?: number,
  children: React.ReactNode
}) {

  const cardVariants: Variants = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      variants={cardVariants}
    >
      {children}
    </motion.div>
  )
}
import * as motion from 'motion/react-client';

export default function Popup({
  delay,
  children
}: {
  delay?: number,
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: delay,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    }}
    >
      {children}
    </motion.div>
  )
}
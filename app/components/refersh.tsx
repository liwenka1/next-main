'use client'

import { motion } from 'framer-motion'

const Refersh = () => {
  return (
    <motion.div
      className="absolute z-10 aspect-square h-full w-full bg-imagehero bg-sizehero bg-positionhero bg-no-repeat"
      animate={{
        scale: [4, 4, 1.5],
        rotate: [148, 148, 0],
        opacity: [0, 1, 1],
        translateX: ['-100%', '0%', '0%']
      }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
        times: [0, 0.3, 1],
        repeatDelay: 1
      }}
    />
  )
}

export default Refersh

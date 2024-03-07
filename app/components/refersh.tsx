'use client'

import { motion } from 'framer-motion'

const Refersh = () => {
  return (
    <motion.div
      className="bg-imagehero bg-sizehero bg-positionhero absolute -z-10 h-20 w-20 bg-no-repeat"
      animate={{
        scale: [4, 4, 1],
        rotate: [148, 148, 0],
        opacity: [0, 1, 1],
        translateX: ['-100%', '0%', '0%'],
        translateY: ['-50%', '-50%', '-50%']
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.33, 1],
        repeatDelay: 1
      }}
    />
  )
}

export default Refersh

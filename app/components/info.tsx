'use client'

import { motion } from 'framer-motion'

const Info = () => {
  return (
    <div className="flex flex-row">
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeatDelay: 1
        }}
      >
        头像
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeatDelay: 1
        }}
      >
        hello world
      </motion.div>
    </div>
  )
}

export default Info

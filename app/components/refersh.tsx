'use client'

import { motion } from 'framer-motion'

const Refersh = () => {
  return (
    <motion.div
      className="absolute -z-10 h-20 w-20 bg-red-300"
      animate={{
        scale: [4, 4, 1],
        rotate: [148, 148, 0],
        // borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        opacity: [0, 1, 1],
        // transform:[],
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
// 0% {
// 	opacity: 0;
// 	transform: translateY(-50%) translateX(-100%) scale(4) rotate(148deg);
// }

// 33.33% {
// 	opacity: 1;
// 	transform: translateY(-50%) translateX(0) scale(4) rotate(148deg);
// }

// 100% {
// 	opacity: 1;
// 	transform: translateY(-50%);
// }

export default Refersh

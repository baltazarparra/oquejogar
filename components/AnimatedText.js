import React from 'react'
import { motion } from 'framer-motion'

const AnimatedTextWord = ({ text }) => {
  const words = text.split('')

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.009, delayChildren: 0.009 * i }
    })
  }

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 100,
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 40
      }
    },
    hidden: {
      opacity: 0,
      x: 0,
      transition: {
        type: 'spring',
        damping: 0,
        stiffness: 0
      }
    }
  }

  return (
    <motion.div
      style={{
        display: 'block',
        maxWidth: '360px',
        marginBottom: '30px',
        fontSize: '18px',
        padding: '10px'
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: '0' }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedTextWord

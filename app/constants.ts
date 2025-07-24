export const backgroundAnimation = {
  hidden: {
    background: 'transparent',
    opacity: 0,
    y: 40,
  },
  visible: {
    background: '#3f4a5c',
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export const animation = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const heroAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const headingVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    transition: {
      duration: 0.7,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.7,
      type: 'easeOut',
    },
  },
  transition: {
    layout: {
      duration: 0.7,
      type: 'easeOut',
    },
  },
}

export const newEasingDefaultVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 0.7,
      type: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -44,
    transition: {
      duration: 0.35,
      type: 'easeOut',
    },
  },
}

export const newEasingPopupVariants = {
  hidden: {
    opacity: 0,
    y: 11,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
      type: 'easeIn',
    },
  },
  exit: {
    opacity: 0,
    y: 22,
    scale: 0.98,
    transition: {
      duration: 0.25,
    },
  },
}

export const easingDefaultVariants = {
  hidden: {
    opacity: 0,
    y: -22,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.35,
      duration: 0.7,
      type: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -22,
    transition: {
      duration: 0.35,
    },
  },
  transition: {
    layout: {
      duration: 0.35,
    },
  },
}

export const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.7,
      type: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -22,
    transition: {
      duration: 0.35,
    },
  },
}

export const overlay = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      type: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.35,
      type: 'easeOut',
    },
  },
}

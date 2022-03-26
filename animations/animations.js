export const headingVariants = {
    hidden: {
        opacity: 0, 
        y: 22, 
        transition: {
            duration: .7
        }
    }, 
    visible: {
        opacity: 1, 
        y: 0,
        transition: {
            delay: .3, 
            duration: .7, 
            type: 'easeOut'
        }
    }, 
    transition: {
        layout: {
            duration: .35, 
            type: 'easeOut'
        }
    }
}

export const newEasingDefaultVariants = {
    hidden: {
        opacity: 0, 
        y: 22, 
        scale: 0.98
    }, 
    visible: {
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            delay: .6, 
            duration: .7, 
            type: 'easeOut'
        }
    },
    exit: {
        opacity: 0, 
        y: -44, 
        transition: {
            duration: .35, 
            type: 'easeOut'
        }
    }
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
            delay: .1, 
            duration: .4, 
            type: 'easeIn'
        }
    }, 
    exit: {
        opacity: 0, 
        y: 22, 
        scale: 0.98,
        transition: {
            duration: .25, 
        }
    }
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
            delay: .35, 
            duration: .7, 
            type: 'easeOut'
        }
    }, 
    exit: {
        opacity: 0, 
        y: -22, 
        transition: {
            duration: .35
        }
    }, 
    transition: {
        layout: {
            duration: .3
        }
    }
}

export const fadeInVariants = {
    hidden: {
        opacity: 0
    }, 
    visible: {
        opacity: 1, 
        transition: {
            delay: .7, 
            duration: .7, 
            type: 'easeOut'
        }
    }, 
    exit: {
        opacity: 0, 
        y: -22, 
        transition: {
            duration: .35, 
        }
    }
}

export const overlay = {
    hidden: {
        opacity: 0
    }, 
    visible: {
        opacity: 1, 
        transition: {
            duration: .7, 
            type: 'easeOut'
        }
    }, 
    exit: {
        opacity: 0, 
        transition: {
            duration: .35, 
            type: 'easeOut'
        }
    }
}
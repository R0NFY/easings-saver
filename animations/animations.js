export const headingVariants = {
    hidden: {
        opacity: 0, 
        y: 22
    }, 
    visible: {
        opacity: 1, 
        y: 0,
        transition: {
            delay: .3, 
            duration: .7, 
            type: 'easeOut'
        }
    }
}

export const newEasingVariants = {
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
            delay: .5, 
            duration: .7, 
            type: 'easeOut'
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
    }
}
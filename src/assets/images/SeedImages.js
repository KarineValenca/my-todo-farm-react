const SeedsImages = (seed) => {
    switch (seed) {
        case 'rice':
            let image = {
                    sproot: require('./rice1.png'),
                    young: require('./rice2.png'),
                    madure: require('./rice3.png')
                }
            return image
        case 'wheat':
            image = {
                sproot: require('./wheat1.png'),
                young: require('./wheat2.png'),
                madure: require('./wheat3.png')
            }
            return image
        case 'rose':
            image = {
                    sproot: require('./rose1.png'),
                    young: require('./rose2.png'),
                    madure: require('./rose3.png')
                }
            return image
        default:
            image = {
                sproot: require('./rose1.png')
            }
            return image
    }
}

export default SeedsImages
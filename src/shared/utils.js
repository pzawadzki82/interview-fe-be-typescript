const getRandomInt = (min, max) => {
    const minInt = Math.ceil(min)
    const maxInt = Math.floor(max)
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (maxInt - minInt)) + minInt
}

module.exports.getRandomInt = getRandomInt

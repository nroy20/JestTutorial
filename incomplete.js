function randomMath(num) {
    if (num < 100) {
        return num * 5
    } else if (num >= 100 && num <= 200) {
        return num * 2
    } else {
        return num
    }
}

module.exports = randomMath

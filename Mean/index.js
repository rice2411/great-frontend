function mean(array) {
    if (!array.length) {
        return NaN
    }
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length;
}
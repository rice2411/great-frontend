function makeCounter(initialValue = 0) {
    let count = initialValue - 1
    return () => {
        count += 1
        return count
    }
}
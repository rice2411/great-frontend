function cycle(...values) {
    let index = 0
    return () => {
        const currentValue = values[index];
        index = (index + 1) % values.length;
        return currentValue
    }
}
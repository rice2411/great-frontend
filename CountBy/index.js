/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */
function countBy(array, iteratee) {
    let result = {};

    for (const value of array) {
        const current = iteratee(value);
        result[`${current}`] = result[`${current}`] ? result[`${current}`] + 1 : 1
    }
    return result
}

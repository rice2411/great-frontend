/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
    let timeoutID = null;
    return function (...args) {
        const context = this;
        clearTimeout(timeoutID);

        timeoutID = setTimeout(function () {
            timeoutID = null;
            func.apply(context, args);
        }, wait)
    }
}
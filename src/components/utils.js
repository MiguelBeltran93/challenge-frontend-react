
/**
 *
 * @param str
 * @returns {string|*}
 */
export const formatCategories = (str) => {
    if (!str) {
        return '';
    }
    return str.join('  >  ');
};

/**
 *
 * @param value
 * @returns {string}
 */
export const formatToMoney = (value) => {
    let result = value;
    if (!value) {
        result = 0;
    }
    return parseFloat(result)
        .toFixed(0)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

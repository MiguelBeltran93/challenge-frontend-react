/**
 *
 * @type {string}
 */
const PATH_PRODUCTS = 'http://localhost:3001/api/items';

/**
 *
 * @param endpoint
 * @returns {`${string}${string}`}
 */
const appendProductsPath = (endpoint) => `${PATH_PRODUCTS}${endpoint}`;

export default appendProductsPath;

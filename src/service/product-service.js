import * as http from './http/wrapper';
import appendProductsPath from "./http/utils";

const PATH_PRODUCTS_LIST = appendProductsPath('');

export const getProductListService = (keyWord) =>
    http.get(`${PATH_PRODUCTS_LIST}?q=${keyWord}`);

export const getProductDetailService = (productId) =>
    http.get(`${PATH_PRODUCTS_LIST}/${productId}`);

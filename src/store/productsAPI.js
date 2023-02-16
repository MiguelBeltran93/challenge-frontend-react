import {getProductDetailService, getProductListService} from "../service/product-service";


export function fetchProductsResume(keyWord) {
    return new Promise((resolve) => {
        getProductListService(keyWord).then(response => {
                resolve({data: response})
            })
        }
    );
}
export function fetchProductDetail(item) {
    return new Promise((resolve) => {
        getProductDetailService(item).then(response => {
                resolve({data: response})
            })
        }
    );
}

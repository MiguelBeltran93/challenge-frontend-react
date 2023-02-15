import {getProductListService} from "../service/product-service";


export function fetchCount(keyWord) {
    return new Promise((resolve) => {
        getProductListService(keyWord).then(response => {
                resolve({data: response})
            })
        }
    );
}

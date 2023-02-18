import {render, screen} from '@testing-library/react';
import DetailProductComponent from "../../../components/sections/detail-product/detail-product.component";
import {renderWithProviders} from "../../test-utils";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import {createMemoryHistory} from "history";
import ProductDetailComponent from "../../../components/commons/product-detail/product-detail.component";
import ResumeProductComponent from "../../../components/sections/resume-products/resume-product.component";

describe('Meli challenge test detail component', () => {

    const initialProduct = {
        status: 'idle', value: {
            "author": {
                "name": "Miguel",
                "lastName": "Beltran"
            },
            "categories": [
                "Celulares y Teléfonos",
                "Celulares y Smartphones"
            ],
            "items": [
                {
                    "id": "MLA1297608747",
                    "title": "Motorola Moto E E22i 2gb 32gb Blanco",
                    "price": {
                        "currency": "$",
                        "amount": "40999",
                        "decimals": ""
                    },
                    "picture": "http://http2.mlstatic.com/D_641351-MLA53100483202_122022-I.jpg",
                    "condition": "new",
                    "free_shipping": true
                },
                {
                    "id": "MLA1300924328",
                    "title": " Moto G82 5g 128 Gb  Negro 6 Gb Ram",
                    "price": {
                        "currency": "$",
                        "amount": "104500",
                        "decimals": ""
                    },
                    "picture": "http://http2.mlstatic.com/D_772158-MLA51752202121_092022-I.jpg",
                    "condition": "new",
                    "free_shipping": true
                },
                {
                    "id": "MLA1299634542",
                    "title": " Moto G41 128 Gb  Negro Ónix 4 Gb Ram",
                    "price": {
                        "currency": "$",
                        "amount": "66250",
                        "decimals": ""
                    },
                    "picture": "http://http2.mlstatic.com/D_711274-MLA49535290493_032022-I.jpg",
                    "condition": "new",
                    "free_shipping": true
                },
                {
                    "id": "MLA1142471087",
                    "title": " Moto G22 128 Gb  Iceberg Blue 4 Gb Ram",
                    "price": {
                        "currency": "$",
                        "amount": "64999",
                        "decimals": ""
                    },
                    "picture": "http://http2.mlstatic.com/D_724765-MLA50262139770_062022-I.jpg",
                    "condition": "new",
                    "free_shipping": true
                }
            ]
        }, detail: {}
    }

    test('renders App and resume components ', () => {
        renderWithProviders(
            <BrowserRouter>
                <ResumeProductComponent/>
            </BrowserRouter>
            , {
                preloadedState: {
                    product: initialProduct
                }
            })
        expect(screen.getByTestId('resume-component-test')).toBeInTheDocument()
    });

});

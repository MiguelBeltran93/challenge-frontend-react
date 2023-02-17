import {render, screen} from '@testing-library/react';
import DetailProductComponent from "../../../components/sections/detail-product/detail-product.component";
import {renderWithProviders} from "../../test-utils";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import {createMemoryHistory} from "history";

describe('Meli challenge test detail component', () => {

    const initialProduct = {
        status: 'idle', value: '', detail: {
            "author": {
                "name": "Miguel",
                "lastName": "Beltran"
            },
            "item": {
                "id": "MLA1300492340",
                "title": " Moto E20 32 Gb  Gris Grafito 2 Gb Ram",
                "price": {
                    "currency": "$",
                    "amount": "44500",
                    "decimals": ""
                },
                "picture": "https://http2.mlstatic.com/D_832761-MLA48048712904_102021-O.jpg",
                "condition": "new",
                "free_shipping": false,
                "sold_quantity": 5,
                "description": "Doble cámara y más detalles\nSus 2 cámaras traseras de 13 Mpx/2 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo.\n\nAdemás, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.\n\nMás para ver\nCon su pantalla IPS de 6.5\", disfrutá de colores intensos y mayor nitidez en todos tus contenidos.\n\nTodo lo que necesitás\nSu memoria RAM de 2 GB es justo lo que necesitás para utilizar las funciones más importantes como llamar, enviar mensajes, navegar y ejecutar aplicaciones de uso frecuente como redes sociales o multimedia.\n\nDesbloqueo facial y dactilar\nMáxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido.\n\nBatería de duración superior\n¡Desenchufate! Con la súper batería de 4000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.\n\nEl espacio que necesitás\nCon su memoria interna de 32 GB descargá tus aplicaciones favoritas y guardá todas las fotos y videos que quieras."
            }
        }
    }
    let history = '';
    history = createMemoryHistory();

    test('renders App and home components ', () => {
        renderWithProviders(
            <BrowserRouter>
                <DetailProductComponent/>
                </BrowserRouter>
        , {
            preloadedState: {
                product: initialProduct
            }
        })
        expect(screen.getByTestId('detail-component-test')).toBeInTheDocument()
    });

});

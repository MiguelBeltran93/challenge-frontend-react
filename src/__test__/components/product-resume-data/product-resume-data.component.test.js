import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {renderWithProviders} from "../../test-utils";
import ProductResumeDataComponent
    from "../../../components/commons/product-resume/product-resume-data/product-resume-data.component";

describe('Meli challenge test product-resume-component', () => {


    test('renders product-resume-component components ', () => {
        renderWithProviders(
            <BrowserRouter>
                <ProductResumeDataComponent action={()=>{}}/>
            </BrowserRouter>
        )
        fireEvent.click(screen.getByTestId('product-resume-picture-component-test'))
        fireEvent.click(screen.getByTestId('product-resume-title-component-test'))
        expect(screen.getByTestId('product-resume-component-test')).toBeInTheDocument()
    });

});

import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import {renderWithProviders} from "../../../test-utils";
import BoxSearchComponent from "../../../../components/commons/box-search/box-search.component";

describe('Meli challenge test box-search ', () => {


    test('renders box-search components ', () => {
        renderWithProviders(
            <BrowserRouter>
                <BoxSearchComponent/>
            </BrowserRouter>
            )
        fireEvent.change(screen.getByTestId('search-bar-input-component-test'), {target: {value: 'algo'}})
        fireEvent.keyDown(screen.getByTestId('search-bar-input-component-test'), {key: 'Enter', code: 'Enter', charCode: 13})
        fireEvent.click(screen.getByTestId('search-bar-button-component-test'))
        fireEvent.click(screen.getByTestId('logo-box-search-component-test'))
        expect(screen.getByTestId('box-search-component-test')).toBeInTheDocument()
    });

});

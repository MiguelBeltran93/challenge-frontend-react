import {fireEvent, render, screen} from '@testing-library/react';
import {renderWithProviders} from "../../test-utils";
import {BrowserRouter} from 'react-router-dom';
import SearchBarComponent from "../../../components/commons/search-bar.component";

describe('Meli challenge test search bar', () => {


    test('renders search bar ', () => {
        renderWithProviders(
            <BrowserRouter>
                <SearchBarComponent/>
            </BrowserRouter>
        )
        expect(screen.getByTestId('search-bar-component-test')).toBeInTheDocument()
    });

});

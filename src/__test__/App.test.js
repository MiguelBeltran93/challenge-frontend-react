import {render, screen} from '@testing-library/react';
import App from '../App';
import {renderWithProviders} from "./test-utils";

describe('Meli challenge test', () => {
    test('renders App and home components ', () => {
        renderWithProviders(<App/>)
        expect(screen.getByTestId('app-test')).toBeInTheDocument()
    });

});

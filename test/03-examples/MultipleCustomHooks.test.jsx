import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null, 
            isLoading: true, 
            hasError: null
        });

        render( <MultipleCustomHooks/> );

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));
        

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect( nextButton.disabled ).toBeTruthy();

        // screen.debug();
        
    });

    test('Debe mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Andres', quote: 'Hola' }], 
            isLoading: false, 
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        
        expect( screen.getByText('Hola' ) ).toBeTruthy();
        expect( screen.getByText('Andres' ) ).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect( nextButton.disabled ).toBeFalsy();
        
    });

    test('Debe llamar la función de incrementar', () => {      
        
        useFetch.mockReturnValue({
            data: [{ author: 'Andres', quote: 'Hola' }], 
            isLoading: false, 
            hasError: null
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled();
        
    });
});
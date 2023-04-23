import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => {

    test('Debe retornar los valores por defecto', () => { 
        
        const { result } = renderHook ( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe(0);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    })

    test('Debe generar el counter con el valor de 100', () => {
        
        const { result } = renderHook ( () => useCounter(100) );
        // const { counter } = result.current;
        expect( result.current.counter ).toBe(100); 
    })

    test('Debe incrementar el contador', () => { 
        
        const { result } = renderHook ( () => useCounter(100) );
        const { increment } = result.current;


        act( () => {
            increment(1);
            increment(2);
        });

        expect( result.current.counter ).toBe(103);
    })

    test('Debe decrementar el contador', () => { 
        
        const { result } = renderHook ( () => useCounter(100) );
        const { decrement } = result.current;


        act( () => {
            decrement(1);
            decrement(2);
        });

        expect( result.current.counter ).toBe(97);
    })

    test('Debe reiniciar el contador', () => { 
        
        const { result } = renderHook ( () => useCounter() );
        const { counter, reset, increment } = result.current;

        act( () => {
            increment(1);
            increment(1);
            increment(1);
            reset();
        });

        console.log(result.current.counter)

        expect( result.current.counter ).toBe(0);
    })
});

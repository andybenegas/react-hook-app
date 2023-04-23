import { toDoReducer } from '../../src/08-useReducer/toDoReducer';

describe('Pruebas en toDoReducer', () => {
    
    const initialState = [{
        id: 1,
        description: 'Demo TODO',
        done: false,
    }];

    test('Debe regresar el estado inicial', () => { 
        
        const newState = toDoReducer( initialState, {} );
        expect( newState ).toBe( initialState );

    });

    test('Debe agregar un TODO', () => {

        const action = {
            type: '[TODO] Add ToDo',
            payload: {
                id: 3,
                description: 'Demo3 TODO',
                done: false
            }
        };

        const newState = toDoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload);
    });

    test('Debe eliminar un TODO', () => {

        const action = {
            type: '[TODO] Remove ToDo',
            payload: 1
        };
        
        const newState = toDoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );
        
    });

    test('Debe realizar el toggle del TOOD', () => {

        const action = {
            type: '[TODO] Toggle ToDo',
            payload: 1
        };

        const newState = toDoReducer( initialState, action );
        expect ( newState[0].done ).toBe( true );

        const newState2 = toDoReducer( newState, action );
        expect ( newState2[0].done ).toBe( false );
    });

});
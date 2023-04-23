import { render, screen } from '@testing-library/react';
import { ToDoApp } from '../../src/08-useReducer/ToDoApp';
import { useToDo } from '../../src/hooks/useToDo';

jest.mock('../../src/hooks/useToDo');

describe('Pruebas en <ToDoApp/>', () => {

    useToDo.mockReturnValue({

        toDos:[ 
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true },
        ], 
        toDosCount: 2, 
        pendingToDosCount: 1, 
        handleNewToDo: jest.fn(),
        handleRemoveToDo: jest.fn(), 
        handleToggleToDo: jest.fn(),

    });

    test('Debe mostrar el componente correctamente', () => {
        
        render( <ToDoApp/> )
        // screen.debug();

        expect( screen.getByText('Todo #1')).toBeTruthy();
        expect( screen.getByText('Todo #2')).toBeTruthy();
        expect( screen.getByRole('textbox')).toBeTruthy();
     
    });    
});
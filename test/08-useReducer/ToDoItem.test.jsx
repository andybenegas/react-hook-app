import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import { ToDoItem } from '../../src/08-useReducer/ToDoItem';

describe('Pruebas en <ToDoItem/>', () => {

    const toDo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false,
    };

    const onRemoveToDoMock = jest.fn()
    const onToggleToDoMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() );

    test('Debe mostrar el ToDo pendiente de completar', () => {

        render(
            <ToDoItem 
                toDo={ toDo } 
                onToggleToDo={ onToggleToDoMock } 
                onRemoveToDo={ onRemoveToDoMock } 
            />
        )
        
        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('Debe mostrar el ToDo completado', () => {

        toDo.done = true;

        render(
            <ToDoItem 
                toDo={ toDo } 
                onToggleToDo={ onToggleToDoMock } 
                onRemoveToDo={ onRemoveToDoMock } 
            />
        )
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });
    
    test('Span debe llamar el ToggleToDo cuando se hace click', () => { 
        
        render(
            <ToDoItem 
                toDo={ toDo } 
                onToggleToDo={ onToggleToDoMock } 
                onRemoveToDo={ onRemoveToDoMock } 
            />
        )

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleToDoMock ).toHaveBeenCalledWith( toDo.id );


    });

    test('Button debe de llamar el RemoveToDo', () => { 
        
        render(
            <ToDoItem 
                toDo={ toDo } 
                onToggleToDo={ onToggleToDoMock } 
                onRemoveToDo={ onRemoveToDoMock } 
            />
        )

        const removeButton = screen.getByRole('button');
        fireEvent.click( removeButton );

        expect( onRemoveToDoMock ).toHaveBeenCalledWith( toDo.id );

    });
});

import { useEffect, useReducer } from 'react';
import { toDoReducer } from '../08-useReducer/toDoReducer';
import { useCounter } from './useCounter';

const init = () => {
    return JSON.parse( localStorage.getItem('toDos') ) || [];
}

export const useToDo = (initialState = []) => {
    
    const [toDos, dispatch] = useReducer( toDoReducer, initialState, init );
    
    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify( toDos ));
    }, [toDos])
      
    const handleNewToDo = ( toDo ) => {
        const action = {
            type: '[TODO] Add ToDo',
            payload: toDo
        }
        dispatch( action );
    }

    const handleRemoveToDo = ( id ) => {
        dispatch({
            type: '[TODO] Remove ToDo',
            payload: id
        })
    }

    const handleToggleToDo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle ToDo',
            payload: id
        })
    }

    return {
    toDos,
    toDosCount: toDos.length,
    pendingToDosCount: toDos.filter( toDo => !toDo.done).length,
    handleNewToDo,
    handleRemoveToDo,
    handleToggleToDo,
  }
}

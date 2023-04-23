const initialState = [{
    id: 1,
    todo: 'Comprar harina de almendras',
    donde: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {
    if (action.type === '[TODO] Add Todo') {
        return [ ...state, action.payload ];
    } 
    return state;
};

let todos = todoReducer([{
    id: 2,
    todo: 'Pedir insumos',
    done: true,
}]);

//Si nosotros queremos hacer alguna modificación del Reducer, vamos a mandarle una acción y dicha acción va a decirle como va a modificarse.

const newTodo = {
    id: 3,
    todo: 'Pedirle a Pauli galletas',
    done: false,  
}

const addTodoAction = {
    type: '[TODO] Add Todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );

//En React NO debemos hacer esto! Hacer una mutación del arreglo, es una mala práctica cuando mutamos el estado de esta manera.
// todos.push({
//     id: 3,
//     todo: 'Pedirle a Pauli galletas',
//     done: false,
// });

console.log(todos);
import { useToDo } from '../hooks';
import { ToDoAdd } from './ToDoAdd';
import { ToDoList } from './ToDoList';

export const ToDoApp = () => {

    const { toDos, toDosCount, pendingToDosCount, handleNewToDo, handleRemoveToDo, handleToggleToDo } = useToDo();

  return (
    <>
        <h1>To-Do App { toDosCount } / <small>Pendientes: { pendingToDosCount }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <ToDoList 
                    toDos={ toDos } 
                    onRemoveToDo={ handleRemoveToDo }
                    onToggleToDo={ handleToggleToDo }
                />
            </div>
        </div>

        <div className="col-5">
            <h4 className="mt-3">Add To Do</h4>
            <hr />
            <ToDoAdd 
                onNewToDo={ handleNewToDo }
            />
        </div>
    </>
  )
}


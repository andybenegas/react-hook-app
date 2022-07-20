import { ToDoItem } from './ToDoItem';

export const ToDoList = ({ toDos = [], onRemoveToDo, onToggleToDo }) => {

  return (
    <ul className="list-group">
        {
            toDos.map( toDo => (
                <ToDoItem 
                  key={ toDo.id } 
                  toDo={ toDo } 
                  onRemoveToDo={ onRemoveToDo }
                  onToggleToDo={ onToggleToDo }
                />
            ))
        }
    </ul>
  )
}

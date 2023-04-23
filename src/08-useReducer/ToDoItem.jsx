
export const ToDoItem = ({ toDo, onRemoveToDo, onToggleToDo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`align-self-center ${ (toDo.done) ? 'text-decoration-line-through' : '' }`}
          onClick={ () => onToggleToDo( toDo.id )}
          aria-label='span'
        >
          { toDo.description }
        </span>
        <button 
          className="btn btn-danger"
          onClick={ () => onRemoveToDo( toDo.id ) }
        >Delete</button>    
    </li>
  )
}

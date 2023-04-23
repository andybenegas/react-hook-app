import { useForm } from '../hooks/useForm';

export const ToDoAdd = ({ onNewToDo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = (event) => {

        event.preventDefault();
        if (description.length <= 1) return;
        
        const newToDo = {
            id: new Date().getTime(),
            description,
            done: false 
        }

        onNewToDo(newToDo);
        onResetForm();
    }

  return (
    <form onSubmit={ onFormSubmit }>
        <input 
            className="form-control"
            name="description" 
            onChange={ onInputChange }
            placeholder="¿What is to do?"
            type="text"
            value={ description }
        />
        <button
            className="btn btn-outline-primary mt-2"
            type="submit"
        >
            Add
        </button>
    </form>
  )
}

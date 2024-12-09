import { useState } from "react";

function AddTodoForm({onAddTodo}) {
    const [todoTitle, setTodoTitle] = useState('');
    
function handleTitleChange(event){
    const newTodoTitle = (event.target.value);
    setTodoTitle(newTodoTitle);
}
    function handleAddTodo(event){
       event.preventDefault();
       console.log(todoTitle);
       
       onAddTodo({title: todoTitle, id: Date.now() });
       setTodoTitle('');
    }
    return (
        <>
            <form onSubmit = {handleAddTodo}>
                <label htmlFor="todoTitle"> 
                    Title:
                    <input 
                    id="todoTitle" 
                    type = "text"
                    name = "title"
                    placeholder="New Todo:"
                    value = {todoTitle}
                    onChange = {handleTitleChange}
                    />
                </label>
                <hr/>
                <button type="submit"> Add </button>
            </form>
            
        </>
    )
}
export default AddTodoForm;
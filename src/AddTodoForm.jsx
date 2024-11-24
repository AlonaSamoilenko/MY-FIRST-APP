function AddTodoForm(props) {

    function handleAddTodo(event){
       event.preventDefault();
      
       const todoTitle = event.target.title.value;
       console.log(todoTitle);
       
       props.onAddTodo(todoTitle);
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
                    />
                </label>
                <hr/>
                <button type="submit"> Add </button>
            </form>
            
        </>
    )
}
export default AddTodoForm;
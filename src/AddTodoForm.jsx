function AddTodoForm() {
    return (
        <>
            <form>
                <label htmlFor="todoTitle"> Title:
                    <input id="todoTitle" />
                </label>
            </form>
            <button type="submit"> Add </button>
        </>
    )
}
export default AddTodoForm
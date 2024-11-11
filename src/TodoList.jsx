
const todoList = [
    {id: 1, title: 'Read a book'},
    {id: 2, title: 'Do homework'},
    {id: 3, title: 'Complete assignment'},
  ]
  
function TodoList(){
  return (
    <>
    <ul>
      { todoList.map((item) => (<li key={item.id}>{item.title}</li>)) }
    </ul>
    </>
  )
}
export default TodoList
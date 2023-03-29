import { clearCompleted } from "../actions";

export const clearCompletedTodoList = async (dispatch, getState) => {
    const {todos} = getState();

    todos.forEach(async (todo) => {
        if(todo.completed === true) {
            await fetch(`http://localhost:9000/todos/${todo.id}`, {
                method: 'DELETE'
            })
        }
    })

    dispatch(clearCompleted())
}
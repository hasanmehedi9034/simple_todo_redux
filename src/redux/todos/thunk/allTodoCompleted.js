import { allCompleted } from "../actions";

export const allCompletedTodo = async (dispatch, getState) => {
    const { todos } = getState();

    todos.forEach(async (todo) => {
        if (!todo.completed) {
            await fetch(`http://localhost:9000/todos/${todo.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    completed: true
                }),
                headers: {
                    'content-type': 'application/json; charset=UTF-8'
                }
            })
        }
    })

    dispatch(allCompleted())
}

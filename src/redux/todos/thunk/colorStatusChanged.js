import { colorSelected } from "../actions";

export const colorStatusChanged = (id, color) => {
    return async (dispatch, getState) => {
        const { todos } = getState();
        const targetedTodo = todos.find(todo => todo.id === id);

        if (targetedTodo && targetedTodo.color !== color) {
            await fetch(`http://localhost:9000/todos/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    color: color
                }),
                headers: {
                    'content-type': 'application/json; charset=UTF-8'
                }
            })
            dispatch(colorSelected(id, color))
        }
        else if(targetedTodo && targetedTodo.color === color) {
            await fetch(`http://localhost:9000/todos/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    color: ''
                }),
                headers: {
                    'content-type': 'application/json; charset=UTF-8'
                }
            })
            dispatch(colorSelected(id, color))
        }
    }
}
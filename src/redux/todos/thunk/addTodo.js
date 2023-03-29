import { added } from "../actions";

export const addTodo = (todoText) => {
    return async (dispatch) => {
        await fetch(`http://localhost:9000/todos`, {
            method: 'POST',
            body: JSON.stringify({
                text: todoText,
                completed: false,
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        })
        dispatch(added(todoText));
    }
}
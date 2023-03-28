import { deleted } from "../actions";

export const deleteTodo = (id) => {
    return async (dispatch, getState) => {
        await fetch(`http://localhost:9000/todos/${id}`, {
            method: 'DELETE'
        })
        dispatch(deleted(id))
    }
}
import { deleted } from "../actions";

export const d = async (dispatch, getState) => {
    const  respontse = await fetch('http://localhost:9000/todos');
    const todos = await respontse.json();
    dispatch(deleted(todos))
}

export const deleteTodo = (id) => {
    return async (dispatch, getState) => {
        await fetch(`http://localhost:9000/todos/${id}`, {
            method: 'DELETE'
        })
        dispatch(deleted(id))
    }
}
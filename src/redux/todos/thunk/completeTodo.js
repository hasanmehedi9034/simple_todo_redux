import {toggled } from "../actions";

export const toggleStatus = (id, currentStatus) => {
    return async (dispatch, getState) => {
        await fetch(`http://localhost:9000/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: !currentStatus
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        })

        dispatch(toggled(id))
    }
}
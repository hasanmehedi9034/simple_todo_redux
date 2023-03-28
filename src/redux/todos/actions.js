import { ADDED, ALLCOMPLTED, CLEARCOMPLETED, COLORSELECTED, DELETED, FETCH_TODOS, TOGGLED } from "./actionTypes"

export const loadTodos = (todos) => {
    return {
        type: FETCH_TODOS,
        payload: todos
    }
}

export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText
    }
}

export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId
    }
}

export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        }
    }
}

export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId
    }
}

export const allCompleted = () => {
    return {
        type: ALLCOMPLTED,
    }
}

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    }
}





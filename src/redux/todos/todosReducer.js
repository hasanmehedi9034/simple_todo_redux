import { nextTodoId } from "../../utils/todoId";
import { ADDED, ALLCOMPLTED, CLEARCOMPLETED, COLORSELECTED, DELETED, FETCH_TODOS, TOGGLED } from "./actionTypes";
import { initialTodosState } from "./initialState";


const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return action.payload
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text:  action.payload,
                    completed: false
                }
            ]

        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) return todo;
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })

        case COLORSELECTED:
            const { todoId, color } = action.payload;
            return state.map(todo => {
                if (todo.id !== todoId) return todo;
                return {
                    ...todo,
                    color: color
                }
            })

        case DELETED:
            return state.filter(todo => todo.id !== action.payload)

        case ALLCOMPLTED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })

        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed)

        default:
            return state;
    }
}


export default todosReducer;
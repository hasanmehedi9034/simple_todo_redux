import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

export default function TodoList() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos);
    const {status, colors} = useSelector(state => state.filters);

    useEffect(() => {
        dispatch(fetchTodos)
    }, [dispatch])
    
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
            .filter(todo => {
                switch(status) {
                    case 'Complete':
                        return todo.completed === true
                    case 'Incomplete':
                        return todo.completed === false
                    default:
                        return true
                }
            })
            .filter(todo => {
                if(colors.length > 0) {
                    return colors.includes(todo?.color)
                }
                return true
            })
            .map(todo => <Todo key={todo.id} todo={todo} />)}
        </div>
    );
}

export const nextTodoId = todos => {
    return todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
}

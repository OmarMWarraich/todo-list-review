export const removeTodo = (index) => {
    todoArray.splice(index, 1);
    sendToLocalStorage();
}

export const removeTodos = () => {
    todoArray = [];
    sendToLocalStorage();
}
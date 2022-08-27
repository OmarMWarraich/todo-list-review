// eslint-disable-next-line no-unused-vars
const editTodo = (index, newDescription) => {
    todoArray[index].description = newDescription;
    // eslint-disable-next-line no-use-before-define
    renderTodo();
  };
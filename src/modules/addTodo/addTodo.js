import { todoArray, sendToLocalStorage } from '../consts/consts.js';
import Status from '../TaskStatus/TaskStatus.js';
import renderTodo from '../render/renderTodo.js';

const addTodo = () => {
  const textInput = document.querySelector('.todo-input');
  textInput.value = '';
  textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && textInput.value) {
      const todo = new Status(textInput.value, false, todoArray.length);
      todoArray.push(todo);
      e.preventDefault();
      renderTodo();
      textInput.value = '';
      sendToLocalStorage();
    }
  });
};

export default addTodo;
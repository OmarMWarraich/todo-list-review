import { todoArray, sendToLocalStorage } from '../consts/consts.js';

const removeTodo = (index) => {
  todoArray.forEach((todo, i) => {
    if (i === index) {
      todoArray.splice(i, 1);
    }
  });
  sendToLocalStorage();
};

export default removeTodo;
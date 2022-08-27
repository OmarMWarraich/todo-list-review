import {todoArray} from '../consts/consts.js';
import renderTodo from '../render/renderTodo.js';

export const removeTodo = (index) => {
    todoArray.splice(index, 1);
    // eslint-disable-next-line no-use-before-define
    renderTodo();
  };


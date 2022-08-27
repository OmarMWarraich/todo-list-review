import {todoArray} from '../consts/consts.js';
import Status from '../TaskStatus/TaskStatus.js';
import { sendToLocalStorage } from '../consts/consts.js';
import renderTodo from '../render/renderTodo.js';


export const addTodo = () => {
    const textInput = document.querySelector('.todo-input');
    const todoDescription = document.querySelectorAll('.todo-description');
    textInput.value = '';
    textInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && textInput.value){
        let todo = new Status(textInput.value, false, todoArray.length+1);
        todoArray.push(todo);
        e.preventDefault();
        renderTodo();
        textInput.value = '';
        sendToLocalStorage();
      }
    })
  };


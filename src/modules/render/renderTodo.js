import {todoArray} from '../consts/consts.js';
import Status from '../TaskStatus/TaskStatus.js';
import { removeTodo } from '../removeTodo/removeTodo.js';
import { sendToLocalStorage } from '../consts/consts.js';


let renderTodo = () => {
    const textInput = document.querySelector('.todo-input');
    const todoListItems = document.querySelector('.todo-list-items');
    let todo = new Status(textInput.value, false, todoArray.length+1);
    todoListItems.innerHTML = '';
    todoArray.forEach((todo) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
                                <div class="todo">
                                <input id="checkbox" type="checkbox" class="checkbox">
                                <span><p class="todo-description" type="submit" contenteditable="true">${todo.description}</p></span>
                                <div class="dots"></div>
                                </div>
                                <hr>
                                `;
        todoListItems.appendChild(todoItem);
    });
    const dot = document.querySelector('.dots');
    
      dot.addEventListener('click', (e) => {        
        console.log(dot)
        e.preventDefault();
        removeTodo(todoArray.indexOf(todo));
        sendToLocalStorage();
      });
    
    //   const checkbox = document.querySelector('.checkbox');
    //   checkbox.addEventListener('click', (e) => {
    //     todo.completed = true;
    //   });
    
    };

  export default renderTodo;
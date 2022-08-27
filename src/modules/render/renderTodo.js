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
                                <div class="icon"></div>
                                </div>
                                <hr>
                                `;
        todoListItems.appendChild(todoItem);
    });

    const todoItem = document.querySelectorAll('.todo-item');
    
    const todos = document.querySelector('.todo');
    if (todos !== null){
        
        todos.addEventListener('click', (e) => {
            threeDots.style.display = 'none';
            trashIcon.style.display = 'block';
            e.target.style.background='pink';
        })
    }
    const icon = document.querySelector('.icon');
    const threeDots = document.createElement('i');
    threeDots.className = 'fas fa-ellipsis-v';
    const trashIcon = document.createElement('i');
    trashIcon.className = 'fas fa-trash-alt icon2';
    if (icon !== null) { 
        icon.append(threeDots);
        icon.append(trashIcon);
        trashIcon.style.display = 'none';
     }
    
};   

  export default renderTodo;
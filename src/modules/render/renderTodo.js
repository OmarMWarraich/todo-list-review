import {todoArray, sendToLocalStorage} from '../consts/consts.js';
import Status from '../TaskStatus/TaskStatus.js';
import { removeTodo, removeTodos } from '../removeTodo/removeTodo.js';

let renderTodo = () => {
    const textInput = document.querySelector('.todo-input');
    const todoListItems = document.querySelector('.todo-list-items');
    let todo = new Status(textInput.value, false, todoArray.length);
    todoListItems.innerHTML = '';
    todoArray.forEach((todo) => {
        const todoItem = document.createElement('div');
        todoItem.className ='todo-item';
        todoItem.innerHTML = `
                            <div class="todo">
                            <input id="checkbox" type="checkbox" class="checkbox" ${!todo.completed} ? 'checked' : '' >
                            <span><p class="todo-description" type="submit" contenteditable="true">${todo.description}</p></span>
                            <div class="icon"><i class="fas fa-ellipsis-v"></i><i class="fas fa-trash-alt icon2"></i></div>
                            </div>
                            <hr>
                            `;
        todoListItems.appendChild(todoItem);
        sendToLocalStorage();
    });
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', (e) => {
            e.target.parentElement.classList.toggle('bg');
            localStorage.setItem('todoArray', JSON.stringify(todoArray));
            const arr = JSON.parse(localStorage.getItem('todoArray'));
            const newArray = [];
            const checked = document.querySelectorAll('.todo');
            for (let i = 0; i < arr.length; i += 1) {
            (checked[i].classList.contains('bg')) ? 
            arr[i].completed = true: arr[i].completed = false;  
            newArray.push(arr[i]);
            localStorage.setItem('todoArray', JSON.stringify(newArray));
            }
    });
  });  
    const todos = document.querySelectorAll('.todo');
    const icons = document.querySelectorAll('.icon');
    const trashIcons = document.querySelectorAll('.icon i:last-child');
    todos.forEach((Element) => {
        Element.addEventListener('click', (e) => {
          Element.querySelector('.icon i:first-child').style.display = 'none';
          Element.querySelector('.icon i:last-child').style.display = 'block';  
        for (let i = 0; i < Element.parentElement.parentElement.childElementCount; i += 1) {
            
        }
    })
    trashIcons.forEach((bin) => {
        bin.addEventListener('click', (e) => {
             
            
            sendToLocalStorage();
        })
    })
    });
    const clearBtn = document.querySelector('.btn');
    clearBtn.addEventListener('click', () => {
        const arr = JSON.parse(localStorage.getItem('todoArray'));
        const clearable = document.querySelectorAll('.bg');
        
        for (let i = 0; i < clearable.length; i += 1) {
          todoListItems.removeChild(clearable[i].parentElement);
        }
        const newArray = [];
        for (let i = 0; i < arr.length; i += 1) {
          if (arr[i].completed === true) {
            continue;
          }
          newArray.push(arr[i]);
        }
        localStorage.setItem('todoArray', JSON.stringify(newArray));
      });
}
  export default renderTodo;
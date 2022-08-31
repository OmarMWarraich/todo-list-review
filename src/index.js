import Tasks from './modules/Tasks/Tasks.js';
// import './style.css';

const body = document.querySelector('body');
const todoList = document.createElement('div');
todoList.classList.add('todo-list');
todoList.innerHTML = `
                      <div class="todo-title"><h1>Today's To Do</h1><i class="fas fa-sync"></i></div>
                      <hr>
                      <div class="input">
                      <input type="text" class="todo-input" placeholder="Add to your list..." required></input><span class="enter-input">&#x2714;</span>
                      </div>
                      <hr>
                      <div class="todo-list-items"></div>
                      <button class="btn">Clear all completed</button>
                      `;
body.appendChild(todoList);

Tasks();
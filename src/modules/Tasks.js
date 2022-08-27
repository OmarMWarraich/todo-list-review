import _ from 'lodash';
import Status from './TaskStatus.js';

// eslint-disable-next-line no-unused-vars

let todoArray = [];

const sendToLocalStorage = () => {
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
};

const Tasks = () => {
  const textInput = document.querySelector('.todo-input');
  const enterInput = document.querySelector('.enter-input');
  enterInput.addEventListener('click', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    addTodo();
  });

  const addTodo = () => {
    let todo = new Status(textInput.value, false, todoArray.length + 1);
    todoArray.push(todo);
    textInput.value = '';
    // eslint-disable-next-line no-use-before-define
    renderTodo();
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
  };

  const removeTodo = (index) => {
    todoArray.splice(index, 1);
    // eslint-disable-next-line no-use-before-define
    renderTodo();
  };

  // eslint-disable-next-line no-unused-vars
  const editTodo = (index, newDescription) => {
    todoArray[index].description = newDescription;
    // eslint-disable-next-line no-use-before-define
    renderTodo();
  };

  // eslint-disable-next-line no-use-before-define
  let renderTodo = () => {
    const todoListItems = document.querySelector('.todo-list-items');
    todoListItems.innerHTML = '';

    todoArray.forEach((todo) => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
      todoItem.innerHTML = `
                              <div class="todo">
                              <input id="checkbox" type="checkbox" class="checkbox" ${todo.completed} ? 'checked' : ''}>
                              <span class="todo-description" type="submit" contenteditable="true">${todo.description}</span>
                              <div class="dots"></div>
                              </div>
                              <hr>
                              `;

      todoListItems.appendChild(todoItem);

      const dot = todoItem.querySelector('.dots');
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const index = todoArray.indexOf(e.target.parentNode.parentNode.parentNode);
        removeTodo(index);
        localStorage.setItem('todoArray', JSON.stringify(todoArray));
      });

      const checkbox = todoItem.querySelector('.checkbox');
      // eslint-disable-next-line no-unused-vars
      checkbox.addEventListener('click', (e) => {
        todo.completed = true;
        todoArray = _.filter(todoArray, (o) => !o.completed);
        localStorage.setItem('todoArray', JSON.stringify(todoArray));
      });

      const clearBtn = document.querySelector('.btn');

      clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderTodo();
      });
    });
  };
};

export default Tasks;

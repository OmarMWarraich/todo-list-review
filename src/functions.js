class Status {
    constructor(description, completed, index) {
      this.description = description;
      this.completed = completed;
      this.index = index;
    }
  }

const todoArray = [];






const sendToLocalStorage = () => {
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    };

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

      const renderTodo = () => {
        const textInput = document.querySelector('.todo-input');
        const todoListItems = document.querySelector('.todo-list-items');
        // eslint-disable-next-line no-unused-vars
        const todo = new Status(textInput.value, false, todoArray.length);
        todoListItems.innerHTML = '';
        todoArray.forEach((todo) => {
          const todoItem = document.createElement('div');
          todoItem.className = 'todo-item';
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
            const target = e.target.parentElement;
            target.classList.toggle('bg');
            localStorage.setItem('todoArray', JSON.stringify(todoArray));
            const arr = JSON.parse(localStorage.getItem('todoArray'));
            const newArray = [];
            const checked = document.querySelectorAll('.todo');
            for (let i = 0; i < arr.length; i += 1) {
              // eslint-disable-next-line no-unused-expressions
              (checked[i].classList.contains('bg'))
                ? arr[i].completed = true : arr[i].completed = false;
              newArray.push(arr[i]);
              localStorage.setItem('todoArray', JSON.stringify(newArray));
            }
          });
        });
        
        // console.log(todo.index);

        const tods = document.querySelectorAll('.todo-item');
        
        tods.forEach((tod) => {
            tod.addEventListener('click', (e) => {
                const icon = tod.querySelector('.icon');
                icon.firstChild.style.display = 'none';
                icon.lastChild.style.display = 'block';
                icon.setAttribute('name', 'delete');
            })
        })

        const icons = document.querySelectorAll('.icon');
        if (icons !== null){
        icons.forEach((icon) => {
            if(icon !== null){
            icon.addEventListener('click', (e) => {
                const target = e.target.parentElement;
                const todo = target.parentElement;
                const todoIndex = todoArray.findIndex((todo) => todo.index === todo.index);
                if (target.getAttribute('name') === 'delete') {
                    removeTodo(todoIndex);
                    sendToLocalStorage();
                }
            })}
        })}

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
              // eslint-disable-next-line no-continue
              continue;
            }
            newArray.push(arr[i]);
          }
          localStorage.setItem('todoArray', JSON.stringify(newArray));
        });
      };

        
                                

export const Tasks = () => {
      addTodo();
      renderTodo();
    };

// remove item from array

const removeTodo = (x) => {
  todoArray.splice(
    x, 1);
  renderTodo();
};

// edit item from array



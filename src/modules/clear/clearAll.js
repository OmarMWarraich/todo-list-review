const clearBtn = document.querySelector('.btn');

      clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderTodo();
      });

import Status from '../TaskStatus/TaskStatus.js';
import { addTodo } from '../addTodo/addTodo.js';
import renderTodo from '../render/renderTodo.js';





const Tasks = () => {
  addTodo();
  renderTodo();

};

export default Tasks;

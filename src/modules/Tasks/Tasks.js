
import Status from '../TaskStatus/TaskStatus.js';
import { addTodo } from '../addTodo/addTodo.js';
import { removeTodo } from '../removeTodo/removeTodo.js';





const Tasks = () => {
  addTodo();
  removeTodo();

};

export default Tasks;

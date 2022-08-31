export const todoArray = [];
export const sendToLocalStorage = () => {
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
};

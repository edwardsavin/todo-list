// Create a list object that can store multiple todos
const myListsFactory = (title, todos = {}) => {
  return { title, todos };
};

let mainList = {};

export { myListsFactory, mainList };

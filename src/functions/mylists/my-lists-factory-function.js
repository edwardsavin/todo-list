// Create a list object that can store multiple todos
const myListsFactory = (title, originalListTitle, todos = {}) => {
  return { title, originalListTitle ,todos };
};

let mainList = {};

export { myListsFactory, mainList };

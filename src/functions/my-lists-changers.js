import { toDoDelete } from "./todo-changers";

// Calls toDoDelete() to clear the todo's values
// Delete the todo from myList
const myListsDeleteToDo = (
  myListName,
  toDoIndex,
  deleteToDoFromList = true
) => {
  let toDoName = myListName.todos[toDoIndex];

  if (deleteToDoFromList) {
    toDoDelete(toDoName, true);
    myListName.todos.splice(toDoIndex, 1);
  }
};

export { myListsDeleteToDo };

import { toDoDelete } from "../todo/todo-changers";

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

// If deleteMyList is true, iterate over every key in myListName and change it to undefined
// Also apply toDoDelete() to every todo in the list
const myListsDelete = (myListName, deleteMyList = true) => {
  if (deleteMyList) {
    // Clear every todo in the list
    for (let key in myListName.todos) {
      toDoDelete(myListName.todos[key]);
    }

    // Clear the list
    for (let key in myListName) {
      myListName[key] = undefined;
    }
  }
};

// Append todo to list
const myListsAddToDo = (myListName, toDoName) => {
  let toDosLength = myListName.todos.length;

  if (toDosLength === 0) {
    myListName.todos[0] = toDoName;
  } else {
    myListName.todos[toDosLength] = toDoName;
  }
};

export { myListsDeleteToDo, myListsDelete, myListsAddToDo };

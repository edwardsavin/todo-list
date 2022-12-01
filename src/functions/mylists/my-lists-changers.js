import { myListsFactory, mainList } from "./my-lists-factory-function";
import { toDoDelete } from "../todo/todo-changers";
import { addListInActiveListContainer } from "../../blocks/block-my-lists-elements/active-lists-container";

// If list doesn't already exist, send it to factory and append to mainList
const myListsSendToFactory = (newListTitle) => {
  let listAlreadyExists = myListsCheckIfListExists(newListTitle);

  if (newListTitle !== null && listAlreadyExists === false) {
    // Format one or more spaces into a dash "-"
    let formattedNewListTitle = newListTitle
      .replace(/  +/g, " ")
      .replaceAll(" ", "-");

    mainList[formattedNewListTitle] = myListsFactory(formattedNewListTitle);

    addListInActiveListContainer(newListTitle);
  }
};

// Check if the list already exists in mainList
// If list detected, return true
const myListsCheckIfListExists = (myListName) => {
  let listDetected = false;

  Object.keys(mainList).forEach((list) => {
    if (list.toString().toLowerCase() === myListName.toString().toLowerCase()) {
      listDetected = true;
      alert("A list with this name exists already");
    }
  });

  return listDetected;
};

// Delete the todo from myList
// Calls toDoDelete() to delete the todo
const myListsDeleteToDo = (myListName, toDoName, deleteToDoFromList = true) => {
  if (deleteToDoFromList) {
    delete myListName.todos[toDoName];
    toDoDelete(toDoName, true);
  }
};

// If deleteMyList is true, delete the list and remove it from mainList
// Also apply toDoDelete() to every todo in the list
const myListsDelete = (myListName, deleteMyList = true) => {
  if (deleteMyList) {
    // Delete every todo in the list
    for (let key in mainList[myListName].todos) {
      toDoDelete(key, true);
    }
    // Delete the list from mainList
    delete mainList[myListName];
  }
};

// Append todo to todos object
const myListsAddToDo = (myListName, toDoName) => {
  let myListTodos = myListName.todos;
  myListTodos[toDoName.title] = toDoName;
};

export {
  myListsDeleteToDo,
  myListsDelete,
  myListsAddToDo,
  myListsSendToFactory,
  myListsCheckIfListExists,
};

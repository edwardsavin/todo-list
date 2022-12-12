import { myListsFactory, mainList } from "./my-lists-factory-function";
import { toDoDelete, toDoSendToFactory } from "../todo/todo-changers";
import { mainToDo } from "../todo/todo-factory-function";

// If list doesn't already exist, send it to factory and append to mainList
const myListsSendToFactory = (newListTitle) => {
  let listAlreadyExists = myListsCheckIfListExists(newListTitle);

  if (newListTitle !== null && listAlreadyExists === false) {
    // Format one or more spaces into a dash "-"
    let formattedNewListTitle = newListTitle.replace(/  +/g, " ");

    mainList[formattedNewListTitle] = myListsFactory(formattedNewListTitle);
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

// Check if a to-do with the given name already exists in the list.
// If duplicate detected, return true
const myListsCheckIfTodoDuplicate = (myListName, toDoName) => {
  let duplicateDetected = false;

  Object.keys(mainList[myListName].todos).forEach((todo) => {
    if (todo.toString().toLowerCase() === toDoName.toString().toLowerCase()) {
      duplicateDetected = true;
    }
  });

  return duplicateDetected;
};

const myListsIncrementTodoCopyName = (myListName, toDoName) => {
  let newTodo = toDoName;
  let num = 1;

  // If the todo already exists in the list, add a number to the end of the todo until unique name is found
  while (myListsCheckIfTodoDuplicate(myListName, newTodo)) {
    newTodo = `${toDoName}${num}`;
    num++;
  }

  toDoSendToFactory(newTodo);
  myListsAddToDo(mainList[myListName], mainToDo[newTodo]);
};

// Delete the todo from myList
// Calls toDoDelete() to delete the todo
const myListsDeleteToDo = (myListName, toDoName, deleteToDoFromList = true) => {
  if (deleteToDoFromList) {
    delete myListName.todos[toDoName];
    toDoDelete(toDoName, true);
  }
};

// Apply myListsDeleteToDo() to every todo in the list
const myListsDeleteAllToDos = (myListName, deleteAllTodos = true) => {
  if (deleteAllTodos) {
    // Delete every todo in the list
    for (let key in mainList[myListName].todos) {
      myListsDeleteToDo(mainList[myListName], key);
    }
  }
};

// If deleteMyList is true, delete the list and remove it from mainList
// Also call myListsDeleteAllToDos for the list
const myListsDelete = (myListName, deleteMyList = true) => {
  if (deleteMyList) {
    myListsDeleteAllToDos(myListName, true);

    // Delete the list from mainList
    delete mainList[myListName];
  }
};

// Delete the todo from the list
const myListsDeleteFromList = (myListName, toDoName, deleteFromList = true) => {
  if (deleteFromList) {
    delete myListName.todos[toDoName];
  }
};

// Append todo to todos object
const myListsAddToDo = (myListName, toDoName) => {
  let myListTodos = myListName.todos;
  myListTodos[toDoName.title] = toDoName;
};

const myListsChangeTodoList = (myListName, toDoName, newTodoList) => {
  myListsAddToDo(newTodoList, myListName.todos[toDoName]);
  myListsDeleteFromList(myListName, toDoName);
};

export {
  myListsDeleteToDo,
  myListsDeleteAllToDos,
  myListsDelete,
  myListsAddToDo,
  myListsSendToFactory,
  myListsCheckIfListExists,
  myListsCheckIfTodoDuplicate,
  myListsIncrementTodoCopyName,
  myListsChangeTodoList,
};

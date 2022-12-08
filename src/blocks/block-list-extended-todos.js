import { mainList } from "../functions/mylists/my-lists-factory-function";
import { mainToDo } from "../functions/todo/todo-factory-function";
import {
  activateCheckBox,
  changeCheckBoxStateStyle,
} from "./block-list-extended-elements/extended-todo-checkbox";

const listExtendedViewElement = document.querySelector(".list-extended-view");

const createListExtendedTodos = (listTitle) => {
  removeExtendedTodosView();

  const listExtendedTodosElement = document.createElement("section");
  listExtendedTodosElement.classList.add("list-extended-view-todos");
  listExtendedTodosElement.textContent = `${listTitle} EXTENDED TEST`;

  // Show each todo from selected list in listExtendedTodosElement container
  Object.keys(mainList[listTitle].todos).forEach((todo) => {
    const newTodoWrapper = document.createElement("div");
    newTodoWrapper.classList.add("extended-todo-wrapper");
    newTodoWrapper.id = `extended-todo-main-content-${todo}`;
    changeCheckBoxStateStyle(todo, listTitle, newTodoWrapper);

    const newTodoCheckBox = document.createElement("button");
    newTodoCheckBox.classList.add("extended-todo-checkbox");
    newTodoCheckBox.id = `extended-todo-checkbox-${todo}`;
    newTodoCheckBox.textContent = "O";
    newTodoCheckBox.addEventListener("click", () => {
      activateCheckBox(todo, listTitle, false);
    });

    const newTodoMainContent = document.createElement("div");
    newTodoMainContent.classList.add("extended-todo-main-content");

    const newTodoTitle = document.createElement("div");
    newTodoTitle.classList.add("extended-todo-main-title");
    newTodoTitle.textContent = todo;

    const newTodoDate = document.createElement("div");
    newTodoDate.classList.add("extended-todo-main-date");
    newTodoDate.textContent = mainToDo[todo].dueDate;

    newTodoMainContent.appendChild(newTodoTitle);
    newTodoMainContent.appendChild(newTodoDate);

    newTodoWrapper.appendChild(newTodoCheckBox);
    newTodoWrapper.appendChild(newTodoMainContent);
    listExtendedTodosElement.appendChild(newTodoWrapper);
  });

  listExtendedViewElement.appendChild(listExtendedTodosElement);
};

// If an extended todos view already exists, remove it
const removeExtendedTodosView = () => {
  const previousExtendedTodosView = document.querySelector(
    ".list-extended-view-todos"
  );
  if (previousExtendedTodosView) {
    previousExtendedTodosView.remove();
  }
};

// If an extended todos main content already exists, remove it
const removeExtendedTodosContent = (todoTitle, all = true) => {
  // If all option selected, remove all todos content
  if (all === true) {
    const allPreviousExtendedTodos = document.querySelectorAll(
      ".extended-todo-wrapper"
    );

    allPreviousExtendedTodos.forEach((todo) => {
      if (todo) {
        todo.remove();
      }
    });

    // If all option not selected, remove only the selected todo via todoTitle
  } else {
    const todoId = document.querySelector(`#extended-todo-button-${todoTitle}`);

    const singlePreviousExtendedTodo = todoId.parentElement;

    if (singlePreviousExtendedTodo) {
      singlePreviousExtendedTodo.remove();
    }
  }
};

export {
  createListExtendedTodos,
  removeExtendedTodosView,
  removeExtendedTodosContent,
};

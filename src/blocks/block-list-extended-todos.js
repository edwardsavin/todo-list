import { mainList } from "../functions/mylists/my-lists-factory-function";

const listExtendedViewElement = document.querySelector(".list-extended-view");

const createListExtendedTodos = (listTitle) => {
  removePreviousActiveExtendedTodos();

  const listExtendedTodosElement = document.createElement("section");
  listExtendedTodosElement.classList.add("list-extended-view-todos");
  listExtendedTodosElement.textContent = `${listTitle} EXTENDED TEST`;

  // Show each todo from selected list in listExtendedTodosElement container
  Object.keys(mainList[listTitle].todos).forEach((todo) => {
    const newTodoWrapper = document.createElement("div");
    newTodoWrapper.classList.add("extended-todo-wrapper");

    const newTodoButton = document.createElement("button");
    newTodoButton.classList.add("extended-todo-button");
    newTodoButton.id = `extended-todo-button-${todo}`;
    newTodoButton.textContent = "O";

    const newTodoMainContent = document.createElement("div");
    newTodoMainContent.classList.add("extended-todo-main-content");

    const newTodoTitle = document.createElement("div");
    newTodoTitle.classList.add("extended-todo-main-title");
    newTodoTitle.textContent = todo;

    const newTodoDate = document.createElement("div");
    newTodoDate.classList.add("extended-todo-main-date");

    newTodoMainContent.appendChild(newTodoTitle);
    newTodoMainContent.appendChild(newTodoDate);

    newTodoWrapper.appendChild(newTodoButton);
    newTodoWrapper.appendChild(newTodoMainContent);
    listExtendedTodosElement.appendChild(newTodoWrapper);
  });

  listExtendedViewElement.appendChild(listExtendedTodosElement);
};

// If an extended todos view already exists, remove it
const removePreviousActiveExtendedTodos = () => {
  const previousExtendedTodos = document.querySelector(
    ".list-extended-view-todos"
  );
  if (previousExtendedTodos) {
    previousExtendedTodos.remove();
  }
};

export { createListExtendedTodos, removePreviousActiveExtendedTodos };

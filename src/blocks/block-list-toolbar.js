import {
  myListsDelete,
  myListsDeleteAllToDos,
} from "../functions/mylists/my-lists-changers";
import { mainList } from "../functions/mylists/my-lists-factory-function";
import {
  removeExtendedTodosContent,
  removeExtendedTodosView,
} from "./block-list-extended-todos";
import {
  deleteListFromActiveListContainer,
  updateListTodoCount,
} from "./block-my-lists-elements/active-lists-container";

const createListToolBar = (listTitle) => {
  removePreviousActiveToolbar();

  const listToolBarWrapper = document.createElement("div");
  listToolBarWrapper.classList.add("list-tool-bar-wrapper");

  const listToolBarElement = document.createElement("div");
  listToolBarElement.classList.add("list-tool-bar");

  const listToolBarTitleElement = document.createElement("div");
  listToolBarTitleElement.classList.add("list-tool-bar-title");
  listToolBarTitleElement.textContent = mainList[listTitle].originalListTitle;

  const listToolBarSeparator = document.createElement("div");
  listToolBarSeparator.classList.add("list-tool-bar-separator");

  const listToolBarDeleteTodosButton = document.createElement("button");
  listToolBarDeleteTodosButton.setAttribute("type", "button");
  listToolBarDeleteTodosButton.id = "list-tool-bar-clear-todos";
  listToolBarDeleteTodosButton.addEventListener("click", () => {
    if (
      confirm(
        "This action is irreversible, are you sure you want to clear all the todos in " +
          listTitle +
          "?"
      )
    ) {
      myListsDeleteAllToDos(listTitle);
      updateListTodoCount();
      removeExtendedTodosContent();
    }
  });

  const listToolBarDeleteListButton = document.createElement("button");
  listToolBarDeleteListButton.setAttribute("type", "button");
  listToolBarDeleteListButton.id = "list-tool-bar-delete-list";
  listToolBarDeleteListButton.addEventListener("click", () => {
    if (
      confirm(
        "This action is irreversible, are you sure you want to delete " +
          listTitle +
          "?"
      )
    ) {
      myListsDelete(listTitle);
      deleteListFromActiveListContainer(listTitle);
      listToolBarWrapper.remove();
      document.querySelector(".extended-view-article").innerHTML = "";
      removeExtendedTodosView();
    }
  });

  listToolBarElement.appendChild(listToolBarTitleElement);
  listToolBarElement.appendChild(listToolBarSeparator);
  listToolBarElement.appendChild(listToolBarDeleteTodosButton);
  listToolBarElement.appendChild(listToolBarDeleteListButton);

  listToolBarWrapper.appendChild(listToolBarElement);

  const extendedViewArticle = document.querySelector(".extended-view-article");

  document
    .querySelector(".list-extended-view")
    .insertBefore(listToolBarWrapper, extendedViewArticle);
};

// If a toolbar already exists, remove it
const removePreviousActiveToolbar = () => {
  const previousList = document.querySelector(".list-tool-bar");
  if (previousList) {
    previousList.remove();
  }
};

export { createListToolBar };

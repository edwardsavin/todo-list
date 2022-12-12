import {
  myListsDelete,
  myListsDeleteAllToDos,
} from "../functions/mylists/my-lists-changers";
import {
  removeExtendedTodosContent,
  removeExtendedTodosView,
} from "./block-list-extended-todos";
import { deleteListFromActiveListContainer } from "./block-my-lists-elements/active-lists-container";

const createListToolBar = (listTitle) => {
  removePreviousActiveToolbar();

  const listToolBarElement = document.createElement("div");
  listToolBarElement.classList.add("list-tool-bar");

  const listToolBarTitleElement = document.createElement("div");
  listToolBarTitleElement.classList.add("list-tool-bar-title");
  listToolBarTitleElement.textContent = listTitle;

  const listToolBarDeleteTodosButton = document.createElement("button");
  listToolBarDeleteTodosButton.setAttribute("type", "button");
  listToolBarDeleteTodosButton.id = "list-tool-bar-clear-todos";
  listToolBarDeleteTodosButton.textContent = "X";
  listToolBarDeleteTodosButton.addEventListener("click", () => {
    if (
      confirm(
        "This action is irreversible, are you sure you want to clear all the todos in " +
          listTitle +
          "?"
      )
    ) {
      myListsDeleteAllToDos(listTitle);
      removeExtendedTodosContent();
    }
  });

  const listToolBarDeleteListButton = document.createElement("button");
  listToolBarDeleteListButton.setAttribute("type", "button");
  listToolBarDeleteListButton.id = "list-tool-bar-delete-list";
  listToolBarDeleteListButton.textContent = "#";
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
      listToolBarElement.remove();
      removeExtendedTodosView();
    }
  });

  listToolBarElement.appendChild(listToolBarTitleElement);
  listToolBarElement.appendChild(listToolBarDeleteTodosButton);
  listToolBarElement.appendChild(listToolBarDeleteListButton);

  document.querySelector(".list-extended-view").appendChild(listToolBarElement);
};

// If a toolbar already exists, remove it
const removePreviousActiveToolbar = () => {
  const previousList = document.querySelector(".list-tool-bar");
  if (previousList) {
    previousList.remove();
  }
};

export { createListToolBar };

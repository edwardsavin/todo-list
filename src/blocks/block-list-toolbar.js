import {
  myListsDelete,
  myListsDeleteAllToDos,
} from "../functions/mylists/my-lists-changers";

const createListToolBar = (listTitle) => {
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
    }
  });

  listToolBarElement.appendChild(listToolBarTitleElement);
  listToolBarElement.appendChild(listToolBarDeleteTodosButton);
  listToolBarElement.appendChild(listToolBarDeleteListButton);

  document.querySelector(".list-extended-view").appendChild(listToolBarElement);
};

export { createListToolBar };

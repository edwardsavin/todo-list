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
    myListsDeleteAllToDos(listTitle);
  });

  const listToolBarDeleteListButton = document.createElement("button");
  listToolBarDeleteListButton.setAttribute("type", "button");
  listToolBarDeleteListButton.id = "list-tool-bar-delete-list";
  listToolBarDeleteListButton.textContent = "#";
  listToolBarDeleteListButton.addEventListener("click", () => {
    myListsDelete(listTitle);
  });

  listToolBarElement.appendChild(listToolBarTitleElement);
  listToolBarElement.appendChild(listToolBarDeleteTodosButton);
  listToolBarElement.appendChild(listToolBarDeleteListButton);

  document.querySelector(".list-extended-view").appendChild(listToolBarElement);
};

export { createListToolBar };

import { elementActiveLists } from "../block-my-lists";
import { mainList } from "../../functions/mylists/my-lists-factory-function";
import { createListToolBar } from "../block-list-toolbar";
import { createListExtendedTodos, createQuickAddTodoElement } from "../block-list-extended-todos";

// Create a new <li> with textContent and id of created list
// Append it to my lists container
const addListInActiveListContainer = (newListTitle) => {
  const activeLists = document.getElementById(
    "my-lists-container-lists"
  ).childNodes;

  let listAlreadyInActiveList = false;
  let listId = "";
  let listTitle = "";

  // Check if list already present in DOM
  Object.keys(mainList).forEach((list) => {
    listId = `list-${list}`.toLowerCase().replaceAll(" ", "-");
    // Capitalize only the first letter
    listTitle =
      newListTitle.toLowerCase().charAt(0).toUpperCase() +
      newListTitle.slice(1);

    activeLists.forEach((element) => {
      if (element.id.toString() === listId) {
        listAlreadyInActiveList = true;
      } else {
        listAlreadyInActiveList = false;
      }
    });
  });

  // If list is not present in DOM, create and append it to elementActiveLists
  if (!listAlreadyInActiveList) {
    let newList = document.createElement("li");
    newList.setAttribute("id", listId);
    newList.textContent = listTitle;
    newList.addEventListener("click", () => {
      changeListTitleColor(listId);
      createListToolBar(listTitle);
      createListExtendedTodos(listTitle);
      createQuickAddTodoElement(listTitle);
    });

    elementActiveLists.appendChild(newList);
  }
};

// Delete list from DOM
const deleteListFromActiveListContainer = (listTitle) => {
  const elementList = document.getElementById(
    `list-${listTitle}`.toLowerCase()
  );
  const elementListParent = elementList.parentElement;

  // Remove the elementList from the DOM
  elementListParent.removeChild(elementList);
};

// Show and update the number of todos from each list on the DOM
const updateListTodoCount = () => {
  Object.keys(mainList).forEach((list) => {
    // Get the number of todos in the current list
    const todosCount = Object.keys(mainList[list].todos).length;

    const todosCountContainerElement = createTodosCountElement(todosCount);
    const formattedListTitle = list.toLowerCase().replaceAll(" ", "-")
    const listTitleElement = document.querySelector(
      `#list-${formattedListTitle}`
    );

    // Check if listTitleElement exists
    if (!listTitleElement) {
      return;
    }

    // Check if the element with the class "todos-number" already exists in listTitleElement
    // If the element already exists, don't create it again
    const todosNumberElement = listTitleElement.querySelector(".todos-number");
    if (todosNumberElement) {
      todosNumberElement.textContent = todosCount;
    } else {
      listTitleElement.appendChild(todosCountContainerElement);
    }
  });
};

const createTodosCountElement = (todosCount) => {
  const todosCountElement = document.createElement("div");
  todosCountElement.classList.add("todos-number");
  todosCountElement.textContent = `${todosCount}`;

  if (todosCount === 0) {
    todosCountElement.style.display = "none";
  }

  return todosCountElement;
};

const changeListTitleColor = (listId) => {
  const selectedList = document.getElementById(listId);

  // Remove the ".selected-list" class from previous selected list
  const listItems = document.querySelectorAll("#my-lists-container-lists li");
  listItems.forEach((listItem) => {
    listItem.classList.remove("selected-list");
  });

  if (selectedList) {
    selectedList.classList.add("selected-list");
  }
};

export {
  addListInActiveListContainer,
  deleteListFromActiveListContainer,
  updateListTodoCount,
};

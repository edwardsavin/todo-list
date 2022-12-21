import { elementActiveLists } from "../block-my-lists";
import { mainList } from "../../functions/mylists/my-lists-factory-function";
import { createListToolBar } from "../block-list-toolbar";
import {
  createListExtendedTodos,
  createQuickAddTodoElement,
} from "../block-list-extended-todos";
import { removeExtendedMainSection } from "../block-list-extended-base";

// Create a new <li> with textContent and id of created list
// Append it to my lists container
const addListInActiveListContainer = (newListTitle) => {
  const activeLists = document.getElementById(
    "my-lists-container-lists"
  ).childNodes;

  // Create a Set to hold the ids of all the lists that are currently in the DOM
  const activeListIds = new Set();

  // Add the ids of all the lists in the DOM to the activeListIds Set
  activeLists.forEach((element) => {
    activeListIds.add(element.id.toString());
  });

  let listId = "";
  let listTitle = "";

  // Capitalize only the first letter
  listTitle =
    newListTitle.toLowerCase().charAt(0).toUpperCase() + newListTitle.slice(1);

  // Create the id for the new list
  listId = `list-${listTitle}`.toLowerCase().replaceAll(" ", "-");

  // If the list is not already in the DOM, add it
  if (!activeListIds.has(listId)) {
    let newList = document.createElement("li");
    newList.setAttribute("id", listId);

    let newListText = document.createElement("div");
    newListText.classList.add("list-text");
    newListText.textContent = mainList[newListTitle].originalListTitle;

    newList.appendChild(newListText);

    newList.addEventListener("click", () => {
      changeListTitleColor(listId);
      createListToolBar(newListTitle);
      createListExtendedTodos(newListTitle);
      createQuickAddTodoElement(newListTitle);
      removeExtendedMainSection();
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

    const todosCountWrapper = document.createElement("div");
    todosCountWrapper.classList.add("todos-number-wrapper");

    const todosCountContainerElement = createTodosCountElement(todosCount);
    const formattedListTitle = list.toLowerCase().replaceAll(" ", "-");
    const listTitleElement = document.querySelector(
      `#list-${formattedListTitle}`
    );

    const todosCountCircle = document.createElement("div");
    todosCountCircle.classList.add("todos-number-circle");

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
      todosCountWrapper.appendChild(todosCountCircle);
      todosCountWrapper.appendChild(todosCountContainerElement);
      listTitleElement.appendChild(todosCountWrapper);
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

import { elementActiveLists } from "../block-my-lists";
import { mainList } from "../../functions/mylists/my-lists-factory-function";

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
    listId = `list-${list}`.toLowerCase();
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

    elementActiveLists.appendChild(newList);
  }
};

// Show and update the number of todos from each list on the DOM
const updateListTodoCount = () => {
  Object.keys(mainList).forEach((list) => {
    // Get the number of todos in the current list
    const todosCount = Object.keys(mainList[list].todos).length;

    const todosCountContainerElement = createTodosCountElement(todosCount);
    const listTitleElement = document.querySelector(
      `#list-${list.toLowerCase()}`
    );

    // Check if listTitleElement exists
    if (!listTitleElement) {
      return;
    }

    // Check if the element with the class "todos-number" already exists in listTitleElement
    // If the element already exists, don't create it again
    if (!listTitleElement.querySelector(".todos-number")) {
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

export { addListInActiveListContainer, updateListTodoCount };

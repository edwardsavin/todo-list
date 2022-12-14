import { myListsDeleteToDo } from "../../functions/mylists/my-lists-changers";
import { mainList } from "../../functions/mylists/my-lists-factory-function";
import { toDoChangeCheckBox } from "../../functions/todo/todo-changers";
import { mainToDo } from "../../functions/todo/todo-factory-function";
import { disableMainContentElements } from "../block-list-extended-base";
import { createListExtendedTodos } from "../block-list-extended-todos";
import { updateListTodoCount } from "../block-my-lists-elements/active-lists-container";

const activateCheckBox = (todoName, listName, checkboxPressed = false) => {
  const mainContent = document.querySelector(
    `#extended-todo-main-content-${todoName}`
  );

  let checkboxState = checkboxPressed;

  if (checkboxState === false) {
    toDoChangeCheckBox(mainToDo[todoName]);
    changeCheckBoxStateStyle(todoName, listName, mainContent);
    disableMainContentElements(todoName);
  }

  if (checkboxState === true) {
    changeCheckBoxStateStyle(todoName, listName, mainContent);
    toDoChangeCheckBox(mainToDo[todoName]);
    disableMainContentElements(todoName);
  }
};

// Get the parent element of the given element
const getParentElement = (element) => {
  return element.parentElement;
};

// Change style of the todo considering if the checkBox is false or true
const changeCheckBoxStateStyle = (todoName, listName, mainContent) => {
  const todoRemoveButton = createTodoRemover(todoName, listName);
  const todoRemoveButtonPresent = mainContent.querySelector(
    ".extended-todo-remove-button"
  );

  if (mainContent.parentElement !== null) {
    if (mainToDo[todoName].checkBox === true) {
      mainContent.classList.add("todo-wrapper-checked");
      mainContent.appendChild(todoRemoveButton);
      getParentElement(mainContent).appendChild(mainContent);
    } else {
      mainContent.classList.remove("todo-wrapper-checked");
      moveToDoElement(todoName, listName, mainContent);

      if (todoRemoveButtonPresent) {
        todoRemoveButtonPresent.remove();
      }
    }
  }
};

// TODO: Refactor this function
// Move the to-do element to its appropriate location in the DOM
const moveToDoElement = (todoName, listName, mainContent) => {
  const toDoIndex = Object.keys(mainList[listName].todos).indexOf(todoName);

  if (getParentElement(mainContent) !== null) {
    let toDoLocations = getParentElement(mainContent).querySelectorAll(
      ".extended-todo-wrapper"
    );

    let insertBeforeIndex = toDoIndex;

    // Check for the presence of elements with the "todo-wrapper-checked" class before the mainContent element
    // Adjust the insertion index accordingly
    while (
      insertBeforeIndex > 0 &&
      (toDoLocations
        .item(insertBeforeIndex - 1)
        .classList.contains("todo-wrapper-checked") ||
        Object.keys(mainList[listName].todos).indexOf(
          toDoLocations
            .item(insertBeforeIndex - 1)
            .querySelector(".extended-todo-main-title").textContent
        ) >
          Object.keys(mainList[listName].todos).indexOf(
            mainContent.querySelector(".extended-todo-main-title").textContent
          ))
    ) {
      insertBeforeIndex--;
    }

    // If the previous element does not have the "todo-wrapper-checked" class...
    if (
      insertBeforeIndex > 0 &&
      !toDoLocations
        .item(insertBeforeIndex - 1)
        .classList.contains("todo-wrapper-checked")
    ) {
      // Check if the previous element is before the mainContent element in the listName.todos object

      // Get the name of the to-do item from the mainContent and previousElement elements
      const previousElementName = toDoLocations
        .item(insertBeforeIndex - 1)
        .querySelector(".extended-todo-main-title").textContent;
      const mainContentName = mainContent.querySelector(
        ".extended-todo-main-title"
      ).textContent;

      if (
        Object.keys(mainList[listName].todos).indexOf(previousElementName) >
        Object.keys(mainList[listName].todos).indexOf(mainContentName)
      ) {
        // If the previous element is not before the mainContent element in the listName.todos object,
        // insert the mainContent element before the previous element in the DOM
        getParentElement(mainContent).insertBefore(
          mainContent,
          toDoLocations.item(insertBeforeIndex - 1)
        );
      }
    }

    // Otherwise, insert the mainContent element at the current insertion index
    getParentElement(mainContent).insertBefore(
      mainContent,
      toDoLocations.item(insertBeforeIndex)
    );
  }
};

// Create the remove button for the to-do item
function createTodoRemover(todoName, listName) {
  const todoRemoveButton = document.createElement("button");
  todoRemoveButton.classList.add("extended-todo-remove-button");
  todoRemoveButton.id = `${listName}-todo-remove-button-${todoName}`;

  todoRemoveButton.addEventListener("click", () => {
    myListsDeleteToDo(mainList[listName], todoName, true);
    createListExtendedTodos(listName);
    prependExtendedView();
    updateListTodoCount();
  });

  return todoRemoveButton;
}

function prependExtendedView() {
  const extendedViewTodos = document.querySelector(".list-extended-view-todos");
  const extendedViewSection = document.querySelector(
    ".extended-view-scroll-section"
  );

  extendedViewSection.prepend(extendedViewTodos);
}

export { activateCheckBox, changeCheckBoxStateStyle };

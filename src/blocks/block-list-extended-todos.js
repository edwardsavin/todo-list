import {
  myListsAddToDo,
  myListsCheckIfTodoDuplicate,
  myListsIncrementTodoCopyName,
} from "../functions/mylists/my-lists-changers";
import { mainList } from "../functions/mylists/my-lists-factory-function";
import { toDoSendToFactory } from "../functions/todo/todo-changers";
import { mainToDo } from "../functions/todo/todo-factory-function";
import {
  activateCheckBox,
  changeCheckBoxStateStyle,
} from "./block-list-extended-elements/extended-todo-checkbox";
import { updateListTodoCount } from "./block-my-lists-elements/active-lists-container";
import { createExtendedMainContent } from "./block-list-extended-base";
import { checkAllTodosPriority } from "./block-list-extended-elements/extended-base-details";

const extendedViewArticle = document.querySelector(".extended-view-article");
const extendedViewScrollSection = document.createElement("section");
extendedViewScrollSection.classList.add("extended-view-scroll-section");

const createListExtendedTodos = (listTitle) => {
  removeExtendedTodosView();

  const listExtendedTodosElement = document.createElement("div");
  listExtendedTodosElement.classList.add("list-extended-view-todos");

  // Show each todo from selected list in listExtendedTodosElement container
  Object.keys(mainList[listTitle].todos).forEach((todo) => {
    const newTodoWrapper = document.createElement("div");
    newTodoWrapper.classList.add("extended-todo-wrapper");
    newTodoWrapper.id = `extended-todo-main-content-${todo}`;

    newTodoWrapper.addEventListener("click", (event) => {
      // If checkbox is clicked, ignore click event
      if (event.target === newTodoCheckBox) {
        return;
      }

      const clickedClass = document.querySelectorAll(".todo-wrapped-clicked");
      removeClickedClass(clickedClass);
      handleTodoClick(newTodoWrapper, listTitle, todo);
    });

    const newTodoCheckBox = document.createElement("button");
    newTodoCheckBox.classList.add("extended-todo-checkbox");
    newTodoCheckBox.classList.add("checkbox");
    newTodoCheckBox.id = `extended-todo-checkbox-${todo}`;
    newTodoCheckBox.addEventListener("click", () => {
      activateCheckBox(todo, listTitle, false);
    });

    const newTodoMainContent = document.createElement("div");
    newTodoMainContent.classList.add("extended-todo-main-content");

    const newTodoTitle = document.createElement("div");
    newTodoTitle.classList.add("extended-todo-main-title");
    newTodoTitle.textContent = mainToDo[todo].originalTodoTitle;

    const newTodoDate = document.createElement("div");
    newTodoDate.classList.add("extended-todo-main-date");
    newTodoDate.textContent = mainToDo[todo].dueDate;

    newTodoMainContent.appendChild(newTodoTitle);
    newTodoMainContent.appendChild(newTodoDate);

    newTodoWrapper.appendChild(newTodoCheckBox);
    newTodoWrapper.appendChild(newTodoMainContent);
    listExtendedTodosElement.appendChild(newTodoWrapper);
    changeCheckBoxStateStyle(todo, listTitle, newTodoWrapper);
  });

  extendedViewScrollSection.appendChild(listExtendedTodosElement);
  extendedViewArticle.appendChild(extendedViewScrollSection);

  checkAllTodosPriority(listTitle);
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

// Create a quick-add-todo element on the page that allows the user to quickly add a todo to the specified list.
const createQuickAddTodoElement = (listTitle) => {
  removeQuickAddTodoElement();

  const quickAddTodoWrapper = document.createElement("div");
  quickAddTodoWrapper.classList.add("quick-add-todo-wrapper");

  const quickAddTodoInputWrapper = document.createElement("div");
  quickAddTodoInputWrapper.classList.add("quick-add-todo-input-wrapper");

  const quickAddTodoInput = document.createElement("input");
  quickAddTodoInput.classList.add("quick-add-todo-input");
  quickAddTodoInput.placeholder = "Click to quickly add a todo";

  const quickAddTodoButton = document.createElement("button");
  quickAddTodoButton.id = "quick-add-todo-button";

  quickAddTodoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      createTodoFromQuickAdd(quickAddTodoInput, quickAddTodoWrapper, listTitle);
    }
  });

  quickAddTodoButton.addEventListener("click", () => {
    createTodoFromQuickAdd(quickAddTodoInput, quickAddTodoWrapper, listTitle);
  });

  quickAddTodoInputWrapper.appendChild(quickAddTodoInput);
  quickAddTodoWrapper.appendChild(quickAddTodoInputWrapper);
  quickAddTodoWrapper.appendChild(quickAddTodoButton);

  extendedViewScrollSection.appendChild(quickAddTodoWrapper);
  extendedViewArticle.appendChild(extendedViewScrollSection);
};

// Create a todo based on the input provided by the quick add todo element.
// The new todo is added to the specified list, and any necessary updates to the page are made.
const createTodoFromQuickAdd = (
  quickAddTodoInput,
  quickAddTodoWrapper,
  listTitle
) => {
  let originalTodoTitle = quickAddTodoInput.value;

  let todoTitle = quickAddTodoInput.value
    .trim()
    .replace(/  +/g, " ")
    .replace(/[^a-zA-Z0-9\-_:]/g, "-");

  if (todoTitle.length !== 0) {
    if (myListsCheckIfTodoDuplicate(listTitle, todoTitle) === false) {
      toDoSendToFactory(todoTitle, originalTodoTitle);
      myListsAddToDo(mainList[listTitle], mainToDo[todoTitle]);
    } else {
      myListsIncrementTodoCopyName(listTitle, todoTitle);
    }

    updateListTodoCount();
    createListExtendedTodos(listTitle);
    quickAddTodoInput.value = null;

    extendedViewScrollSection.appendChild(quickAddTodoWrapper);
    extendedViewArticle.insertBefore(
      extendedViewScrollSection,
      extendedViewArticle.firstChild
    );
  }
};

// If a quick add todo element already exists, remove it
const removeQuickAddTodoElement = () => {
  const quickAddTodoElement = document.querySelector(".quick-add-todo-wrapper");

  if (quickAddTodoElement) {
    quickAddTodoElement.remove();
  }
};

function handleTodoClick(element, listTitle, todoName) {
  element.classList.add("todo-wrapped-clicked");
  createExtendedMainContent(listTitle, todoName);
}

function removeClickedClass(todoElements) {
  for (let i = 0; i < todoElements.length; i++) {
    todoElements[i].classList.remove("todo-wrapped-clicked");
  }
}

export {
  createListExtendedTodos,
  removeExtendedTodosView,
  removeExtendedTodosContent,
  createQuickAddTodoElement,
};

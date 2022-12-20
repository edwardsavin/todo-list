import { format } from "date-fns";
import { myListsChangeTodoList } from "../../functions/mylists/my-lists-changers";
import { mainList } from "../../functions/mylists/my-lists-factory-function";
import {
  toDoChangeDueDate,
  toDoChangePriority,
} from "../../functions/todo/todo-changers";
import { mainToDo } from "../../functions/todo/todo-factory-function";
import { createExtendedMainContent } from "../block-list-extended-base";
import {
  createListExtendedTodos,
  createQuickAddTodoElement,
} from "../block-list-extended-todos";
import { updateListTodoCount } from "../block-my-lists-elements/active-lists-container";

// Create todo main content details div
const createMainContentDetails = (listTitle, todoName) => {
  const mainContentDetails = document.createElement("div");
  mainContentDetails.classList.add("main-content-details");

  const todoTitleWrapper = createContentDetailsTitle(todoName);
  const todoEditButtonsWrapper = createContentDetailsButtons(
    listTitle,
    todoName
  );

  mainContentDetails.appendChild(todoTitleWrapper);
  mainContentDetails.appendChild(todoEditButtonsWrapper);

  return mainContentDetails;
};

// Create todo main content details title
const createContentDetailsTitle = (todoName) => {
  const todoTitleWrapper = document.createElement("div");
  todoTitleWrapper.classList.add("todo-title-wrapper");

  const todoTitleElement = document.createElement("div");
  todoTitleElement.classList.add("main-content-details-title");
  todoTitleElement.id = `main-content-details-title-${todoName}`;
  todoTitleElement.textContent = todoName;

  todoTitleWrapper.appendChild(todoTitleElement);

  return todoTitleWrapper;
};

// Create todo main content details buttons
const createContentDetailsButtons = (listTitle, todoName) => {
  const todoEditButtonsWrapper = document.createElement("div");
  todoEditButtonsWrapper.classList.add("todo-edit-buttons-wrapper");

  const todoEditDateButton = createTodoDateButton(listTitle, todoName);

  const todoMoveToListButton = createMoveToListButton(listTitle, todoName);

  const todoEditPriorityButton = createEditPriorityButton(listTitle, todoName);

  todoEditButtonsWrapper.appendChild(todoEditDateButton);
  todoEditButtonsWrapper.appendChild(todoMoveToListButton);
  todoEditButtonsWrapper.appendChild(todoEditPriorityButton);

  return todoEditButtonsWrapper;
};

// Create main section details todo-edit-date button
const createTodoDateButton = (listTitle, todoName) => {
  const todoEditDateButton = document.createElement("button");
  todoEditDateButton.classList.add("todo-edit-date");
  todoEditDateButton.id = `todo-edit-date-${todoName}`;

  if (
    mainToDo[todoName].dueDate === undefined ||
    mainToDo[todoName].dueDate === ""
  ) {
    todoEditDateButton.innerHTML = `<i class="fa-regular fa-bell"></i> Set date`;
  } else {
    todoEditDateButton.innerHTML = `<i class="fa-regular fa-bell"></i> ${mainList[listTitle].todos[todoName].dueDate}`;
  }

  todoEditDateButton.addEventListener("click", () => {
    createDatePicker(listTitle, todoName);
  });

  return todoEditDateButton;
};

// Prompt a date picker to set the date for the todo
const createDatePicker = (listTitle, todoName) => {
  const mainContentDetails = document.querySelector(".main-content-details");

  const todoDatePickerWrapper = document.createElement("div");
  todoDatePickerWrapper.classList.add("todo-date-picker-wrapper");

  if (document.querySelector(".todo-date-picker-wrapper")) {
    console.log("date picker exists");
    todoDatePickerWrapper.remove();

    return;
  }

  const todoDatePickerLabel = document.createElement("label");
  todoDatePickerLabel.for = `${todoName}-date-picker`;

  const todoDatePicker = document.createElement("input");
  todoDatePicker.classList.add("todo-date-picker");
  todoDatePicker.type = "date";
  todoDatePicker.id = `${todoName}-date-picker`;
  todoDatePicker.name = `${todoName}-date-picker`;

  const datePickerButtonsWrapper = document.createElement("div");
  datePickerButtonsWrapper.classList.add("date-picker-buttons-wrapper");

  const datePickerSubmitButton = document.createElement("button");
  datePickerSubmitButton.classList.add("date-picker-button");
  datePickerSubmitButton.classList.add("date-picker-submit");
  datePickerSubmitButton.id = `${todoName}-date-picker-submit`;
  datePickerSubmitButton.textContent = "Submit";

  const datePickerCloseButton = document.createElement("button");
  datePickerCloseButton.classList.add("date-picker-button");
  datePickerCloseButton.classList.add("date-picker-close");
  datePickerCloseButton.id = `${todoName}-date-picker-close`;
  datePickerCloseButton.textContent = "Close";

  datePickerButtonsWrapper.appendChild(datePickerCloseButton);
  datePickerButtonsWrapper.appendChild(datePickerSubmitButton);

  todoDatePickerWrapper.appendChild(todoDatePickerLabel);
  todoDatePickerWrapper.appendChild(todoDatePicker);
  todoDatePickerWrapper.appendChild(datePickerButtonsWrapper);

  mainContentDetails.appendChild(todoDatePickerWrapper);

  datePickerSubmitButton.addEventListener("click", () => {
    const newDate = format(new Date(todoDatePicker.value), "MMM dd, yyyy");
    todoDatePickerWrapper.remove();

    toDoChangeDueDate(mainList[listTitle].todos[todoName], newDate);
    updateTodoDateDom(listTitle, todoName);
  });

  datePickerCloseButton.addEventListener("click", () => {
    todoDatePickerWrapper.remove();
  });
};

// Update the todo date in the DOM
const updateTodoDateDom = (listTitle, todoName) => {
  const extendedTodoMain = document.querySelector(
    `#extended-todo-main-content-${todoName}`
  );

  const extendedTodoDate = extendedTodoMain.querySelector(
    ".extended-todo-main-date"
  );

  extendedTodoDate.textContent = mainList[listTitle].todos[todoName].dueDate;

  const todoDateButton = document.querySelector(`#todo-edit-date-${todoName}`);
  todoDateButton.innerHTML = `<i class="fa-regular fa-bell"></i> ${mainList[listTitle].todos[todoName].dueDate}`;
};

// Create main section details todo-move-to-list button
const createMoveToListButton = (listTitle, todoName) => {
  const todoMoveToListButton = document.createElement("button");
  todoMoveToListButton.classList.add("todo-move-to-list");
  todoMoveToListButton.id = `todo-move-to-list-${todoName}`;
  todoMoveToListButton.innerHTML = `<i class="fa-regular fa-file-lines"></i> ${listTitle}`;

  todoMoveToListButton.addEventListener("click", () => {
    createListPicker(listTitle, todoName);
  });

  return todoMoveToListButton;
};

// Prompt a list picker to move the todo to another list
const createListPicker = (listTitle, todoName) => {
  const mainContentDetails = document.querySelector(".main-content-details");

  const listPickerWrapper = document.createElement("div");
  listPickerWrapper.classList.add("list-picker-wrapper");

  if (document.querySelector(".list-picker-wrapper")) {
    listPickerWrapper.remove();

    return;
  }

  const listPickerLabel = document.createElement("label");
  listPickerLabel.for = `${todoName}-list-picker`;

  const listPicker = document.createElement("select");
  listPicker.id = `${todoName}-list-picker`;
  listPicker.name = `${todoName}-list-picker`;

  for (let list in mainList) {
    const listOption = document.createElement("option");
    listOption.value = list;
    listOption.textContent = list;
    listPicker.appendChild(listOption);
  }

  const listPickerSubmitButton = document.createElement("button");
  listPickerSubmitButton.id = `${todoName}-list-picker-submit`;
  listPickerSubmitButton.textContent = "Submit";

  const listPickerCloseButton = document.createElement("button");
  listPickerCloseButton.id = `${todoName}-list-picker-close`;
  listPickerCloseButton.textContent = "Close";

  listPickerWrapper.appendChild(listPickerLabel);
  listPickerWrapper.appendChild(listPicker);
  listPickerWrapper.appendChild(listPickerSubmitButton);
  listPickerWrapper.appendChild(listPickerCloseButton);

  mainContentDetails.appendChild(listPickerWrapper);

  listPickerSubmitButton.addEventListener("click", () => {
    const selectedList = listPicker.value;
    listPickerWrapper.remove();

    myListsChangeTodoList(
      mainList[listTitle],
      todoName,
      mainList[selectedList]
    );
    updateListTodoCount();

    createListExtendedTodos(listTitle);
    createQuickAddTodoElement(listTitle);
    createExtendedMainContent(selectedList, todoName);
  });

  listPickerCloseButton.addEventListener("click", () => {
    listPickerWrapper.remove();
  });
};

// Create main section details todo-edit-priority button
const createEditPriorityButton = (listTitle, todoName) => {
  const todoEditPriorityButton = document.createElement("button");
  todoEditPriorityButton.classList.add("todo-edit-priority");
  todoEditPriorityButton.id = `todo-edit-priority-${todoName}`;
  todoEditPriorityButton.innerHTML = `<i class="fa-solid fa-fire"></i> Set priority`;

  todoEditPriorityButton.addEventListener("click", () => {
    editTodoPriority(listTitle, todoName);
  });

  return todoEditPriorityButton;
};

// Edit the todo priority
const editTodoPriority = (listTitle, todoName) => {
  toDoChangePriority(mainList[listTitle].todos[todoName]);
  updateTodoPriorityDom(listTitle, todoName);
};

// Update the todo priority in the DOM
const updateTodoPriorityDom = (listTitle, todoName) => {
  const priorityStatus = mainList[listTitle].todos[todoName].priority;

  const todoPriorityButton = document.querySelector(
    `#todo-edit-priority-${todoName}`
  );

  const extendedTodoMain = document.querySelector(
    `#extended-todo-main-content-${todoName}`
  );

  // Check if the priority status is truthy
  if (priorityStatus) {
    // Check if the elements exist and add the active classes
    if (extendedTodoMain) {
      const extendedTodoMainContent = extendedTodoMain.querySelector(
        ".extended-todo-main-content"
      );
      extendedTodoMainContent.classList.add(
        "extended-todo-main-content-priority"
      );
    }
    if (todoPriorityButton) {
      todoPriorityButton.classList.add("todo-priority-button-active");
    }
  } else {
    // Check if the elements exist and remove the active classes
    if (extendedTodoMain) {
      const extendedTodoMainContent = extendedTodoMain.querySelector(
        ".extended-todo-main-content"
      );
      extendedTodoMainContent.classList.remove(
        "extended-todo-main-content-priority"
      );
    }
    if (todoPriorityButton) {
      todoPriorityButton.classList.remove("todo-priority-button-active");
    }
  }
};

// Check all todos priority
const checkAllTodosPriority = (listTitle) => {
  Object.keys(mainList[listTitle].todos).forEach((todo) => {
    updateTodoPriorityDom(listTitle, todo);
  });
};

export {
  createMainContentDetails,
  updateTodoPriorityDom,
  checkAllTodosPriority,
};

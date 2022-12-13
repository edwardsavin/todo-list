import {
  toDoAddSubtask,
  toDoChangeSubTaskContent,
  toDoChangeSubTaskCheckBox,
} from "../../functions/todo/todo-changers";
import { mainList } from "../../functions/mylists/my-lists-factory-function";

// Create todo main content subtasks elements
const createMainContentSubtasks = (listTitle, todoName) => {
  const mainContentSubtasks = document.createElement("div");
  mainContentSubtasks.classList.add("main-content-subtasks");
  mainContentSubtasks.id = `main-content-subtasks-${todoName}`;

  const subtasksTitle = document.createElement("h3");
  subtasksTitle.classList.add("subtasks-title");
  subtasksTitle.textContent = "Subtasks";

  const subtaskCreateButton = createSubtaskButton(listTitle, todoName);

  mainContentSubtasks.appendChild(subtasksTitle);
  mainContentSubtasks.appendChild(subtaskCreateButton);

  return mainContentSubtasks;
};

// Create subtask creator button element
const createSubtaskButton = (listTitle, todoName) => {
  const createSubtaskWrapper = document.createElement("div");
  createSubtaskWrapper.classList.add("create-subtask-wrapper");

  const createSubtaskCheckbox = document.createElement("div");
  createSubtaskCheckbox.classList.add("create-subtask-checkbox");
  createSubtaskCheckbox.classList.add("checkbox");

  const createSubtaskButton = document.createElement("button");
  createSubtaskButton.classList.add("create-subtask-button");
  createSubtaskButton.classList.add("button");
  createSubtaskButton.textContent = "Add a new subtask";

  createSubtaskButton.onclick = () => {
    createSubtaskInput(listTitle, todoName);
  };

  createSubtaskWrapper.appendChild(createSubtaskCheckbox);
  createSubtaskWrapper.appendChild(createSubtaskButton);

  return createSubtaskWrapper;
};

// Create subtask input element
const createSubtaskInput = (
  listTitle,
  todoName,
  presentSubtaskId,
  presentSubtask = undefined
) => {
  const mainContentSubtasks = document.querySelector(
    `#main-content-subtasks-${todoName}`
  );

  const createSubtaskWrapper = document.querySelector(
    ".create-subtask-wrapper"
  );

  const subtaskInputWrapper = document.createElement("div");
  subtaskInputWrapper.classList.add("subtask-input-wrapper");
  subtaskInputWrapper.id = `subtask-input-wrapper-${presentSubtaskId}`;

  const subtaskCheckbox = document.createElement("input");
  subtaskCheckbox.classList.add("subtask-checkbox");
  subtaskCheckbox.classList.add("checkbox");
  subtaskCheckbox.type = "checkbox";
  subtaskCheckbox.onchange = () => {
    changeSubtaskStatus(
      listTitle,
      mainList[listTitle].todos[todoName],
      presentSubtaskId,
      subtaskCheckbox.checked
    );
  };

  const subtaskInput = document.createElement("input");
  subtaskInput.classList.add("subtask-input");
  subtaskInput.classList.add("text-input");
  subtaskInput.type = "text";

  const formattedListTitle = listTitle.toLowerCase().replaceAll(" ", "-");

  // If present subtask is defined, add it to the DOM
  if (presentSubtask !== undefined) {
    subtaskCheckbox.id = `${formattedListTitle}-checkbox-${presentSubtaskId}`;

    subtaskInput.id = `${formattedListTitle}-subtask-${presentSubtaskId}`;
    subtaskInput.value = `${presentSubtask}`;

    subtaskInput.onblur = () => {
      toDoChangeSubTaskContent(
        mainList[listTitle].todos[todoName],
        presentSubtaskId,
        subtaskInput.value
      );
    };
  }

  // Else, create a new subtask input
  else {
    let subtaskCheckboxId = `${formattedListTitle}-checkbox-${mainList[listTitle].todos[todoName].subtasks.length}`;
    subtaskCheckbox.id = `${formattedListTitle}-checkbox-${subtaskCheckboxId}`;

    let subtaskInputId = `${formattedListTitle}-subtask-${mainList[listTitle].todos[todoName].subtasks.length}`;
    subtaskInput.id = `${formattedListTitle}-subtask-${subtaskInputId}`;
    subtaskInput.onblur = () => {
      toDoAddSubtask(mainList[listTitle].todos[todoName], subtaskInput.value);
    };
  }

  mainContentSubtasks.insertBefore(subtaskInputWrapper, createSubtaskWrapper);
  subtaskInputWrapper.appendChild(subtaskCheckbox);
  subtaskInputWrapper.appendChild(subtaskInput);
};

// Update subtask dom
function updateSubtaskDom(listTitle, todoName) {
  let todoSubtasks = mainList[listTitle].todos[todoName].subtasks;

  Object.keys(todoSubtasks).forEach((subtaskId) => {
    let subtaskName = todoSubtasks[subtaskId].subtaskName;

    createSubtaskInput(listTitle, todoName, subtaskId, subtaskName);
  });
}

// Change subtask status
function changeSubtaskStatus(listTitle, todo, subtaskId, status) {
  toDoChangeSubTaskCheckBox(todo, subtaskId);

  const formattedListTitle = listTitle.toLowerCase().replaceAll(" ", "-");

  const subtaskCheckBox = document.querySelector(
    `#${formattedListTitle}-checkbox-${subtaskId}`
  );
  const subtaskInput = document.querySelector(
    `#${formattedListTitle}-subtask-${subtaskId}`
  );

  if (status) {
    subtaskCheckBox.classList.add("subtask-checkbox-checked");
    subtaskInput.classList.add("subtask-input-checked");
  } else {
    subtaskCheckBox.classList.remove("subtask-checkbox-checked");
    subtaskInput.classList.remove("subtask-input-checked");
  }
}

export { createMainContentSubtasks, updateSubtaskDom };

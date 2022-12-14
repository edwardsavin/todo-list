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

  createSubtaskButton.addEventListener("click", () => {
    createSubtaskInput(listTitle, todoName);
  });

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

  const subtaskCheckbox = document.createElement("button");
  subtaskCheckbox.classList.add("subtask-checkbox");
  subtaskCheckbox.classList.add("checkbox");
  subtaskCheckbox.textContent = "O";
  subtaskCheckbox.onclick = () => {
    changeSubtaskStatus(listTitle, todoName, presentSubtaskId);
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
    subtaskInput.value = presentSubtask;

    subtaskInput.onblur = () => {
      if (subtaskInput.value.trim() === "") {
        subtaskInput.value = presentSubtask;
      } else {
        toDoChangeSubTaskContent(
          mainList[listTitle].todos[todoName],
          presentSubtaskId,
          subtaskInput.value
        );
      }
    };

    subtaskInput.onkeyup = (e) => {
      if (e.key === "Enter") {
        if (subtaskInput.value.trim() === "") {
          subtaskInput.value = presentSubtask;
          subtaskInput.blur();
        } else {
          toDoChangeSubTaskContent(
            mainList[listTitle].todos[todoName],
            presentSubtaskId,
            subtaskInput.value
          );

          subtaskInput.blur();
        }
      }
    };
  }

  // Else, create a new subtask input
  else {
    const inputCreated = document.querySelector(
      "#subtask-input-wrapper-undefined"
    );

    if (inputCreated) {
      return;
    }

    const subtaskCheckboxId = `${formattedListTitle}-checkbox-${mainList[listTitle].todos[todoName].subtasks.length}`;
    subtaskCheckbox.id = subtaskCheckboxId;

    const subtaskInputId = `${formattedListTitle}-subtask-${mainList[listTitle].todos[todoName].subtasks.length}`;
    subtaskInput.id = subtaskInputId;

    subtaskInput.onblur = () => {
      handleCreateSubtaskInput(
        listTitle,
        todoName,
        subtaskInput,
        subtaskInputWrapper
      );
    };

    subtaskInput.onkeyup = (e) => {
      if (e.key === "Enter") {
        handleCreateSubtaskInput(
          listTitle,
          todoName,
          subtaskInput,
          subtaskInputWrapper
        );
        createSubtaskInput(listTitle, todoName);

        const subtaskInputUndefined = document.querySelector(
          `#${formattedListTitle}-subtask-undefined`
        );
        subtaskInputUndefined.focus();
      }
    };
  }

  mainContentSubtasks.insertBefore(subtaskInputWrapper, createSubtaskWrapper);
  subtaskInputWrapper.appendChild(subtaskCheckbox);
  subtaskInputWrapper.appendChild(subtaskInput);
};

// Update subtask on DOM
function updateSubtaskDom(listTitle, todoName) {
  removeSubtaskInputWrappers();

  let todoSubtasks = mainList[listTitle].todos[todoName].subtasks;

  Object.keys(todoSubtasks).forEach((subtaskId) => {
    let subtaskName = todoSubtasks[subtaskId].subtaskName;

    createSubtaskInput(listTitle, todoName, subtaskId, subtaskName);
  });
}

// Change subtask status
function changeSubtaskStatus(listTitle, todoName, subtaskId) {
  toDoChangeSubTaskCheckBox(mainList[listTitle].todos[todoName], subtaskId);
  updateSubtaskStatusDom(listTitle, todoName);
}

// Update subtask status on DOM
function updateSubtaskStatusDom(listTitle, todoName) {
  let todo = mainList[listTitle].todos[todoName];
  let todoSubtasks = todo.subtasks;

  Object.keys(todoSubtasks).forEach((subtaskId) => {
    const status = todo.subtasks[subtaskId].subtaskCheckBox;
    const formattedListTitle = listTitle.toLowerCase().replaceAll(" ", "-");

    const subtaskCheckBox = document.querySelector(
      `#${formattedListTitle}-checkbox-${subtaskId}`
    );
    const subtaskInput = document.querySelector(
      `#${formattedListTitle}-subtask-${subtaskId}`
    );

    if (status === true) {
      subtaskCheckBox.classList.add("subtask-checkbox-checked");
      subtaskInput.classList.add("subtask-input-checked");

      subtaskCheckBox.textContent = "✓";
    } else {
      subtaskCheckBox.classList.remove("subtask-checkbox-checked");
      subtaskInput.classList.remove("subtask-input-checked");

      subtaskCheckBox.textContent = "O";
    }
  });
}

function removeSubtaskInputWrappers() {
  const subtaskInputWrappers = document.querySelectorAll(
    ".subtask-input-wrapper"
  );

  subtaskInputWrappers.forEach((subtaskInputWrapper) => {
    subtaskInputWrapper.remove();
  });
}

function handleCreateSubtaskInput(
  listTitle,
  todoName,
  subtaskInput,
  subtaskInputWrapper
) {
  if (subtaskInput.value.trim() === "") {
    subtaskInputWrapper.remove();
  } else {
    toDoAddSubtask(mainList[listTitle].todos[todoName], subtaskInput.value);
    updateSubtaskDom(listTitle, todoName);
    updateSubtaskStatusDom(listTitle, todoName);
  }
}

export { createMainContentSubtasks, updateSubtaskDom, updateSubtaskStatusDom };

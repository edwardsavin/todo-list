import {
  createMainContentHeader,
  updateMarkIconStyle,
} from "./block-list-extended-elements/extended-base-header";
import {
  createMainContentDetails,
  updateTodoPriorityDom,
} from "./block-list-extended-elements/extended-base-details";
import { createMainContentNotes } from "./block-list-extended-elements/extended-base-notes";
import {
  createMainContentSubtasks,
  updateSubtaskDom,
  updateSubtaskStatusDom,
} from "./block-list-extended-elements/extended-base-subtasks";
import { mainToDo } from "../functions/todo/todo-factory-function";

const extendedViewArticle = document.querySelector(".extended-view-article");

const extendedViewMainSection = document.createElement("section");
extendedViewMainSection.classList.add("extended-view-main-section");

const createExtendedMainContent = (listTitle, todoName) => {
  removeExtendedMainContent();

  const extendedViewMainContent = document.createElement("div");
  extendedViewMainContent.classList.add("extended-view-main-content");
  extendedViewMainContent.id = `main-content-${todoName}`;

  const mainContentHeader = createMainContentHeader(listTitle, todoName);
  const mainContentDetails = createMainContentDetails(listTitle, todoName);
  const mainContentNotes = createMainContentNotes(listTitle, todoName);
  const mainContentSubtasks = createMainContentSubtasks(listTitle, todoName);

  extendedViewMainContent.appendChild(mainContentHeader);
  extendedViewMainContent.appendChild(mainContentDetails);
  extendedViewMainContent.appendChild(mainContentNotes);
  extendedViewMainContent.appendChild(mainContentSubtasks);

  extendedViewMainSection.appendChild(extendedViewMainContent);
  extendedViewArticle.appendChild(extendedViewMainSection);

  updateTodoPriorityDom(listTitle, todoName);
  updateSubtaskDom(listTitle, todoName);
  updateSubtaskStatusDom(listTitle, todoName);

  disableMainContentElements(todoName);
};

// Remove the extended view main content from the DOM
const removeExtendedMainContent = () => {
  const extendedViewMainContent = extendedViewMainSection.querySelector(
    ".extended-view-main-content"
  );

  if (extendedViewMainContent) {
    extendedViewMainContent.parentElement.remove();
    extendedViewMainContent.remove();
  }
};

// Remove the extended view main section from the DOM
const removeExtendedMainSection = () => {
  const extendedViewMainSection = document.querySelector(
    ".extended-view-main-section"
  );

  if (extendedViewMainSection) {
    extendedViewMainSection.remove();
  }
};

// Disable the main content elements when the todo is marked as completed
const disableMainContentElements = (todoName) => {
  const mainContentDetails = document.querySelector(".main-content-details");
  const mainContentNotes = document.querySelector(".main-content-notes");
  const mainContentSubtasks = document.querySelector(".main-content-subtasks");

  if (mainToDo[todoName].checkBox === true) {
    updateMarkIconStyle(todoName);

    mainContentDetails.classList.add("content-disabled");
    mainContentNotes.classList.add("content-disabled");
    mainContentSubtasks.classList.add("content-disabled");
  } else {
    updateMarkIconStyle(todoName);

    mainContentDetails.classList.remove("content-disabled");
    mainContentNotes.classList.remove("content-disabled");
    mainContentSubtasks.classList.remove("content-disabled");
  }
};

export {
  createExtendedMainContent,
  removeExtendedMainContent,
  removeExtendedMainSection,
  disableMainContentElements,
};

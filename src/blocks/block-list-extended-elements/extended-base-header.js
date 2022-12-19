import { removeExtendedMainContent } from "../block-list-extended-base";
import { activateCheckBox } from "./extended-todo-checkbox";

// Create the main content header
const createMainContentHeader = (listTitle, todoName) => {
  const mainContentHeader = document.createElement("header");
  mainContentHeader.classList.add("main-content-header");

  const mainContentListTitle = document.createElement("div");
  mainContentListTitle.classList.add("main-content-list-title");
  mainContentListTitle.textContent = `My lists > ${listTitle}`;

  const mainContentExtraActions = document.createElement("div");
  mainContentExtraActions.classList.add("main-content-extra-actions");

  const extraActionsMark = document.createElement("button");
  extraActionsMark.classList.add("extra-actions-mark");
  extraActionsMark.id = `extra-actions-mark-${todoName}`;

  const extraActionsClose = document.createElement("button");
  extraActionsClose.classList.add("extra-actions-close");
  extraActionsClose.id = `extra-actions-close-${todoName}`;

  extraActionsMark.addEventListener("click", () => {
    activateCheckBox(todoName, listTitle, false);
  });

  extraActionsClose.addEventListener("click", () => {
    removeExtendedMainContent();
  });

  mainContentExtraActions.appendChild(extraActionsMark);
  mainContentExtraActions.appendChild(extraActionsClose);

  mainContentHeader.appendChild(mainContentListTitle);
  mainContentHeader.appendChild(mainContentExtraActions);

  return mainContentHeader;
};

export { createMainContentHeader };

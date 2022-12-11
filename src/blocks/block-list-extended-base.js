import { activateCheckBox } from "./block-list-extended-elements/extended-todo-checkbox";

const listExtendedViewElement = document.querySelector(".list-extended-view");

const extendedViewMainSection = document.createElement("section");
extendedViewMainSection.classList.add("extended-view-main-section");

const createExtendedMainContent = (listTitle, todoName) => {
  removeExtendedMainContent();

  const extendedViewMainContent = document.createElement("div");
  extendedViewMainContent.classList.add("extended-view-main-content");
  extendedViewMainContent.id = `main-content-${todoName}`;

  const mainContentHeader = createMainContentHeader(listTitle, todoName);

  extendedViewMainContent.appendChild(mainContentHeader);

  extendedViewMainSection.appendChild(extendedViewMainContent);
  listExtendedViewElement.appendChild(extendedViewMainSection);
};

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
  extraActionsMark.textContent = "✓";

  const extraActionsClose = document.createElement("button");
  extraActionsClose.classList.add("extra-actions-close");
  extraActionsClose.id = `extra-actions-close-${todoName}`;
  extraActionsClose.textContent = "X";

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

// Remove the extended view main content from the DOM
const removeExtendedMainContent = () => {
  const extendedViewMainContent = document.querySelector(
    ".extended-view-main-content"
  );

  if (extendedViewMainContent) {
    extendedViewMainContent.remove();
  }
};

export { createExtendedMainContent };

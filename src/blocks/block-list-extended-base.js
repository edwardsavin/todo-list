import { createMainContentHeader } from "./block-list-extended-elements/extended-base-header";
import {
  createMainContentDetails,
  updateTodoPriorityDom,
} from "./block-list-extended-elements/extended-base-details";

const listExtendedViewElement = document.querySelector(".list-extended-view");

const extendedViewMainSection = document.createElement("section");
extendedViewMainSection.classList.add("extended-view-main-section");

const createExtendedMainContent = (listTitle, todoName) => {
  removeExtendedMainContent();

  const extendedViewMainContent = document.createElement("div");
  extendedViewMainContent.classList.add("extended-view-main-content");
  extendedViewMainContent.id = `main-content-${todoName}`;

  const mainContentHeader = createMainContentHeader(listTitle, todoName);
  const mainContentDetails = createMainContentDetails(listTitle, todoName);

  extendedViewMainContent.appendChild(mainContentHeader);
  extendedViewMainContent.appendChild(mainContentDetails);

  extendedViewMainSection.appendChild(extendedViewMainContent);
  listExtendedViewElement.appendChild(extendedViewMainSection);

  updateTodoPriorityDom(listTitle, todoName);
};

// Remove the extended view main content from the DOM
const removeExtendedMainContent = () => {
  const extendedViewMainContent = extendedViewMainSection.querySelector(
    ".extended-view-main-content"
  );

  if (extendedViewMainContent) {
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

export { createExtendedMainContent, removeExtendedMainSection };

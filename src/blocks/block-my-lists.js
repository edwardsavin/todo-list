import { addElementCreateListModal } from "./block-my-lists-elements/create-list-modal";
const elementCreateListButton = document.querySelector(
  "#my-lists-container-header-add-list"
);
elementCreateListButton.addEventListener("click", addElementCreateListModal);

const elementActiveLists = document.querySelector("#my-lists-container-lists");

export { elementCreateListButton, elementActiveLists };

import { addElementCreateListModal } from "./block-my-lists-elements/create-list-modal";
const elementMyListsContainer = document.querySelector(".my-lists-container");

const elementCreateList = document.querySelector(
  "#my-lists-container-header-add-list"
);
elementCreateList.addEventListener("click", addElementCreateListModal);

export { elementCreateList };

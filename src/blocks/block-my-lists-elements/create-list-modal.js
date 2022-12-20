import { myListsSendToFactory } from "../../functions/mylists/my-lists-changers";
import { addListInActiveListContainer } from "./active-lists-container";

const addElementCreateListModal = () => {
  const elementMyListsContainer = document.querySelector(".my-lists-container");

  if (!document.querySelector("#my-lists-create-modal")) {
    const elementCreateListModal = document.createElement("div");
    elementCreateListModal.setAttribute("id", "my-lists-create-modal");
    elementCreateListModal.classList.add("modal");

    const elementModalContent = document.createElement("div");
    elementModalContent.classList.add("modal-content");

    const elementModalTitle = document.createElement("div");
    elementModalTitle.classList.add("modal-title");
    elementModalTitle.textContent = "CREATE A LIST";

    const elementModalTextInput = document.createElement("input");
    elementModalTextInput.setAttribute(
      "id",
      "my-lists-create-modal-text-input"
    );
    elementModalTextInput.classList.add("text-input");

    const elementModalButtonsWrapper = document.createElement("div");
    elementModalButtonsWrapper.classList.add("modal-buttons-wrapper");

    const elementModalCreateButton = document.createElement("button");
    elementModalCreateButton.textContent = "Create";
    elementModalCreateButton.setAttribute("id", "button-modal-create");
    elementModalCreateButton.classList.add("button");
    elementModalCreateButton.classList.add("button-modal-create-list");

    const elementModalButtonsSeparator = document.createElement("div");
    elementModalButtonsSeparator.classList.add("modal-buttons-separator");

    const elementModalCancelButton = document.createElement("button");
    elementModalCancelButton.textContent = "Cancel";
    elementModalCancelButton.setAttribute("id", "button-modal-cancel");
    elementModalCancelButton.classList.add("button");
    elementModalCancelButton.classList.add("button-modal-create-list");

    elementModalButtonsWrapper.appendChild(elementModalCancelButton);
    elementModalButtonsWrapper.appendChild(elementModalButtonsSeparator);
    elementModalButtonsWrapper.appendChild(elementModalCreateButton);

    elementModalContent.appendChild(elementModalTitle);
    elementModalContent.appendChild(elementModalTextInput);
    elementModalContent.appendChild(elementModalButtonsWrapper);

    elementCreateListModal.appendChild(elementModalContent);

    elementMyListsContainer.appendChild(elementCreateListModal);

    // Focus the text input
    elementModalTextInput.focus();

    /**
     * Call myListsSendToFactory and send the value from elementModalTextInput to it
     * After that, remove the modal
     */
    const createNewList = () => {
      let newListName = elementModalTextInput.value.trim();
      if (newListName !== "") {
        myListsSendToFactory(newListName);
        addListInActiveListContainer(newListName);

        elementModalTextInput.value = null;
        elementMyListsContainer.removeChild(elementCreateListModal);
      }
    };

    // Cancel the new list creation and remove the modal
    const cancelNewList = () => {
      elementModalTextInput.value = null;
      elementMyListsContainer.removeChild(elementCreateListModal);
    };

    // If the user press enter, call createNewList
    elementCreateListModal.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        createNewList();
      }
    });

    // If the user click outside the modal, call cancelNewList
    elementCreateListModal.addEventListener("click", (event) => {
      if (event.target === elementCreateListModal) {
        cancelNewList();
      }
    });

    elementModalCreateButton.addEventListener("click", createNewList);
    elementModalCancelButton.addEventListener("click", cancelNewList);
  }
};

export { addElementCreateListModal };

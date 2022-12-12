import { myListsSendToFactory } from "../../functions/mylists/my-lists-changers";
import { addListInActiveListContainer } from "./active-lists-container";

const addElementCreateListModal = () => {
  const elementMyListsContainer = document.querySelector(".my-lists-container");

  if (!document.querySelector("#my-lists-create-modal")) {
    const elementCreateListModal = document.createElement("div");
    elementCreateListModal.setAttribute("id", "my-lists-create-modal");
    elementCreateListModal.classList.add("modal");

    const elementModalTitle = document.createElement("div");
    elementModalTitle.classList.add("modal-title");
    elementModalTitle.textContent = "CREATE A LIST";

    const elementModalTextInput = document.createElement("input");
    elementModalTextInput.setAttribute(
      "id",
      "my-lists-create-modal-text-input"
    );
    elementModalTextInput.classList.add("text-input");

    const elementModalCreateButton = document.createElement("button");
    elementModalCreateButton.textContent = "CREATE";
    elementModalCreateButton.setAttribute("id", "button-modal-create");
    elementModalCreateButton.classList.add("button");
    elementModalCreateButton.classList.add("button-modal-create-list");

    const elementModalCancelButton = document.createElement("button");
    elementModalCancelButton.textContent = "CANCEL";
    elementModalCancelButton.setAttribute("id", "button-modal-cancel");
    elementModalCancelButton.classList.add("button");
    elementModalCancelButton.classList.add("button-modal-create-list");

    elementCreateListModal.appendChild(elementModalTitle);
    elementCreateListModal.appendChild(elementModalTextInput);
    elementCreateListModal.appendChild(elementModalCreateButton);
    elementCreateListModal.appendChild(elementModalCancelButton);

    elementMyListsContainer.appendChild(elementCreateListModal);

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

    elementCreateListModal.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        createNewList();
      }
    });
    elementModalCreateButton.addEventListener("click", createNewList);
    elementModalCancelButton.addEventListener("click", cancelNewList);
  }
};

export { addElementCreateListModal };

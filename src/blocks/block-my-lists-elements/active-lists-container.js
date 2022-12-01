import { elementActiveLists } from "../block-my-lists";
import { mainList } from "../../functions/mylists/my-lists-factory-function";

// Create a new <li> with textContent and id of created list
// Append it to my lists container
const addListInActiveListContainer = () => {
  const activeLists = document.getElementById(
    "my-lists-container-lists"
  ).childNodes;

  let listAlreadyInActiveList = false;
  let listId = "";
  let listTitle = "";

  // Check if list already present in DOM
  Object.keys(mainList).forEach((list) => {
    listId = `list-${list}`.toLowerCase();
    listTitle = list;

    activeLists.forEach((element) => {
      if (element.id.toString() === listId) {
        listAlreadyInActiveList = true;
      } else {
        listAlreadyInActiveList = false;
      }
    });
  });

  // If list is not present in DOM, create and append it to elementActiveLists
  if (!listAlreadyInActiveList) {
    let newList = document.createElement("li");
    newList.setAttribute("id", listId);
    // TODO: Find a way to use the unformatted (before myListsSendToFactory() -> formattedNewListTitle) text
    newList.textContent = listTitle;

    elementActiveLists.appendChild(newList);
  }
};

export { addListInActiveListContainer };

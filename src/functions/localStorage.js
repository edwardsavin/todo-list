import { mainList } from "./mylists/my-lists-factory-function";
import { mainToDo } from "./todo/todo-factory-function";
import { user1 } from "./user/user";

const saveToLocalStorage = () => {
  localStorage.setItem("mainList", JSON.stringify(mainList));
  localStorage.setItem("mainToDo", JSON.stringify(mainToDo));
};

const loadFromLocalStorage = () => {
  const user1FromLocalStorage = JSON.parse(localStorage.getItem("user1"));
  const mainListFromLocalStorage = JSON.parse(localStorage.getItem("mainList"));
  const mainToDoFromLocalStorage = JSON.parse(localStorage.getItem("mainToDo"));

  if (user1FromLocalStorage) {
    user1 = user1FromLocalStorage;
  }

  if (mainToDoFromLocalStorage) {
    mainToDo = mainToDoFromLocalStorage;
  }

  if (mainListFromLocalStorage) {
    mainList = mainListFromLocalStorage;
  }
};

export { saveToLocalStorage, loadFromLocalStorage };

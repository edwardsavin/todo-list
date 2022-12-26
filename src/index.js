import "./style.css";
import { mainToDo } from "./functions/todo/todo-factory-function";
import {
  toDoSendToFactory,
  toDoChangeDueDate,
  toDoChangeNotes,
} from "./functions/todo/todo-changers";
import { mainList } from "./functions/mylists/my-lists-factory-function";
import {
  myListsAddToDo,
  myListsSendToFactory,
} from "./functions/mylists/my-lists-changers";
import { user1 } from "./functions/user/user";
import { updateUserIcon, updateUserName } from "./blocks/block-user-name";
import {
  addListInActiveListContainer,
  updateListTodoCount,
} from "./blocks/block-my-lists-elements/active-lists-container";
import { loadFromLocalStorage } from "./functions/localStorage";

if (JSON.parse(localStorage.getItem("mainList")) === null) {
  myListsSendToFactory("Personal", "Personal");
  addListInActiveListContainer("Personal");

  myListsSendToFactory("Work", "Work");
  addListInActiveListContainer("Work");

  myListsSendToFactory("Grocery List", "Grocery List");
  addListInActiveListContainer("Grocery List");

  toDoSendToFactory("Make-this-todo-a-priority", "Make this todo a priority");
  toDoSendToFactory("Create-your-first-task-", "Create your first task ↓");
  myListsAddToDo(mainList["Personal"], mainToDo["Make-this-todo-a-priority"]);
  toDoChangeDueDate(mainToDo["Make-this-todo-a-priority"], "12 Dec, 2023");
  myListsAddToDo(mainList["Personal"], mainToDo["Create-your-first-task-"]);

  toDoSendToFactory("Visit-Edward-s-Portfolio", "Visit Edward's Portfolio");
  myListsAddToDo(mainList["Work"], mainToDo["Visit-Edward-s-Portfolio"]);
  toDoChangeNotes(
    mainToDo["Visit-Edward-s-Portfolio"],
    "https://edwardcs.com/"
  );

  toDoSendToFactory("Water", "Water");
  toDoSendToFactory("Eggs", "Eggs");
  toDoSendToFactory("Flour", "Flour");
  toDoSendToFactory("Apples", "Apples");
  toDoSendToFactory("Frozen-Fries", "Frozen Fries");
  myListsAddToDo(mainList["Grocery List"], mainToDo["Water"]);
  myListsAddToDo(mainList["Grocery List"], mainToDo["Eggs"]);
  myListsAddToDo(mainList["Grocery List"], mainToDo["Flour"]);
  myListsAddToDo(mainList["Grocery List"], mainToDo["Apples"]);
  myListsAddToDo(mainList["Grocery List"], mainToDo["Frozen-Fries"]);
  toDoChangeDueDate(mainToDo["Water"], "18 July, 2023");
  toDoChangeDueDate(mainToDo["Eggs"], "18 July, 2023");
  toDoChangeDueDate(mainToDo["Flour"], "18 July, 2023");
  toDoChangeDueDate(mainToDo["Apples"], "18 July, 2023");
  toDoChangeDueDate(mainToDo["Frozen-Fries"], "18 July, 2023");

  updateListTodoCount();
  updateUserIcon();
} else {
  loadFromLocalStorage();
  updateUserName(user1, true);
  updateUserIcon();

  for (let list in mainList) {
    addListInActiveListContainer(list);
    updateListTodoCount();
  }
}

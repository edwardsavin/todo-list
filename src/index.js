import "./style.css";
import { mainToDo } from "./functions/todo/todo-factory-function";
import {
  toDoSendToFactory,
  toDoChangeDueDate,
  toDoAddSubtask,
  toDoChangeSubTaskCheckBox,
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
  myListsSendToFactory("Personal");
  addListInActiveListContainer("Personal");

  myListsSendToFactory("Work");
  addListInActiveListContainer("Work");

  myListsSendToFactory("Grocery List");
  addListInActiveListContainer("Grocery List");

  toDoSendToFactory("test");
  toDoSendToFactory("test2");
  toDoSendToFactory("test3");
  toDoSendToFactory("testA");
  toDoSendToFactory("testB");
  toDoSendToFactory("testC");
  toDoSendToFactory("testD");
  toDoSendToFactory("testE");

  myListsAddToDo(mainList["Personal"], mainToDo["test"]);
  toDoChangeDueDate(mainToDo["test"], "23.09.4400");
  myListsAddToDo(mainList["Personal"], mainToDo["test2"]);
  myListsAddToDo(mainList["Work"], mainToDo["test3"]);
  myListsAddToDo(mainList["Grocery List"], mainToDo["testA"]);
  myListsAddToDo(mainList["Grocery List"], mainToDo["testB"]);
  myListsAddToDo(mainList["Grocery List"], mainToDo["testC"]);
  myListsAddToDo(mainList["Grocery List"], mainToDo["testD"]);
  myListsAddToDo(mainList["Grocery List"], mainToDo["testE"]);
  toDoChangeDueDate(mainToDo["testA"], "13.08.4000");
  toDoChangeDueDate(mainToDo["testD"], "13.08.4000");
  toDoAddSubtask(mainToDo["testA"], "SUBTASk A1");
  toDoChangeSubTaskCheckBox(mainToDo["testA"], 0);
  toDoAddSubtask(mainToDo["testA"], "SUBTASk B2");

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

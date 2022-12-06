import "./style.css";
import { toDoFactory, mainToDo } from "./functions/todo/todo-factory-function";
import {
  toDoSendToFactory,
  toDoChangeTitle,
  toDoChangeDescription,
  toDoChangeCheckBox,
  toDoChangeDueDate,
  toDoChangePriority,
  toDoChangeNotes,
  toDoAddSubtask,
  toDoDeleteSubTask,
  toDoChangeSubTaskContent,
  toDoDelete,
} from "./functions/todo/todo-changers";
import {
  myListsFactory,
  mainList,
} from "./functions/mylists/my-lists-factory-function";
import {
  myListsDeleteToDo,
  myListsDeleteAllToDos,
  myListsDelete,
  myListsAddToDo,
  myListsSendToFactory,
  myListsCheckIfListExists,
} from "./functions/mylists/my-lists-changers";
import { userFactory, user1 } from "./functions/user/user";
import { userChangeName } from "./functions/user/user-functions";
import { elementUserName, updateUserName } from "./blocks/block-user-name";
import { elementCreateListButton } from "./blocks/block-my-lists";
import {
  addListInActiveListContainer,
  updateListTodoCount,
} from "./blocks/block-my-lists-elements/active-lists-container";
import { createListToolBar } from "./blocks/block-list-toolbar";
import { createListExtendedTodos } from "./blocks/block-list-extended-todos";

myListsSendToFactory("Personal");
myListsSendToFactory("Work");
myListsSendToFactory("Grocery List");
toDoSendToFactory("test");
toDoSendToFactory("test2");
toDoSendToFactory("test3");
toDoSendToFactory("test4");
toDoSendToFactory("test5");
toDoSendToFactory("test6");

myListsAddToDo(mainList["Personal"], mainToDo["test"]);
toDoChangeDueDate(mainToDo["test"], "23.09.4400");
myListsAddToDo(mainList["Personal"], mainToDo["test2"]);
myListsAddToDo(mainList["Grocery List"], mainToDo["test5"]);
myListsAddToDo(mainList["Work"], mainToDo["test3"]);
myListsAddToDo(mainList["Grocery List"], mainToDo["test4"]);
myListsAddToDo(mainList["Grocery List"], mainToDo["test6"]);
toDoChangeDueDate(mainToDo["test4"], "13.08.4000");
toDoChangeDueDate(mainToDo["test6"], "13.08.4000");

updateListTodoCount();

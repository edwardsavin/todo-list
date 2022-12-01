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
  myListsDelete,
  myListsAddToDo,
  myListsSendToFactory,
  myListsCheckIfListExists,
} from "./functions/mylists/my-lists-changers";
import { userFactory, user1 } from "./functions/user/user";
import { userChangeName } from "./functions/user/user-functions";
import { elementUserName, updateUserName } from "./blocks/block-user-name";
import { elementCreateListButton } from "./blocks/block-my-lists";
import { addListInActiveListContainer } from "./blocks/block-my-lists-elements/active-lists-container";

myListsSendToFactory("Personal");
myListsSendToFactory("Work");
myListsSendToFactory("Grocery List");

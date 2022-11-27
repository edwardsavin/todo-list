import "./style.css";
import { toDoFactory } from "./functions/todo/todo-factory-function";
import {
  toDoChangeTitle,
  toDoChangeDescription,
  toDoChangeCheckBox,
  toDoChangeDueDate,
  toDoChangePriority,
  toDoChangeNotes,
  toDoChangeSubtasks,
  toDoDelete,
} from "./functions/todo/todo-changers";
import { myListsFactory } from "./functions/mylists/my-lists-factory-function";
import {
  myListsDeleteToDo,
  myListsDelete,
  myListsAddToDo,
} from "./functions/mylists/my-lists-changers";
import { userFactory, user1 } from "./functions/user/user";
import { userChangeName } from "./functions/user/user-functions";
import { elementUserName, updateUserName } from "./blocks/block-user-name";

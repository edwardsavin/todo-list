import { toDoFactory } from "./todo-factory-function";

// Change todo object.title
const toDoChangeTitle = (toDoName, newTitle) => {
  toDoName.title = newTitle;
};

// Change todo object.description
const toDoChangeDescription = (toDoName, newDescription) => {
  toDoName.description = newDescription;
};

// If changeCheckBox is true, change the todo object.checkBox
const toDoChangeCheckBox = (toDoName, changeCheckBox = true) => {
  if (changeCheckBox) {
    if (toDoName.checkBox === true) {
      toDoName.checkBox = false;
    } else {
      toDoName.checkBox = true;
    }
  }
};

// Change todo object.dueDate
const toDoChangeDueDate = (toDoName, newDueDate) => {
  toDoName.dueDate = newDueDate;
};

// If changePriority is true, change the todo object.priority
const toDoChangePriority = (toDoName, changePriority = true) => {
  if (changePriority) {
    if (toDoName.priority === true) {
      toDoName.priority = false;
    } else {
      toDoName.priority = true;
    }
  }
};

// Change todo object.notes
const toDoChangeNotes = (toDoName, newNote) => {
  toDoName.notes = newNote;
};

// Change todo object.subtasks
const toDoChangeSubtasks = (toDoName, ...newSubtasks) => {
  toDoName.subtasks = newSubtasks;
};

// If deleteToDo is true, iterate over every key in toDoName and change it to undefined
const toDoDelete = (toDoName, deleteToDo = true) => {
  if (deleteToDo) {
    for (let key in toDoName) {
      toDoName[key] = undefined;
    }
  }
};

export {
  toDoChangeTitle,
  toDoChangeDescription,
  toDoChangeCheckBox,
  toDoChangeDueDate,
  toDoChangePriority,
  toDoChangeNotes,
  toDoChangeSubtasks,
  toDoDelete,
};

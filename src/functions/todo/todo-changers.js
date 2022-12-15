import { toDoFactory, mainToDo } from "./todo-factory-function";
import { saveToLocalStorage } from "../localStorage";

// Send todo to factory and append to mainToDo;
const toDoSendToFactory = (
  newToDoTitle,
  description,
  checkBox = false,
  dueDate,
  priority,
  notes,
  subtasks
) => {
  if (newToDoTitle !== null) {
    mainToDo[newToDoTitle] = toDoFactory(
      newToDoTitle,
      description,
      checkBox,
      dueDate,
      priority,
      notes,
      subtasks
    );
  }

  saveToLocalStorage();
};

// Change todo object.title
const toDoChangeTitle = (toDoName, newTitle) => {
  toDoName.title = newTitle;

  saveToLocalStorage();
};

// Change todo object.description
const toDoChangeDescription = (toDoName, newDescription) => {
  toDoName.description = newDescription;

  saveToLocalStorage();
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

  saveToLocalStorage();
};

// Change todo object.dueDate
const toDoChangeDueDate = (toDoName, newDueDate) => {
  toDoName.dueDate = newDueDate;

  saveToLocalStorage();
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

  saveToLocalStorage();
};

// Change todo object.notes
const toDoChangeNotes = (toDoName, newNote) => {
  toDoName.notes = newNote;

  saveToLocalStorage();
};

// Add todo to object.subtasks
const toDoAddSubtask = (toDoName, newSubtask) => {
  let subTaskLocation = Object.keys(toDoName.subtasks).length;
  if (toDoName.subtasks[subTaskLocation]) {
    subTaskLocation += 1;
    toDoName.subtasks[subTaskLocation] = {
      subtaskName: newSubtask,
      subtaskCheckBox: false,
    };
  } else {
    toDoName.subtasks[subTaskLocation] = {
      subtaskName: newSubtask,
      subtaskCheckBox: false,
    };
  }

  saveToLocalStorage();
};

// If deleteSubtask is true, delete the subtask from todo
const toDoDeleteSubTask = (toDoName, subTaskIndex, deleteSubtask = true) => {
  if (deleteSubtask) {
    delete toDoName.subtasks[subTaskIndex];
  }

  saveToLocalStorage();
};

// Change the content of the subtask with the newSubTaskContent
const toDoChangeSubTaskContent = (
  toDoName,
  subTaskIndex,
  newSubTaskContent
) => {
  toDoName.subtasks[subTaskIndex].subtaskName = newSubTaskContent;

  saveToLocalStorage();
};

// If subtaskCheckBox is true, change the subtask checkbox
const toDoChangeSubTaskCheckBox = (toDoName, subTaskIndex) => {
  if (toDoName.subtasks[subTaskIndex].subtaskCheckBox === true) {
    toDoName.subtasks[subTaskIndex].subtaskCheckBox = false;
  } else {
    toDoName.subtasks[subTaskIndex].subtaskCheckBox = true;
  }

  saveToLocalStorage();
};

// If deleteToDo is true, delete todo from mainToDo
const toDoDelete = (toDoName, deleteToDo = true) => {
  if (deleteToDo) {
    delete mainToDo[toDoName];
  }

  saveToLocalStorage();
};

export {
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
  toDoChangeSubTaskCheckBox,
  toDoDelete,
};

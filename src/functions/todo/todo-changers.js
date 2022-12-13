import { toDoFactory, mainToDo } from "./todo-factory-function";

// TODO: mainToDo[newToDoTitle] should also have the list name.
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
};

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
};

// If deleteSubtask is true, delete the subtask from todo
const toDoDeleteSubTask = (toDoName, subTaskIndex, deleteSubtask = true) => {
  if (deleteSubtask) {
    delete toDoName.subtasks[subTaskIndex];
  }
};

// Change the content of the subtask with the newSubTaskContent
const toDoChangeSubTaskContent = (
  toDoName,
  subTaskIndex,
  newSubTaskContent
) => {
  toDoName.subtasks[subTaskIndex] = newSubTaskContent;
};

// If subtaskCheckBox is true, change the subtask checkbox
const toDoChangeSubTaskCheckBox = (toDoName, subTaskIndex) => {
  if (toDoName.subtasks[subTaskIndex].subtaskCheckBox === true) {
    toDoName.subtasks[subTaskIndex].subtaskCheckBox = false;
  } else {
    toDoName.subtasks[subTaskIndex].subtaskCheckBox = true;
  }
};

// If deleteToDo is true, delete todo from mainToDo
const toDoDelete = (toDoName, deleteToDo = true) => {
  if (deleteToDo) {
    delete mainToDo[toDoName];
  }
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

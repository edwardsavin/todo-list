import { toDoChangeNotes } from "../../functions/todo/todo-changers";
import { mainList } from "../../functions/mylists/my-lists-factory-function";

// Create todo main content notes elements
const createMainContentNotes = (listTitle, todoName) => {
  const mainContentNotes = document.createElement("div");
  mainContentNotes.classList.add("main-content-notes");
  mainContentNotes.id = `main-content-notes-${todoName}`;

  const notesTitle = document.createElement("h3");
  notesTitle.classList.add("notes-title");
  notesTitle.textContent = "NOTES";

  const notesInput = document.createElement("textarea");
  notesInput.classList.add("notes-input");
  notesInput.classList.add("text-input");
  notesInput.id = `notes-input-${todoName}`;
  notesInput.placeholder = "Insert your notes here";

  updateNotesDom(listTitle, todoName, notesInput);

  notesInput.onblur = () => {
    updateTodoNotes(listTitle, todoName);
  };

  mainContentNotes.appendChild(notesTitle);
  mainContentNotes.appendChild(notesInput);

  return mainContentNotes;
};

// Get the new newNotes value after out of focus
// Update the todo.notes value with the newNotes value
function updateTodoNotes(listTitle, todoName) {
  let notesInput = document.querySelector(`#notes-input-${todoName}`);
  let newNotes = notesInput.value.trim();

  toDoChangeNotes(mainList[listTitle].todos[todoName], newNotes);
}

// Update the notesInput value with the todo.notes value
function updateNotesDom(listTitle, todoName, notesInput) {
  let notesElement = notesInput;

  if (mainList[listTitle].todos[todoName].notes === undefined) {
    mainList[listTitle].todos[todoName].notes = "";
  }

  notesElement.value = mainList[listTitle].todos[todoName].notes;
}

export { createMainContentNotes };

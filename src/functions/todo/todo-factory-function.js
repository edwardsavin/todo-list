const toDoFactory = (
  title,
  originalTodoTitle,
  description,
  checkBox,
  dueDate,
  priority,
  notes,
  subtasks = {}
) => {
  return {
    title,
    originalTodoTitle,
    description,
    checkBox,
    dueDate,
    priority,
    notes,
    subtasks,
  };
};

let mainToDo = {};

export { toDoFactory, mainToDo };

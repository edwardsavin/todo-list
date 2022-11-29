const toDoFactory = (
  title,
  description,
  checkBox,
  dueDate,
  priority,
  notes,
  subtasks = {}
) => {
  return {
    title,
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

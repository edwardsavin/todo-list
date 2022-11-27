const toDoFactory = (
  title,
  description,
  checkBox,
  dueDate,
  priority,
  notes,
  subtasks
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

export { toDoFactory };

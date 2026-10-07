// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];


const todoContainer = document.querySelector("ul");

for (const todo of todoList) {

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  const label = document.createElement("label");
  label.textContent = todo.task;

  li.appendChild(checkbox);
  li.appendChild(label);

  todoContainer.appendChild(li);

  checkbox.addEventListener("change", () => {

    todo.completed = checkbox.checked;

    console.log(todoList);

  });

}

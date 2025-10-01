document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");

      listItem.textContent = taskText;

      listItem.addEventListener("dblclick", () => {
        taskList.removeChild(listItem);
      });

      taskList.appendChild(listItem);

      taskInput.value = "";

      taskInput.focus();
    }
  }

  addTaskBtn.addEventListener("click", addTask);

  taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});

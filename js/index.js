function addTask() {
  var list = document.getElementById("taskList");

  var task = document.createElement("li");

  var taskName = document.createTextNode(
    document.getElementById("inputTask").value
  );

  task.appendChild(taskName);

  list.appendChild(task);
}
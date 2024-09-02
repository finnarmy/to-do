function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.onclick = function() {
        this.parentElement.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        this.parentElement.remove();
    };

    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}

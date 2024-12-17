// Function to add a task to the to-do list
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== "") {
        // Create a new list item for the task
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        taskList.appendChild(newTask);

        // Clear the input field after adding the task
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}
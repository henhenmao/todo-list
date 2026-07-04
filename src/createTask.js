
import Task from "./Tasks.js";

function createTask(title, description, due) {
    const newTask = new Task(title, description, due);
    return newTask;
};


// creates and returns the DOM element for a new task to be inserted into a project
// takes in a Task object
function createTaskDiv(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");

    const checkDiv = document.createElement("div");
    checkDiv.classList.add("check-div");
    const checkTask = document.createElement("input");
    checkTask.type = "checkbox";
    checkTask.classList.add("task-check");

    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details")

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = task.title;

    const taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = task.description;

    const taskDue = document.createElement("div");
    taskDue.classList.add("task-due");
    taskDue.textContent = task.due;

    checkDiv.append(checkTask);
    taskDetails.append(taskTitle, taskDue);
    taskDiv.append(checkDiv, taskDetails);
    return taskDiv
}



export {createTask, createTaskDiv};
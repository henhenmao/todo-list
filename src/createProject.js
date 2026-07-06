
import Project from "./Project.js";

function createProjectDiv(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const projectHeader = document.createElement('div');
    projectHeader.classList.add("project-header");

    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = `${project.name}`;

    const newTaskButton = document.createElement("button");
    newTaskButton.classList.add("new-task-button");
    newTaskButton.textContent = "add task";

    const projectContent = document.createElement("div");
    projectContent.classList.add('project-content');

    projectHeader.append(projectTitle, newTaskButton);
    projectDiv.append(projectHeader, projectContent);
    console.log(projectDiv);
    return projectDiv;
}

function addProjectToMain(projectDiv, mainDiv) {
    mainDiv.append(projectDiv);
}

export {createProjectDiv, addProjectToMain};
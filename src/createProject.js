
import Project from "./Project.js";

function createProjectDiv(project) {
    const list = document.getElementById("projects-list");
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const projectHeader = document.createElement('div');
    projectHeader.classList.add("project-header");

    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = `${project.name}`;

    const newTaskButton = document.createElement("button");
    newTaskButton.classList.add("add-btn");
    newTaskButton.classList.add("new-task-button");
    newTaskButton.textContent = "add task";

    const projectContent = document.createElement("div");
    projectContent.classList.add('project-content');

    projectHeader.append(projectTitle, newTaskButton);
    projectDiv.append(projectHeader, projectContent);

    addProjectToList(project, list, projectDiv);
    // console.log(projectDiv);
    return projectDiv;
}

function addProjectToList(project, listDiv, projectDiv) {

    const sidebarProject = document.createElement("div");
    sidebarProject.classList.add("sidebar-project")

    const showProject = document.createElement("input");
    showProject.type = "checkbox";
    showProject.classList.add("show-project");
    showProject.checked = true;

    showProject.addEventListener("change", () => {
        projectDiv.classList.toggle("hidden", !showProject.checked);
    });

    const projectTitle = document.createElement("div");
    projectTitle.classList.add("sidebar-project-title");
    projectTitle.textContent = project.name;

    sidebarProject.append(showProject, projectTitle);
    listDiv.append(sidebarProject);
};

export {createProjectDiv};
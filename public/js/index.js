import '@babel/polyfill';
import { addNewProject, updateProject, deleteProject } from './projectOperations';



// DOM ELEMENTS
const addNewProjectForm = document.querySelector('form.form.add_new_project');
const deleteProjectButton = document.querySelector('a.delete_project_btn');
const updateProjectForm = document.querySelector('form.form.update_project');
console.log('Hello');


// DELAGATION
if (addNewProjectForm) {
    console.log('Form found!');
    addNewProjectForm.addEventListener('submit', e => {
        // this prevents form from loading any other page
        console.log('Event Listener');
        e.preventDefault();
        const projectName = document.getElementById('projectName').value;
        const projectSource = document.getElementById('projectSource').value;
        const clientName = document.getElementById('clientName').value;
        const projectManager = document.getElementById('projectManager').value;
        const startDate = document.getElementById('startDate').value;
        const dueDate = document.getElementById('dueDate').value;
        const platform = document.getElementById('platform').value;
        const theme = document.getElementById('theme').value;
        const plugins = document.getElementById('plugins').value;
        const status = document.getElementById('status').value;
        const workProgress = document.getElementById('workProgress').value;

        const developerCheckboxes = document.getElementsByName('developers');
        let developers = '';

        for (let i = 0; i < developerCheckboxes.length; i++) {
            if (developerCheckboxes[i].checked) {
                developers += developerCheckboxes[i].value + ",";
            }
        }

        console.log(`${projectName} | ${projectSource} | ${clientName} | ${developers} | ${projectManager} | ${startDate} | ${dueDate} | ${platform} | ${theme} | ${plugins} | ${status} | ${workProgress}`);

        addNewProject(projectName, projectSource, clientName, developers, projectManager, startDate, dueDate, platform, theme, plugins, status, workProgress);
    });
}

if (updateProjectForm) {
    console.log('Update form found!');
    updateProjectForm.addEventListener('submit', e => {
        console.log('Event Listener');
        e.preventDefault();
        const projectName = document.getElementById('projectName').value;
        const projectSource = document.getElementById('projectSource').value;
        const clientName = document.getElementById('clientName').value;
        const projectManager = document.getElementById('projectManager').value;
        const startDate = document.getElementById('startDate').value;
        const dueDate = document.getElementById('dueDate').value;
        const platform = document.getElementById('platform').value;
        const theme = document.getElementById('theme').value;
        const plugins = document.getElementById('plugins').value;
        const status = document.getElementById('status').value;
        const workProgress = document.getElementById('workProgress').value;

        const developerCheckboxes = document.getElementsByName('developers');
        let developers = '';

        for (let i = 0; i < developerCheckboxes.length; i++) {
            if (developerCheckboxes[i].checked) {
                developers += developerCheckboxes[i].value + ",";
            }
        }

        const projectId = window.location.href.split('/update-project/')[1];

        console.log(`${projectId} ${projectName} | ${projectSource} | ${clientName} | ${developers} | ${projectManager} | ${startDate} | ${dueDate} | ${platform} | ${theme} | ${plugins} | ${status} | ${workProgress}`);

        updateProject(projectId, projectName, projectSource, clientName, developers, projectManager, startDate, dueDate, platform, theme, plugins, status, workProgress);
    });
}

if (deleteProjectButton) {
    deleteProjectButton.addEventListener('click', e => {
        e.preventDefault();
        const projectId = window.location.href.split('/projects/')[1];
        console.log(projectId);
        deleteProject(projectId);
    });
}
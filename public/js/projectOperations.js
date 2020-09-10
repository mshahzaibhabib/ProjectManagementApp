import axios from 'axios';



export const filterProjects = async (projectSource, projectPlatform, projectStatus) => {
    try {
        let querySourcePart = '';
        let queryPlatformPart = '';
        let queryStatusPart = '';
        let queryString = '';

        projectSource.forEach(el => querySourcePart += 'projectSource=' + el + '&');
        projectPlatform.forEach(el => queryPlatformPart += 'platform=' + el + '&');
        projectStatus.forEach(el => queryStatusPart += 'status=' + el + '&');

        queryString = '?' + querySourcePart + queryPlatformPart + queryStatusPart;

        console.log(queryString);

        window.location.href = queryString;

        // const res = await axios({
        //     method: "GET",
        //     url: `${queryString}`
        // })

        // console.log(res);
        // window.location.href = queryString;
        // if (res.status === 200) {
        //     console.log('Project successfully created!');
        //     setTimeout(() => {
        //         window.location.href = queryString;
        //     }, 500);
        // }

    } catch (err) {
        console.log(err);
    }
}

export const addNewProject = async (projectName, projectSource, clientName, developers, projectManager, startDate, dueDate, platform, theme, plugins, status, workProgress) => {
    try {

        // STRING MANIPULATION
        developers = developers.split(',');
        // removes last ", " separator
        developers.pop();
        plugins = plugins.split(',');


        console.log(`${projectName} | ${projectSource} | ${clientName} | ${developers} | ${projectManager} | ${startDate} | ${dueDate} | ${platform} | ${theme} | ${plugins} | ${status} | ${workProgress}`);


        // SENDING REQUEST
        const res = await axios({
            method: 'POST',
            url: '/api/v1/projects/',
            data: {
                projectName,
                projectSource,
                clientName,
                developers,
                projectManager,
                startDate,
                dueDate,
                platform,
                theme,
                plugins,
                status,
                workProgress
            }
        });

        console.log(res);

        if (res.data.status === 'success') {
            console.log('Project successfully created!');
            setTimeout(() => {
                window.location.href = '/projects';
            }, 1500);
        }

    } catch (err) {
        console.log(err);
    }
};

export const updateProject = async (projectId, projectName, projectSource, clientName, developers, projectManager, startDate, dueDate, platform, theme, plugins, status, workProgress) => {
    try {

        // STRING MANIPULATION
        developers = developers.split(',');
        // removes last ", " separator
        developers.pop();
        plugins = plugins.split(',');


        console.log(`${projectName} | ${projectSource} | ${clientName} | ${developers} | ${projectManager} | ${startDate} | ${dueDate} | ${platform} | ${theme} | ${plugins} | ${status} | ${workProgress}`);


        // SENDING REQUEST
        const res = await axios({
            method: 'PATCH',
            url: `/api/v1/projects/${projectId}`,
            data: {
                projectName,
                projectSource,
                clientName,
                developers,
                projectManager,
                startDate,
                dueDate,
                platform,
                theme,
                plugins,
                status,
                workProgress
            }
        });

        console.log(res);

        if (res.data.status === 'success') {
            console.log('Project successfully updated!');
            setTimeout(() => {
                window.location.href = '/projects';
            }, 1500);
        }

    } catch (err) {
        console.log(err);
    }
};

export const deleteProject = async (projectId) => {
    try {
        const res = await axios({
            method: 'DELETE',
            url: `/api/v1/projects/${projectId}`
        });

        console.log(res);

        if (res.status === 204) {
            console.log('Project successfully deleted');
            setTimeout(() => {
                window.location.href = '/projects/';
            }, 1500);
        }
    } catch (err) {
        console.log(err);
    }
};
const API_URL = `https://wbdv-generic-server.herokuapp.com/api/ng.th`

export const createModule = (courseID, module) =>
    fetch(`${API_URL}/courses/${courseID}/modules`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(module)
    }).then(response => response.json());

export const findModulesForCourse = courseID =>
    fetch(`${API_URL}/courses/${courseID}/modules`)
        .then(response => response.json());

export const findModule = moduleID => 
    fetch(`${API_URL}/modules/${moduleID}`)
        .then(response => response.json());

export const updateModule = (moduleID, module) =>
    fetch(`${API_URL}/modules/${moduleID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(module)
    }).then(response => response.json());

export const deleteModule = moduleID =>
    fetch(`${API_URL}/modules/${moduleID}`, {
        method: 'DELETE'
    }).then(response => response.json())

export default {
    createModule,
    findModulesForCourse,
    findModule,
    updateModule,
    deleteModule
}
const API_URL = `https://wbdv-generic-server.herokuapp.com/api/ng.th`

export const createLesson = (moduleID, lesson) =>
    fetch(`${API_URL}/modules/${moduleID}/lessons`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(lesson)
    }).then(response => response.json());

export const findLessonsForModule = moduleID =>
    fetch(`${API_URL}/modules/${moduleID}/lessons`)
        .then(response => response.json());

export const findLesson = lessonID => 
    fetch(`${API_URL}/lessons/${lessonID}`)
        .then(response => response.json());

export const updateLesson = (lessonID, lesson) =>
    fetch(`${API_URL}/lessons/${lessonID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(module)
    }).then(response => response.json());

export const deleteLesson = lessonID =>
    fetch(`${API_URL}/lessons/${lessonID}`, {
        method: 'DELETE'
    }).then(response => response.json())
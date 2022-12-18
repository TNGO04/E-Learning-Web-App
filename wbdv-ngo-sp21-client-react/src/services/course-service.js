const API_URL = "https://wbdv-generic-server.herokuapp.com/api/ng.th/courses"

export const createCourse = course => 
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(course)
    })
        .then(response => response.json())

export const findAllCourses = () =>
    fetch(API_URL)
        .then(response => response.json())

export const findCourseById = id =>
    fetch(`${API_URL}/${id}`)
        .then(response => response.json())

export const updateCourse = (id, course) =>
    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(course)
    })
        .then(response => response.json())

export const deleteCourse = id =>
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export default {
    createCourse,
    findAllCourses,
    findCourseById,
    updateCourse,
    deleteCourse
}
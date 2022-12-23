const API_URL = `https://wbdv-generic-server.herokuapp.com/api/ng.th`

export const createTopic = (lessonID, Topic) =>
    fetch(`${API_URL}/lessons/${lessonID}/topics`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(Topic)
    }).then(response => response.json());

export const findTopicsForLesson = lessonID =>
    fetch(`${API_URL}/lessons/${lessonID}/topics`)
        .then(response => response.json());

export const findTopic = topicID => 
    fetch(`${API_URL}/topics/${topicID}`)
        .then(response => response.json());

export const updateTopic = (topicID, topic) =>
    fetch(`${API_URL}/topics/${topicID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    }).then(response => response.json());

export const deleteTopic = topicID =>
    fetch(`${API_URL}/topics/${topicID}`, {
        method: 'DELETE'
    }).then(response => response.json())

export default {
    createTopic,
    findTopicsForLesson,
    findTopic,
    updateTopic,
    deleteTopic
}
const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [...state.topics, action.topic]
            }
        
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }

        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(topic => topic._id === action.topicId ? action.topic : topic)
            }

        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id != action.topicId)
            }

        default:
            return state
    }
}

export default topicReducer
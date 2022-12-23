const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                lessons: [...state.lessons, action.lesson]
            }

        case "FIND_LESSONS_FOR_MODULE":
            return {
                lessons: action.lessons
            }

        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(lesson => (lesson._id===action.lesson_id) ? action.lesson : lesson)
            }
        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => lesson._id!==action.lessonId)
            }
        default:
            return state
    }
}

export default lessonReducer
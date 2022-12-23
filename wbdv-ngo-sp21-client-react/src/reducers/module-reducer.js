const initialState = {
    modules: []
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            const newState = {
                modules: [...state.modules, action.module]
            }
            return newState;

        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(module => module._id === action.module._id ? action.module : module )
            }
        case "DELETE_MODULE":
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }
        default:
            return state;
    }
}

export default moduleReducer
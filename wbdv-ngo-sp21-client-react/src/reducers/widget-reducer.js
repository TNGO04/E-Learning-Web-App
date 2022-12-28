import {CREATE_WIDGET, DELETE_WIDGET, UPDATE_WIDGET, FIND_WIDGETS_FOR_TOPIC} from "../actions/widget-action"

const initialState = {
    widgets: []
}

const widgetReducer = (state= initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [...state.widgets, action.widget]
            }

        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.wid)
            }

        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget)
            }

        case FIND_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }

}

export default widgetReducer;
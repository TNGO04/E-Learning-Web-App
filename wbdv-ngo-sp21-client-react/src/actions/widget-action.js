import widgetService from "../services/widget-service"

export const CREATE_WIDGET = "CREATE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC";
export const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS";
export const FIND_WIDGET_BY_ID = "FIND_WIDGET_BY_ID";

export const createWidget = (dispatch, tid) => {
    return widgetService.createWidget(tid, {type: "Heading", size: 1, text: "New Widget"}).then(
        widget => dispatch({
           type: CREATE_WIDGET,
           widget: widget}));
}

export const deleteWidget = (dispatch, widget) => {
    return widgetService.deleteWidget(widget.id).then(
        response => dispatch({
            type: DELETE_WIDGET,
            wid: widget.id}));
}

export const updateWidget = (dispatch, widget) => {
    return widgetService.updateWidget(widget.id, widget).then(
        response => dispatch({
            type: UPDATE_WIDGET,
            widget: widget}));
}

export const findWidgetsForTopic = (dispatch, tid) => {
    return widgetService.findWidgetsForTopic(tid). then(
        widgets => dispatch({
            type: FIND_WIDGETS_FOR_TOPIC,
            widgets: widgets}));
}

export default {
    createWidget,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget
}
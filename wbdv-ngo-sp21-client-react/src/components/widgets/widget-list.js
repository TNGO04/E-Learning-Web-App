import React, {useEffect} from "react"
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import widgetAction from "../../actions/widget-action"

const WidgetList = ({
    widgets = [],
    deleteWidget,
    updateWidget,
    findWidgetsForTopic,
    createWidget}) => {

    const {moduleId, lessonId, topicId} = useParams();

    useEffect(() => {
        findWidgetsForTopic(topicId);
    }, [moduleId, lessonId, topicId]);

    return (
        <div className="mt-4">

                <h2>
                    Widget List
                    <i onClick={() => createWidget(topicId)} className="fa-solid fa-plus ms-2"></i>
                </h2>



        </div>
    )

}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        createWidget: (tid) => widgetAction.createWidget(dispatch, tid),
        findWidgetsForTopic: (tid) => widgetAction.findWidgetsForTopic(dispatch, tid),
        updateWidget: (widget) => widgetAction.updateWidget(dispatch, widget),
        deleteWidget: (widget) => widgetAction.deleteWidget(dispatch, widget)
    }
}

export default connect(stpm, dtpm)(WidgetList)
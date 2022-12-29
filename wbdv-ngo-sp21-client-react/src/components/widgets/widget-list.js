import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import widgetAction from "../../actions/widget-action"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

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

    const [editingWidget, setEditingWidget] = useState({});

    return (
        <div className="mt-4 list-group">

                <h2>
                    Widget List
                    <i onClick={() => createWidget(topicId)} className="fa-solid fa-plus ms-2"></i>
                </h2>

                    {
                        widgets.map(widget =>
                        <div key={widget.id} className="list-group-item wbdv-widget-item">
                            {
                                widget.type === "Heading" &&
                                    <HeadingWidget
                                        setEditingWidget={setEditingWidget}
                                        editing={editingWidget.id === widget.id}
                                        widget={widget}
                                    />
                            }

                            {
                                widget.type === "Paragraph" &&
                                <ParagraphWidget
                                    setEditingWidget={setEditingWidget}
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}
                                />
                            }

                            {
                                editingWidget.id !== widget.id &&
                                <>
                                    <i onClick={() => {
                                        setEditingWidget(widget)}
                                    } className="fa fa-cog m-1 float-end"></i>
                                </>
                            }
                            {
                                editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => deleteWidget(widget)} className="fa fa-trash m-1"></i>
                                    <i onClick={() => {
                                        updateWidget(editingWidget)
                                        setEditingWidget({})
                                    }} className="fa fa-check m-1"></i>
                                </>
                            }

                        </div>)
                    }




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
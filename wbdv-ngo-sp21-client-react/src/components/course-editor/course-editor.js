import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ModuleList from "./module-list";
import moduleReducer from "../../reducers/module-reducer"
import lessonReducer from "../../reducers/lesson-reducer"
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import {combineReducers, createStore} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "../widgets/widget-list";


const rootReducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
});


const store = createStore(rootReducer);

const CourseEditor = () => {
    const navigate = useNavigate();
    const {layout} = useParams();

    return (
        <Provider store={store}>
            <div className="container">
                <h1 className="mt-2">

                    <Link to={`/courses/${layout}`}><i className="fa-solid fa-xmark"/></Link>
                    Course Editor</h1>
                

                    <div className="row">
                        <div className="col-4">
                            <ModuleList/>
                        </div>


                        <div className="col-8">
                            <LessonTabs/>    
                            <TopicPills/>
                            <WidgetList/>
                        </div>
                    </div>
                </div>
        </Provider>
    )}

export default CourseEditor
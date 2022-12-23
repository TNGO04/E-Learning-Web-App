import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import ModuleList from "./module-list";
import moduleReducer from "../../reducers/module-reducer"
import lessonReducer from "../../reducers/lesson-reducer"
import {combineReducers, createStore} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import LessonTabs from "./lesson-tabs";


const rootReducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
});


const store = createStore(rootReducer);

const CourseEditor = () => {
    const navigate = useNavigate();

    return (
        <Provider store={store}>
            <div className="container">
                <h1 className="mt-2">
                    <i className="fa-solid fa-xmark" onClick={() => navigate(-1)}></i>
                    Course Editor</h1>
                

                    <div className="row">
                        <div className="col-4">
                            <ModuleList/>
                        </div>


                        <div className="col-8">
                            <LessonTabs/>                            
                        </div>
                    </div>
                </div>
        </Provider>
    )}

export default CourseEditor
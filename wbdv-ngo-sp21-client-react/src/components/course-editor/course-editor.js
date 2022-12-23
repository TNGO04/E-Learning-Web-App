import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import ModuleList from "./module-list";
import moduleReducer from "../../reducers/module-reducer"
import {combineReducers, createStore} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from "react-redux";



const rootReducer = combineReducers({
    moduleReducer: moduleReducer
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
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Unselected</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active">
                                            <div className="form-inline">
                                                    <input type="text" placeholder="Edit Lesson 4"
                                                    className="form-control form-control-sm mr-3"/>
                                                    <i className="fa-solid fa-close"></i>
                
                                            </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </Provider>
    )}

export default CourseEditor
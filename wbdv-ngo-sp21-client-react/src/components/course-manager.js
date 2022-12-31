import React from 'react'
import courseService from "../services/course-service"
import CourseManagerHeader from './course-manager-header'
import CourseTable from './course-table/course-table'
import CourseGrid from './course-grid/course-grid'
import CourseEditor from './course-editor/course-editor'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import QuizList from "./quizzes/quiz-list";
import {combineReducers, createStore} from "redux";
import quizReducer from "../reducers/quiz-reducer";
import questionReducer from "../reducers/question-reducer";
import moduleReducer from "../reducers/module-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
import widgetReducer from "../reducers/widget-reducer";
import {Provider} from "react-redux";
import QuizPage from "./quizzes/quiz-page";

const rootReducer = combineReducers({
                        quizReducer: quizReducer,
                        questionReducer: questionReducer,
                        moduleReducer: moduleReducer,
                        lessonReducer: lessonReducer,
                        topicReducer: topicReducer,
                        widgetReducer: widgetReducer
                    });

const store = createStore(rootReducer);

class CourseManager extends React.Component {
    state = {
        courses : [
        ]
    }


    componentDidMount = () =>
        courseService.findAllCourses().then(
            courses => this.setState({courses})
        )

    addCourse = () =>
        courseService.createCourse({
            title: document.getElementById('newCourseFld').value,
            owner: 'me',
            lastModified: 'never'
        }).then(course => 
            this.setState( prevState => ({
                ...prevState,
                courses: [...prevState.courses, course]
            })))
    

    deleteCourse = (courseToBeDelete) =>  {
        courseService.deleteCourse(courseToBeDelete._id).then(status => {
            this.setState( (prevState) => ({
                ...prevState,
                courses: prevState.courses.filter
                    (course => course !== courseToBeDelete)
            }))
        })
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course).then(
            status => this.setState( (prevState) => ({
                ...prevState,
                courses : prevState.courses.map(
                    courseElement => courseElement._id === course._id ? course : courseElement
                )
            }))
        )
    }

    render() {
        return (
        <Provider store={store}>
            <div>
                <CourseManagerHeader addCourse= {this.addCourse}/>
                
                <div className="list-group">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Navigate to="/courses/table"/>}/>
                            <Route path="/courses/table"
                                element= {
                                    <CourseTable
                                        courses = {this.state.courses}
                                        updateCourse = {this.updateCourse}
                                        deleteCourse = {this.deleteCourse}
                                    />
                                }/>
                            <Route path="/courses/grid"
                                element= {
                                    <CourseGrid
                                        courses = {this.state.courses}
                                        updateCourse = {this.updateCourse}
                                        deleteCourse = {this.deleteCourse}
                                    />
                                }/>
                            {["/courses/:layout/edit/:courseId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"].map((path, index) =>
                                <Route path={path} key={index}
                                    element= {<CourseEditor/>}/>
                        
                            )}

                            <Route path="/courses/:layout/edit/:courseId/quizzes"
                                   element= {<QuizList/>}
                            />

                            <Route path="/courses/:layout/edit/:courseId/quizzes/:quizId"
                                   element= {<QuizPage/>}
                            />



                        </Routes>
                    </BrowserRouter>
                </div>

                
            </div>
        </Provider>
        )
    }
}

export default CourseManager;
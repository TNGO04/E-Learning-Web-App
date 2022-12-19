import React from 'react'
import courseService from "../services/course-service"
import CourseManagerHeader from './course-manager-header'
import CourseTable from './course-table/course-table'
import { Link, BrowserRouter, Route, Routes, Navigate } from "react-router-dom"


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

    updateCourse = course => {
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
                        </Routes>
                    </BrowserRouter>
                </div>

                
            </div>
        )
    }
}

export default CourseManager
import React from 'react'
import ReactDOM from 'react-dom'
import courseService from "../services/course-service"
import CourseManagerHeader from './course-manager-header'

class CourseManager extends React.Component {
    state = {
        courses : []
    }

    render() {
        return (
            <div>
                <CourseManagerHeader/>
            </div>
        )
    }
}

export default CourseManager
import React from 'react'
import CourseRow from './course-row'
import { Link } from 'react-router-dom'

class CourseTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="p-5">
                <h2>Course Table</h2>

                <div>
                    <div className="row border p-2">
                        <div className="col-6">
                            Title <i className="fa-solid fa-caret-up"></i>
                        </div>

                        <div className="col-2">
                            Owned by
                        </div>

                        <div className="col-2">
                            Last modified
                        </div>

                        <div className="col-2">
                            <div className="pull-right">
                                <i className="fa-solid fa-arrow-down-z-a"/>
                                <i className="fa-solid fa-folder"/>
                                <Link to="/courses/grid">
                                    <i className="fa-solid fa-th"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {
                        this.props.courses.map( (course) => 
                            <CourseRow
                                deleteCourse = {this.props.deleteCourse}
                                updateCourse = {this.props.updateCourse}
                                course = {course}
                                key = {course._id}
                            />)
                    }

                </div>
            </div>

        )
    }
}

export default CourseTable
import React from 'react'
import { Link } from 'react-router-dom'
import CourseCard from './course-card'

const CourseGrid = ({courses, updateCourse, deleteCourse}) => 
    <div className="p-5">
        <h2>Course Grid</h2>
        <div>
            <div className="row p-2">
                <div className="col-6 font-weight-bold">
                    Recent Documents 
                </div>

                <div className="col-4 font-weight-bold">
                    Owned by me <i className="fa-solid fa-caret-down"></i>
                </div>

                <div className="col-2">
                    <div className="pull-right">
                        <i className="fa-solid fa-arrow-down-z-a"/>
                        <i className="fa-solid fa-folder"/>
                        <Link to="/courses/table">
                            <i className="fa-solid fa-list"/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row">
                {
                    courses.map(course => 
                        <CourseCard 
                        course= {course}
                        key= {course._id}
                        deleteCourse = {deleteCourse}
                        updateCourse = {updateCourse}
                        />
                    )
                }
            </div>
        </div>
    
    
    </div>


export default CourseGrid
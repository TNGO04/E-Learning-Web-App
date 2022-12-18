import React from 'react'

export const CourseManagerHeader = () => 
        <div className="row border p-3 ">
            <div className="col-1">
                <i className="fa-solid fa-bars fa-2x"></i>
            </div>

            <div className="col-3 h2">
                Course Manager 
            </div>

            <div className="col-6">
                <input type="text" placeholder="New Course" id="newCourseFld"
                        className="form-control"/>
            </div>
            <div className="col-2">
                <i className="fa-solid fa-circle-plus fa-2x float-right text-danger"></i>
            </div>
            
        </div>

export default CourseManagerHeader
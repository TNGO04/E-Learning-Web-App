import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({course, updateCourse, deleteCourse}) => {
    const [editing, setEditing] = useState(false)
    const [currentTitle, setCurrentTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: currentTitle
        }
        updateCourse(newCourse)
    }

    return (
        <div className="card col-3" style={{margin: "20px"}}>
            <div className="card-body">
                <img src="https://media.istockphoto.com/id/941224020/vector/open-book-thin-line-icon-vector-design-illustration.jpg?s=612x612&w=0&k=20&c=ed4RbZQh24buDkXEcfEZ4N3aK1cbcG5sRctz13NdA8M="
                    className="img-fluid"/>


                    {
                        !editing && 
                        <Link to={`/courses/editor/`}>
                            <h5 className="card-title">{currentTitle}</h5>
                        </Link>
                    }
                    {
                        editing && 
                        <input
                            onChange={(event) => setCurrentTitle(event.target.value)}
                            value={currentTitle}
                            className="form-control"
                        />
                    }

                

                <p className="card-text">Some description.</p>

                {!editing && <i onClick={() => setEditing(true)} 
                    className="fa-solid float-right fa-pen-to-square"></i>}

                {editing && <i onClick={() => deleteCourse(course)}
                    className="fa-solid float-right fa-trash"></i>}
                {editing && <i onClick={saveTitle} 
                    className="fa-solid float-right fa-check"></i>}

            </div>
        </div>
    )
}

export default CourseCard
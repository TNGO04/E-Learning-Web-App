import React, {useEffect} from 'react'
import {connect,} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"


const LessonTabs = ({
    myLessons = [],
    createLesson,
    deleteLesson,
    updateLesson,
    findLessonsForModule
}) => {

    const {layout, moduleId, courseId, lessonId} = useParams();

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId, lessonId])

    return (
        <ul className="nav nav-tabs pb-3" style={{'display': 'block-inline'}}>
            {
                myLessons.map(lesson =>
                    <li key ={lesson._id} className={`px-3 col-lg-3 nav-item`}>
                        <EditableItem item={lesson}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            active= {lessonId === lesson._id ? true : false}/>
                    </li>)
            }

            <li className="nav pb-3 pt-3">
                <i onClick={(event) => createLesson(moduleId)} className="fa-solid fa-plus fa-lg m-auto"/>
            </li>
        </ul>
    )
}

const sptm = (state) => ({
        myLessons: state.lessonReducer.lessons
    })


const dptm = dispatch => {
    return {
        createLesson: (moduleId) => {
            lessonService.createLesson(moduleId, {title: "New Lesson"}).then(returnedLesson =>
                dispatch({
                    type: "CREATE_LESSON",
                    lesson: returnedLesson
                }))
            },
        deleteLesson: (lesson) => {
            lessonService.deleteLesson(lesson._id).then(response => 
                dispatch({
                    type: "DELETE_LESSON",
                    lessonId: lesson._id
                }))
        },
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(allLessons =>
                    dispatch({
                        type: "FIND_LESSONS_FOR_MODULE",
                        lessons: allLessons
                    }))
        },
        updateLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson).then(response =>
                dispatch({
                    type: "UPDATE_LESSON",
                    lesson: lesson
                }))
        }
          
}}


export default connect(sptm, dptm)(LessonTabs)
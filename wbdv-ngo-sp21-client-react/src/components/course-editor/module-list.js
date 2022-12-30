import React, {useEffect} from 'react'
import {connect, Provider} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"


const ModuleList = ({
    myModules = [],
    createModule,
    deleteModule,
    updateModule,
    findModulesForCourse
}) => {

    const {layout, moduleId, courseId, lessonId, topicId} = useParams();

    useEffect(() => {
        findModulesForCourse(courseId)
    }, [courseId, moduleId, lessonId, moduleId, topicId])

    return (
        <div>
            <h2>Modules</h2>
            <ul className="list-group">
                {
                    myModules.map((module) => 
                        <li key= {module._id} className={`list-group-item ${moduleId === module._id ? 'active' : ''}`}>
                            <EditableItem item={module} 
                                        deleteItem={deleteModule} 
                                        updateItem={updateModule}
                                        to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                        active= {moduleId === module._id ? true : false}
                            />
                        </li>)
                }


                <li className="list-group-item text-center text-primary">
                    <i onClick={(event) => createModule(courseId)} className="fa-solid fa-plus fa-2x m-auto"/>
                </li>
            </ul>
        </div>
    )
}

const sptm = (state) => ({
        myModules: state.moduleReducer.modules
    })


const dptm = dispatch => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "New Module"}).then(returnedModule =>
                dispatch({
                    type: "CREATE_MODULE",
                    module: returnedModule
                }))
            },
        deleteModule: (module) => {
            moduleService.deleteModule(module._id).then(response => 
                dispatch({
                    type: "DELETE_MODULE",
                    moduleId: module._id
                }))
        },
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(allModules =>
                    dispatch({
                        type: "FIND_MODULES_FOR_COURSE",
                        modules: allModules
                    }))
        },
        updateModule: (module) => {
            moduleService.updateModule(module._id, module).then(response =>
                dispatch({
                    type: "UPDATE_MODULE",
                    module: module
                }))
        }
          
}}


export default connect(sptm, dptm)(ModuleList)
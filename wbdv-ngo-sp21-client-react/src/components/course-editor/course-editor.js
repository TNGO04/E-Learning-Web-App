import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "../widgets/widget-list";




const CourseEditor = () => {
    const navigate = useNavigate();
    const {layout} = useParams();

    return (
            <div className="container">
                <h1 className="mt-2">

                    <Link to={`/courses/${layout}`}><i className="fa-solid fa-xmark"/></Link>
                    Course Editor</h1>
                

                    <div className="row">
                        <div className="col-4">
                            <ModuleList/>
                        </div>


                        <div className="col-8">
                            <LessonTabs/>    
                            <TopicPills/>
                            <WidgetList/>
                        </div>
                    </div>
                </div>
    )}

export default CourseEditor
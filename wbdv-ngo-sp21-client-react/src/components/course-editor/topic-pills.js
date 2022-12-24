import React, { useEffect } from "react";
import topicService from "../../services/topic-service";
import EditableItem from "./editable-item";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const TopicPills = ({
    deleteTopic,
    updateTopic,
    createTopic,
    findTopicsForLesson,
    topics = []
}) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    useEffect(() => {
        findTopicsForLesson(lessonId);
    }, [moduleId, lessonId])

    return (
        <div className="mt-2">
            <ul className="nav nav-pills nav-fill">
            {
                topics.map(topic =>
                    <li key ={topic._id} className={`px-3 col-lg-3 nav-item ${topicId === topic._id ? 'active' : ''}`}>
                        <EditableItem item={topic}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            active= {topicId === topic._id ? true : false}/>
                    </li>)
            }
            <li className="nav nav-pills pb-3 pt-3">
                <i onClick={(event) => createTopic(lessonId)} className="fa-solid fa-plus fa-lg m-auto"/>
            </li>
            </ul>
        </div>
    )

}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = dispatch => {
    return {
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then( newTopic => dispatch({
                    type: "CREATE_TOPIC",
                    topic: newTopic
                }))},
        deleteTopic: (topic) => {
            topicService.deleteTopic(topic._id).then(response =>
                dispatch({
                    type: "DELETE_TOPIC",
                    topicId: topic._id
                }))},
        updateTopic: (topic) => {
            topicService.updateTopic(topic._id, topic).then(newTopic =>
                dispatch({
                    type: "UPDATE_TOPIC",
                    topic
                }))},
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId).then(allTopics =>
                dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics: allTopics
                }))}

            
    }
}

export default connect(stpm, dtpm)(TopicPills)
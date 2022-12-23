import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const EditableItem = ({
    to,
    item,
    deleteItem,
    updateItem,
    active
}) => {

    const [editing, setEditing] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(item.title);

    const saveTitle = (value) => {
        setEditing(false);
        updateItem(item);

    }

    return (
        <span className= {`${active ? 'active' : ''}`}>
            {
                !editing &&
                <>
                    <Link to={to} >
                        <span className= {`${active ? 'active' : ''}`}>
                            {currentTitle}
                        </span>
                    </Link>
                    
                    <i onClick={(event => setEditing(true))} className="ms-2 fa-solid fa-pen float-end"></i>
                </>
            }

            {
                editing &&
                <span>
                    <input onChange={event => setCurrentTitle(event.target.value)}
                        val={currentTitle}
                        className="form-control-xs form-control mb-3"
                        style={{display: "inline", width: "60%"}} />
                    <i onClick={event => deleteItem(item)} className="fa-2x fa-solid fa-times float-end"/>
                    <i onClick={event => saveTitle()} className="fa-2x fa-solid fa-check float-end"/>
                </span>
            }

        </span>
    )
}

export default EditableItem;
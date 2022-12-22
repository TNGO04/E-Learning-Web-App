import React from "react";

const EditableItem = ({
    item,
    deleteItem,
    updateItem
}) => {

    const [editing, setEditing] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(item.title);

    const saveTitle = (value) => {
        setEditing(false);
        updateItem(item);

    }

    return (
        <>
            !editing &&
            <>
                {currentTitle}
                <i onClick={(event => setEditing(true))} className="fa-sharp fa-solid fa-pen float-right"></i>
            </>

            editing &&
            <>
                <input onChange={event => setCurrentTitle(event.target.value)}
                    val={currentTitle}
                    className="form-control"/>
                <i onClick={event => deleteItem(item)} className="fa-sharp fa-solid fa-times float-right"/>
                <i onClick={event => saveTitle()} className="fa-sharp fa-solid fa-check float-right"/>
            </>

        </>
    )
}

export default EditableItem;
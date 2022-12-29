import React, {useState} from "react";

export const HeadingWidget = ({
                                  setEditingWidget,
                                  editing,
                                  widget}) => {
    const [fieldText, setText] = useState(widget.text)

    return (
        <>
            {
                !editing &&
                (
                    <p>{widget.text}</p>

                )
            }

            {
                editing &&
                <div className = "list-group">
                    <select onChange={(event) => {
                        widget.type = event.target.value
                        setEditingWidget({
                                             ...widget,
                                             type: event.target.value})}} >
                        <option selected={widget.type === "Heading"} >Heading</option>
                        <option selected={widget.type === "Paragraph"}>Paragraph</option>
                    </select>
                    <input value={fieldText} onChange={event =>
                    {
                        widget.text = event.target.value
                        setText(event.target.value)
                    }}/>

                </div>


            }


        </>
    )
}

export default HeadingWidget
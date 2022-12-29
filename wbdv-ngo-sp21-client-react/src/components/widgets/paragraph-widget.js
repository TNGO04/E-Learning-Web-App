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
                <div className = "form-group">
                    <select className="form-control m-2" onChange={(event) => {
                        widget.type = event.target.value
                        setEditingWidget({
                                             ...widget,
                                             type: event.target.value})}} >
                        <option selected={widget.type === "Heading"} >Heading</option>
                        <option selected={widget.type === "Paragraph"}>Paragraph</option>
                        <option selected={widget.type === "Image"}>Image</option>
                    </select>
                    <textarea className="m-2 form-control" style={{'height': '200px'}} rows={"5"} value={fieldText} onChange={event =>
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
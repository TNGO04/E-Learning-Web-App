import React, {useState} from "react";

export const ListWidget = ({
    setEditingWidget,
    editing,
    widget}) => {

    const [ordered, setOrdered] = useState(false);
    const [fieldText, setText] = useState(widget.text)

    const checkHandler = () => {
        if (ordered) {
            widget.widgetOrder = 0
        }
        else {
            widget.widgetOrder = 1;
        };

        setOrdered(!ordered);
    }
    return (
        <div className="list-group">
            {
                !editing &&
                <>
                    {
                        (widget.widgetOrder == 1) &&
                            <ol>
                                {
                                    widget.text.split("\n").map((item, index) =>
                                        <li key={index}>
                                            {item}
                                        </li>)
                                }
                            </ol>
                    }
                    {
                        (widget.widgetOrder == 0) &&
                        <ul>
                            {
                                widget.text.split("\n").map((item, index) =>
                                                                <li key={index}>
                                                                    {item}
                                                                </li>)
                            }
                        </ul>
                    }
                </>
            }

            {
                editing &&
                <div className="form-control-group">
                    <select className="form-control" onChange={(event) => {
                        widget.type = event.target.value
                        setEditingWidget({
                                             ...widget,
                                             type: event.target.value})}} >
                        <option selected={widget.type === "Heading"} >Heading</option>
                        <option selected={widget.type === "Paragraph"}>Paragraph</option>
                        <option selected={widget.type === "Image"}>Image</option>
                        <option selected={widget.type === "List"}>List</option>
                    </select>


                    <input className="mt-2" id={`checkbox-${widget.id}`} type="checkbox" checked={widget.widgetOrder == 1} onClick={checkHandler}/>
                    <label htmlFor={`checkbox-${widget.id}`}>Ordered</label>

                    <textarea className="m-2 form-control" style={{'height': '200px'}} rows={"5"} value={fieldText} onChange={event =>
                    {
                        widget.text = event.target.value
                        setText(event.target.value)
                    }}/>
                </div>
            }
        </div>
    )

}
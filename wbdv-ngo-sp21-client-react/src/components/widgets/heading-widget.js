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
                    (widget.size === 1 && <h1>{widget.text}</h1>)
                    || (widget.size === 2 && <h2>{widget.text}</h2>)
                    || (widget.size === 3 && <h3>{widget.text}</h3>)
                    || (widget.size === 4 && <h4>{widget.text}</h4>)
                    || (widget.size === 5 && <h5>{widget.text}</h5>)
                    || (widget.size === 6 && <h6>{widget.text}</h6>)
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
                        }}
                        />

                <select  onChange={(event) =>
                        widget.size = +event.target.value} >
                    {
                        [1, 2, 3, 4, 5, 6].map(size =>
                           <option key={size} selected={widget.size === size}
                                   value={size}>{widget.type} {size}</option>
                        )
                    }

                </select>

                </div>


            }


        </>
    )
}

export default HeadingWidget

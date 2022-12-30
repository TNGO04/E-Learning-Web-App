import React from "react";

export const ImageWidget = ({
    setEditingWidget,
    editing,
    widget}) => {

    return (
        <>
            {
                !editing &&
                <img src={widget.url} width={widget.width} height={widget.height}/>
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


                    <label htmlFor={`url-${widget.id}`}>URL</label>
                    <input id={`url-${widget.id}`} onChange={(event) => {widget.url = event.target.value}}
                           className="form-control" placeholder={widget.url}/>

                    <label htmlFor={`width-${widget.id}`}>Width</label>
                    <input onChange={(event) => {widget.width = event.target.value}}
                        className="form-control" id={`width-${widget.id}`}/>

                    <label htmlFor={`height-${widget.id}`}>Height</label>
                    <input onChange={(event) => {widget.height = event.target.value}}
                        className="form-control" id={`height-${widget.id}`}/>
                </div>

            }
        </>
    );
}

export default ImageWidget;
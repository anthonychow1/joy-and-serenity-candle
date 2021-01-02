import React from "react";
import "./sections.css"

const Section =(props)=> {

    const section = props.cssName;
    const content = props.content;

    return (
    <div className={`${section}-section-container`}>
        <div className={`${section}-section-content`}>
            {content}
        </div>
    </div>);
}
export default Section;
import React from "react";
import "./Section.css";

function Section(props) {
    let fullWidth = props.fullWidth ? "full-width" : "";

    return (
        <section className="section">
            <div className={`section-container ${fullWidth}`}>
                <h2 className={`section-title ${fullWidth}`}>{props.title}</h2>
                <div className="section-content">{props.children}</div>
            </div>
        </section>
    );
}

export default Section;

import React from "react";
import { ReactComponent as BackIcon } from "../assets/icons/back.svg";
import { ReactComponent as NextIcon } from "../assets/icons/next.svg";
import ImageCard from "./ImageCard";
import "./Carousel.css";

function Carousel(props) {
    return (
        <div className="carousel">
            <div className="carousel-container">
                <div className="carousel-button">
                    <BackIcon className="carousel-button-icon" />
                    <button
                        className="carousel-button-button"
                        title="Previous image"
                    ></button>
                </div>
                <div className="carousel-content">
                    <div className="carousel-grid">
                        {props.images.map((image, key) => (
                            <ImageCard
                                {...image}
                                key={key}
                                shadow={key == 0 ? "short" : "long"}
                                inset
                            />
                        ))}
                    </div>
                </div>
                <div className="carousel-button">
                    <NextIcon className="carousel-button-icon" />
                    <button
                        className="carousel-button-button"
                        title="Next image"
                    ></button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;

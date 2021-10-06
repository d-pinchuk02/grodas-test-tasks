import { React, useState } from "react";
import { ReactComponent as StarIcon } from "../assets/icons/star-regular.svg";
import { ReactComponent as StarSolidIcon } from "../assets/icons/star-solid.svg";
import "./ImageCard.css";

function ImageCard(props) {
    let [rated, setRated] = useState(false);

    function handleRateButtonClick() {
        setRated(!rated);
    }

    function handleImageError(e) {
        e.preventDefault();

        // Отключаем событие для избежания бесконечного цикла,
        // если картинки-заглушки тоже нет на сервере
        e.target.onerror = null;
        e.target.src = "images/noimage.jpg";
    }

    let insetCard = (
        <div className="image-card">
            <div className="image-card-overlay">
                <div className={`image-card-button ${rated ? "rated" : ""}`}>
                    {rated ? (
                        <StarSolidIcon className="image-card-button-icon rated" />
                    ) : (
                        <StarIcon className="image-card-button-icon rated" />
                    )}
                    <button
                        className="image-card-button-button"
                        title="Rate image"
                        onClick={handleRateButtonClick}
                    ></button>
                </div>
                <div className="image-card-metadata">
                    <a href={props.url} className="image-card-title">
                        {props.title}
                    </a>
                    <ul className="image-card-tags">
                        {props.tags.map((tag, key) => (
                            <li className="image-card-tag-item" key={key}>
                                <a
                                    className="image-card-tag"
                                    href={"tags/" + tag}
                                >
                                    {"#" + tag}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`image-card-shadow ${props.shadow}`}>
                    <a className="image-card-image-link" href={props.url}></a>
                </div>
            </div>
            <img
                className="image-card-image"
                src={props.image}
                alt={props.title}
                title={props.title}
                onError={handleImageError}
            />
        </div>
    );

    let outsetCard = (
        <div className="image-card">
            <div className="image-card-overlay">
                <div className={`image-card-button ${rated ? "rated" : ""}`}>
                    {rated ? (
                        <StarSolidIcon className="image-card-button-icon rated" />
                    ) : (
                        <StarIcon className="image-card-button-icon rated" />
                    )}
                    <button
                        className="image-card-button-button"
                        title="Rate image"
                        onClick={handleRateButtonClick}
                    ></button>
                </div>
                <div className={`image-card-shadow ${props.shadow}`}>
                    <a className="image-card-image-link" href={props.url}></a>
                </div>
            </div>
            <img
                className="image-card-image"
                src={props.image}
                alt={props.title}
                title={props.title}
                onError={handleImageError}
            />
            <div className="image-card-outset-metadata">
                <a className="image-card-title outset" href={props.url}>
                    {props.title}
                </a>
                <ul className="image-card-tags outset">
                    {props.tags.map((tag, key) => (
                        <li className="image-card-tag-item outset" key={key}>
                            <a
                                className="image-card-tag outset"
                                href={"tags/" + tag}
                            >
                                {"#" + tag}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return props.inset ? insetCard : outsetCard;
}

export default ImageCard;

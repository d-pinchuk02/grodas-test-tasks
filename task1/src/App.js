import { React, useState, useEffect } from "react";
import exampleData from "./assets/example-data.json";
import "./App.css";
import { fetchImages } from "./services/images";
import Section from "./components/Section";
import ImageCard from "./components/ImageCard";
import Carousel from "./components/Carousel";

function App() {
    // FIXME: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Измените этот адрес на нужный адрес API
    const apiUrl = "http://localhost:8003/data.json";

    const [apiResponse, setApiResponse] = useState([]);
    const [featuredImages, setFeaturedImages] = useState([]);
    const [lastImages, setLastImages] = useState([]);

    function updateImages(images) {
        setFeaturedImages(
            images
                .map((img) => {
                    return {
                        image: img.image,
                        url: img.url,
                        title: img.title,
                        tags: img.tags,
                        age: img.age,
                        rating: img.rating,
                    };
                })
                .sort((a, b) => a.rating < b.rating)
                .slice(0, 5)
        );

        setLastImages(
            images
                .map((img) => {
                    return {
                        image: img.image,
                        url: img.url,
                        title: img.title,
                        tags: img.tags,
                        age: img.age,
                        rating: img.rating,
                    };
                })
                .sort((a, b) => a.age < b.age)
                .slice(0, 2)
        );
    }

    useEffect(() => {
        let mounted = true;
        fetchImages(apiUrl).then((response) => {
            if (mounted) {
                let images = response;
                if (response.length === 0) images = exampleData;

                setApiResponse(images);
                updateImages(images);
            }
        });
        return () => (mounted = false);
    }, []);

    return (
        <div className="container">
            <Section
                sectionClass="featured-imgs"
                title="Featured images"
                fullWidth
            >
                <Carousel images={featuredImages} />
            </Section>
            <Section sectionClass="last-imgs" title="Last images">
                <ImageCard {...lastImages[0]} />
                <ImageCard {...lastImages[1]} />
                <img src="images/banner.jpg" alt="Banner" />
            </Section>
        </div>
    );
}

export default App;

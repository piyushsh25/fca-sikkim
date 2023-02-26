import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function EventsCarousel({event}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={event.img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{event.header1}</h3>
                    <p>{event.description1}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={event.img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>{event.header2}</h3>
                    <p>{event.description2}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={event.img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>{event.header3}</h3>
                    <p>{event.description3}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

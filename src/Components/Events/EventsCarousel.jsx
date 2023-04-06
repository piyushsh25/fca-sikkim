import axios from 'axios';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { toast } from 'react-toastify';

export function EventsCarousel({ event }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const token = localStorage.getItem("token")
    const deletePostHandler = async (e, event) => {
        try {
            const response = await axios.delete("https://fca-backend.onrender.com/post", { uid: event.uid }, { headers: { token } })
            toast.success("Deleting Post Success !")
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }

    return (
        <div>
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
                {event.img4 ? <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={event.img4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>{event.header4}</h3>
                        <p>{event.description4}</p>
                    </Carousel.Caption>
                </Carousel.Item> : null}
                {event.img5 ? <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={event.img5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>{event.header5}</h3>
                        <p>{event.description5}</p>
                    </Carousel.Caption>
                </Carousel.Item> : null}
                {event.img6 ? <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={event.img6}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>{event.header6}</h3>
                        <p>{event.description6}</p>
                    </Carousel.Caption>
                </Carousel.Item> : null}
                {event.img7 ? <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={event.img7}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>{event.header7}</h3>
                        <p>{event.description7}</p>
                    </Carousel.Caption>
                </Carousel.Item> : null}
                {token ? <div className='delete-post-cta'>
                    <button onClick={(e) => deletePostHandler(e, event)}>
                        delete
                    </button>
                </div> : null}
            </Carousel>

        </div>
    );
}

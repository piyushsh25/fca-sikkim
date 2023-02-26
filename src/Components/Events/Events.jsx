import { EventsCarousel } from "./EventsCarousel"
import "./Event.css"
export const Events = () => {
    const eventDetails = [
        {
            header1: "event1",
            header2: "event1",
            header3: "event1",
            description1: "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
            description2: "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
            description3: "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
            img1: "https://www.linkpicture.com/q/20230215_151742.jpg",
            img2: "https://www.linkpicture.com/q/received_3498831533708050.jpeg",
            img3: "https://www.linkpicture.com/q/received_734302218312247.jpeg"
        },
        {
            header1: "event1",
            header2: "event1",
            header3: "event1",
            description1: "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
            description2: "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
            description3: "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
            img1: "https://www.linkpicture.com/q/20230215_151742.jpg",
            img2: "https://www.linkpicture.com/q/received_3498831533708050.jpeg",
            img3: "https://www.linkpicture.com/q/received_734302218312247.jpeg"

        },
        {
            header1: "event1",
            header2: "event1",
            header3: "event1",
            description1: "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
            description2: "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
            description3: "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
            img1: "https://www.linkpicture.com/q/20230215_151742.jpg",
            img2: "https://www.linkpicture.com/q/received_3498831533708050.jpeg",
            img3: "https://www.linkpicture.com/q/received_734302218312247.jpeg"
        },

    ]
    return <div className="event-carousel-container">
        {
            eventDetails.map((event) => {
                return <div
                    className="single-event-container"><EventsCarousel event={event} />
                </div>
            })
        }
    </div>
}
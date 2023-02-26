import { EventsCarousel } from "./EventsCarousel";
import "./Event.css";
export const Events = () => {
  const eventDetails = [
    {
      header1: "Workshop on Consumer Protection",
      header2: "Workshop on Consumer Protection",
      header3: "Workshop on Consumer Protection",
      description1:
        "Workshop on Consumer Protection in North Eastern States held at Guwahati, Assam on 2nd.December.2022.",
      description2:
        "TRAI - Consumer Outreach Programme.Hotel Fern Denzong Kazi Road , Gangtok Dated: 14th . March.2023.Time : 2 PM",
      description3:
        "Executive Member Miss Chamta Gurung participated on behalf of FCAS which is only Voluntary Consumer Organisation (VCO) in the state of Sikkim.",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676457332188.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676457335006.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676457325834.jpg",
    },
    {
      header1: "event1",
      header2: "event1",
      header3: "event1",
      description1:
        "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
      description2:
        "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
      description3:
        "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
      img1: "https://www.linkpicture.com/q/20230215_151742.jpg",
      img2: "https://www.linkpicture.com/q/received_3498831533708050.jpeg",
      img3: "https://www.linkpicture.com/q/received_734302218312247.jpeg",
    },
    {
      header1: "event1",
      header2: "event1",
      header3: "event1",
      description1:
        "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
      description2:
        "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
      description3:
        "description1 Nulla vitae elit libero, a pharetra augue mollis interdum.",
      img1: "https://www.linkpicture.com/q/20230215_151742.jpg",
      img2: "https://www.linkpicture.com/q/received_3498831533708050.jpeg",
      img3: "https://www.linkpicture.com/q/received_734302218312247.jpeg",
    },
  ];
  return (
    <div className="event-carousel-container">
      {eventDetails.map((event) => {
        return (
          <div className="single-event-container">
            <EventsCarousel event={event} />
          </div>
        );
      })}
    </div>
  );
};

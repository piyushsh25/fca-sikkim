import { EventsCarousel } from "./EventsCarousel";
import "./Event.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostsHandler } from "./PostHelper";
import dayjs from "dayjs";
export const Events = () => {
  const [eventArray, setEventArray] = useState([])
  const token = localStorage.getItem("token")
  useEffect(() => {
    getPostsHandler(setEventArray)
  }, [])
  const arrayToDisplay=[...eventArray].reverse()

  return (
    <div className="event-page-div">
      {token ? <div>
        <Link className="new-post-cta" to="/create-post">
          Create Post
        </Link></div> : null}
      <div className="event-carousel-container">

        {arrayToDisplay?.map((event, index) => {
          return (
            <div className="single-event-container" key={index}>
              <EventsCarousel event={event} setEventArray={setEventArray} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

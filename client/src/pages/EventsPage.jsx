import React from "react";
import EventCard from "../components/Route/Events/EventCard";
import Header from "../components/Layout/Header";

const EventsPage = () => {
  return (
    <>
      <div>
        <Header activeHeading={4} />
        <EventCard active={true}/>
        <EventCard active={false}/>
      </div>
    </>
  );
};

export default EventsPage;

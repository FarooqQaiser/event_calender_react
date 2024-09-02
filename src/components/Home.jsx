import React, { useState } from "react";
import Calender from "./Calender";
import CreateEvent from "./CreateEvent";
import Events from "./Events";
import UpdateEvent from "./UpdateEvent";
import DeleteEvent from "./DeleteEvent";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState("");
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [events, setEvents] = useState([]);
  const [showEvents, setShowEvents] = useState(false);
  const [eventName, setEventName] = useState("");
  const [isUpdateEvent, setIsUpdateEvent] = useState(false);
  const [isDeleteEvent, setIsDeleteEvent] = useState(false);

  const getDateFromCalendar = (date) => {
    setSelectedDate(date);
    setShowCreateEvent(true);
  };

  const getEvent = (event) => {
    setEvents([...events, event]);
    setShowEvents(true);
  };

  const handleUpdateEvent = (name) => {
    setEventName(name);
    setIsUpdateEvent(true);
  };

  const handleDeleteEvent = (name) => {
    setEventName(name);
    setIsDeleteEvent(true);
  };

  return (
    <>
      <div className="w-full h-full bg-[#F5F7FA] flex flex-col gap-6">
        <h1 className="font-bold text-4xl text-center text-green-500">
          Calender Application
        </h1>
        <div className="flex flex-col h-screen justify-between gap-5">
          <Calender getDateFromCalendar={getDateFromCalendar} />
          <div className="h-full flex flex-col p-5 gap-10">
            {showCreateEvent && (
              <>
                <CreateEvent selectedDate={selectedDate} getEvent={getEvent} />
              </>
            )}
            {showEvents && (
              <>
                <Events
                  events={events}
                  handleUpdateEvent={handleUpdateEvent}
                  handleDeleteEvent={handleDeleteEvent}
                />
              </>
            )}
          </div>
        </div>
      </div>
      {isUpdateEvent && (
        <>
          <UpdateEvent
            events={events}
            eventName={eventName}
            setIsUpdateEvent={setIsUpdateEvent}
          />
        </>
      )}
      {isDeleteEvent && (
        <>
          <DeleteEvent
            events={events}
            eventName={eventName}
            setIsDeleteEvent={setIsDeleteEvent}
          />
        </>
      )}
    </>
  );
}

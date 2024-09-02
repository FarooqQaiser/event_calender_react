import React, { useEffect, useState } from "react";

export default function Events({
  events,
  handleUpdateEvent,
  handleDeleteEvent,
}) {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    setEventsData(events);
  }, [events]);

  return (
    <>
      <div className="flex flex-col items-center gap-5 bg[#FEFEFF] p-3 shadow-md">
        <p className="text-xl font-bold">My Created Event List</p>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr]">
            <p className="text-center text-lg font-semibold">#</p>
            <p className="text-center text-lg font-semibold">Event</p>
            <p className="text-center text-lg font-semibold">Date</p>
            <p className="text-center text-lg font-semibold">Update Event</p>
            <p className="text-center text-lg font-semibold">Delete Event</p>
          </div>
          {eventsData.map((event, index) => (
            <>
              <div
                className="grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr] gap-x-2"
                key={index}
              >
                <p className="text-center" key={index}>
                  {index + 1}
                </p>
                <p className="text-center">{event.event}</p>
                <p className="text-center">{event.date[0]}</p>
                <button
                  className="bg-[#007BFF] text-white flex items-center px-2 rounded-md border border-[#007BFF] hover:bg-white hover:text-[#007BFF]"
                  onClick={() => handleUpdateEvent(event.event)}
                >
                  Update Event
                </button>
                <button
                  className="bg-[#007BFF] text-white flex items-center px-2 rounded-md border border-[#007BFF] hover:bg-white hover:text-[#007BFF]"
                  onClick={() => handleDeleteEvent(event.event)}
                >
                  Delete Event
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

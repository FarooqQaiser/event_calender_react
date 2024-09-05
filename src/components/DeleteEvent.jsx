import React, { useState } from "react";

export default function DeleteEvent({
  setEvents,
  events,
  eventName,
  setIsDeleteEvent,
}) {
  const handleNoOnClick = () => {
    setIsDeleteEvent(false);
  };

  const handleYesOnClick = () => {
    const newEventsArray = events.filter((item) => item.event !== eventName);
    setEvents(newEventsArray);
    setIsDeleteEvent(false);
  };

  return (
    <>
      <div className="w-full h-full top-0 fixed flex justify-center items-center text-white">
        <div className="w-2/3 h-1/4 bg-[#403F4B] flex flex-col justify-center items-center gap-5 px-2">
          <p className="text-red-300">
            Are you sure that you want to delete the below event?
          </p>
          <div className="w-full px-10 flex justify-between">
            <button
              className="bg-red-400 text-white flex items-center p-2 rounded-md border border-red-400 hover:bg-white hover:text-red-400"
              onClick={handleYesOnClick}
            >
              Yes
            </button>
            <button
              className="bg-green-400 text-white flex items-center p-2 rounded-md border border-green-bg-green-400 hover:bg-white hover:text-green-bg-green-400"
              onClick={handleNoOnClick}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

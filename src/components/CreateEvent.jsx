import React, { useEffect, useState } from "react";

export default function CreateEvent({ selectedDate, getEvent }) {
  const [date, setDate] = useState("");
  const [eventName, setEventName] = useState("");

  useEffect(() => {
    setDate(
      selectedDate
        .toString()
        .split(" 00:00:00 GMT+0500 (Pakistan Standard Time)")
    );
  }, [setDate, selectedDate]);

  const handleInputOnChange = (e) => {
    setEventName(e.target.value);
  };

  const handleInputOnKeyDown = (e) => {
    if (e === "Enter") {
      handleAddEventButton();
    }
  };

  const handleAddEventButton = () => {
    getEvent({
      event: eventName,
      date: date,
    });
    setEventName("");
    setDate("");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-3 px-2 bg[#FEFEFF] p-3 shadow-md">
        <p className="text-[#007BFF] font-bold">Create Event</p>
        <p className="text-blue-500">
          Selected Date: <span className="font-semibold">{date}</span>
        </p>
        <div className="flex gap-2">
          <input
            className="border border-black p-2 rounded-md"
            name="eventName"
            type="text"
            id="eventName"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => handleInputOnChange(e)}
            onKeyDown={(e) => handleInputOnKeyDown(e.code)}
          />
          <button
            className="bg-[#FF4081] text-white flex items-center px-2 rounded-md border border-[#FF4081] hover:text-[#FF4081] hover:bg-white"
            onClick={handleAddEventButton}
          >
            Add Event
          </button>
        </div>
      </div>
    </>
  );
}

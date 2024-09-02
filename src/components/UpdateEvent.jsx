import React, { useEffect, useState } from "react";

export default function UpdateEvent({ events, eventName, setIsUpdateEvent }) {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(eventName);
  }, [eventName]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleInputOnKeyDown = (e) => {
    if (e.code === "Enter") {
      handleUpdateOnClick();
    }
  };

  const handleUpdateOnClick = () => {
    events.map((event) => {
      if (events.find((item) => item.event === eventName)) {
        event.event = name;
      }
      return null;
    });
    setIsUpdateEvent(false);
  };

  const handleCancelOnClick = () => {
    setIsUpdateEvent(false);
  };

  return (
    <>
      <div className="w-full h-full top-0 fixed flex justify-center items-center text-white">
        <div className="w-2/3 h-1/4 bg-[#403F4B] flex flex-col justify-center items-center gap-5">
          <p className="">Update Event Name</p>
          <input
            name="updateEventName"
            id="updateEventName"
            className="border border-black p-2 rounded-md text-black"
            type="text"
            value={name}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleInputOnKeyDown(e)}
          />
          <div className="w-full px-10 flex justify-between">
            <button
              className="bg-[#007BFF] text-white flex items-center p-2 rounded-md border border-[#007BFF] hover:bg-white hover:text-[#007BFF]"
              onClick={handleUpdateOnClick}
            >
              Update
            </button>
            <button
              className="bg-[#007BFF] text-white flex items-center p-2 rounded-md border border-[#007BFF] hover:bg-white hover:text-[#007BFF]"
              onClick={handleCancelOnClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calender({ getDateFromCalendar }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleCalenderOnChange = (date) => {
    setCurrentDate(date);
    getDateFromCalendar(date);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center gap-3">
        <p className="font-semibold text-xl">Choose date for your event.</p>
        <Calendar onChange={handleCalenderOnChange} value={currentDate} />
      </div>
    </>
  );
}
